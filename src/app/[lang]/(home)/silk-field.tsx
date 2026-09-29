'use client';

import { useEffect, useRef, useState } from 'react';

const VERT = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAG = `
precision mediump float;
uniform float uTime;
uniform vec3 uColor;
uniform float uLightMode;
uniform vec2 uResolution;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 5; i++) {
    value += amplitude * valueNoise(p);
    p = p * 2.03 + vec2(17.2, 9.4);
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution.xy;
  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 p = vec2(uv.x * aspect, uv.y);

  float t = uTime * 0.16;
  vec2 drift = vec2(t * 0.2, t * 0.12);
  float warp = fbm(p * 1.15 + drift);
  float field = fbm(p * 1.35 + vec2(-t * 0.1, t * 0.16) + warp * 0.55);
  float cloud = smoothstep(0.28, 0.76, field);

  float grain = (hash(gl_FragCoord.xy) - 0.5) * 0.012;
  vec3 result;

  if (uLightMode > 0.5) {
    vec3 paper = vec3(1.0);
    vec3 tint = mix(paper, uColor, 0.28);
    result = mix(paper, tint, cloud * 0.95) + grain;
  } else {
    vec3 paper = vec3(0.09, 0.08, 0.14);
    vec3 tint = mix(paper, uColor, 0.5);
    result = mix(paper, tint, cloud * 0.82) + grain;
  }

  gl_FragColor = vec4(clamp(result, 0.0, 1.0), 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const value = hex.replace('#', '');
  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
  ];
}

export function SilkField({
  color = '#5645d4',
  darkColor = '#2a2158',
  className,
}: {
  color?: string;
  darkColor?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dark, setDark] = useState(false);
  const themeRef = useRef({ rgb: hexToRgb(color), light: 1 });
  themeRef.current = {
    rgb: hexToRgb(dark ? darkColor : color),
    light: dark ? 0 : 1,
  };

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains('dark'));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      powerPreference: 'low-power',
      preserveDrawingBuffer: true,
    });
    if (!gl) return;

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, VERT);
    const fragment = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'uTime');
    const uColor = gl.getUniformLocation(program, 'uColor');
    const uLight = gl.getUniformLocation(program, 'uLightMode');
    const uResolution = gl.getUniformLocation(program, 'uResolution');

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = Math.max(1, Math.floor(parent.clientWidth * dpr));
      const height = Math.max(1, Math.floor(parent.clientHeight * dpr));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uResolution, canvas.width, canvas.height);
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    let frame = 0;
    let time = 0;
    let last = performance.now();

    const draw = (now: number) => {
      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduce) time += delta;
      const theme = themeRef.current;
      gl.uniform3f(uColor, theme.rgb[0], theme.rgb[1], theme.rgb[2]);
      gl.uniform1f(uLight, theme.light);
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frame = requestAnimationFrame(draw);
    };

    const start = () => {
      last = performance.now();
      frame = requestAnimationFrame(draw);
    };
    const stop = () => cancelAnimationFrame(frame);
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
      resizeObserver.disconnect();
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className={className} />;
}

export const helloExample = `<Button>Hello Fumadocs</Button>`;

export const counterExample = `() => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  );
}`;

export const renderExample = `const label = 'From render()';

render(<Button>{label}</Button>);`;

export const ydesignButtonExample = `() => {
  const [preview, setPreview] = useState(null);

  const open = () => {
    createYdesignEditor({
      key: 'DEMO_API_KEY',
      sections: ['templates', 'photos', 'text', 'shapes', 'upload', 'background', 'layers', 'size'],
      defaultSection: 'photos',
      publishLabel: '完成',
      onPublish: ({ dataURL, json }) => {
        setPreview(dataURL);
        console.log('[ydesign] json', json);
      },
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={open}>打开 ydesign 编辑器</Button>
      {preview && (
        <img
          src={preview}
          alt="export preview"
          style={{ display: 'block', margin: '16px auto 0', maxHeight: 200 }}
        />
      )}
    </div>
  );
}`;

export const ydesignButtonExampleEn = `() => {
  const [preview, setPreview] = useState(null);

  const open = () => {
    createYdesignEditor({
      key: 'DEMO_API_KEY',
      sections: ['templates', 'photos', 'text', 'shapes', 'upload', 'background', 'layers', 'size'],
      defaultSection: 'photos',
      publishLabel: 'Done',
      onPublish: ({ dataURL, json }) => {
        setPreview(dataURL);
        console.log('[ydesign] json', json);
      },
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Button onClick={open}>Open ydesign editor</Button>
      {preview && (
        <img
          src={preview}
          alt="export preview"
          style={{ display: 'block', margin: '16px auto 0', maxHeight: 200 }}
        />
      )}
    </div>
  );
}`;

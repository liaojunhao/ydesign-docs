export const homeCopy = {
  en: {
    eyebrow: 'Visual editor + image API',
    titleLines: ['Edit the template once', 'Batch-render with the API'],
    description:
      'Adjust the template, then pass different data to the API and batch-render posters and product images.',
    primaryCta: 'Start rendering',
    imageDocsCta: 'Image docs',
    editorDocsCta: 'Editor docs',
    scenarios: {
      eyebrow: 'Use cases',
      title: 'Generate every image automatically',
      description:
        'Keep a consistent look with a template, then pass changing data to generate matching images. No more opening a design tool to export each one.',
      placeholder: 'Image placeholder',
      items: [
        {
          title: 'E-commerce product images',
          description:
            'Batch-generate matching hero images, promo shots, and price cards from product data, without exporting them one by one.',
          image: '',
        },
        {
          title: 'Social covers',
          description:
            'One template fits multiple social sizes, so campaigns, brand, and product posts stay consistent.',
          image: '',
        },
        {
          title: 'Share posters',
          description:
            'Automatically create posters for blog posts, product updates, and event notices, so they travel better on social.',
          image: '',
        },
        {
          title: 'Article covers',
          description:
            'When a CMS publishes, generate on-brand article covers and Open Graph images.',
          image: '',
        },
      ],
    },
    templates: {
      eyebrow: 'Template inspiration',
      title: 'Start from a good template',
      description:
        'Start quickly with a ready-made template, or design from scratch with HTML + CSS.',
      more: 'View more templates',
      items: [
        {
          category: 'Social share card',
          title: 'Xiaoyuzhou podcast share card',
          description:
            'A podcast episode card with cover art, episode title, host, and a listen QR code.',
          size: '640 × 360',
          image: '',
        },
        {
          category: 'Profile card',
          title: 'Twitter profile card',
          description:
            'A social profile card showing avatar, name, bio, and follow counts.',
          size: '1200 × 630',
          image: '',
        },
        {
          category: 'Article cover',
          title: 'Blog article cover',
          description:
            'A technical article cover with category, publish date, title, and author.',
          size: '1200 × 630',
          image: '',
        },
        {
          category: '',
          title: 'Blank template',
          description: 'A blank template you can take in any direction.',
          size: '640 × 360',
          image: '',
        },
      ],
    },
    features: {
      eyebrow: 'Features',
      title: 'Control every detail with HTML + CSS',
      description:
        'From a simple API call to a fully custom template, ydesign covers the image generation you need.',
      items: [
        {
          icon: 'sliders',
          title: 'Fully customizable',
          description:
            'Control layout, color, spacing, and style. Any Tailwind class or inline style can match the brand.',
        },
        {
          icon: 'type',
          title: 'Broad font support',
          description:
            '10+ commercially free fonts are built in, and custom fonts work too. Chinese, English, Japanese, Korean, and emoji render without extra setup.',
        },
        {
          icon: 'zap',
          title: 'Fast generation',
          description:
            'P99 response time is under 1s. Rendering does not go through a browser, so the ceiling is higher.',
        },
        {
          icon: 'globe',
          title: 'Multiple output formats',
          description:
            'Export PNG, JPEG, and WebP, and set resolution and quality for each platform.',
        },
      ],
    },
    methods: {
      eyebrow: 'Rendering',
      title: 'One piece of content, two ways to render',
      template: {
        label: 'Method 01',
        title: 'Render from a reusable template',
        description:
          'Save the HTML + CSS as a template, then pass only the variables. Built for batch jobs, automation, and a consistent brand look. This covers most cases.',
        steps: [
          {
            title: 'Design the template',
            description: 'Write a reusable template with HTML / JSX + CSS',
          },
          {
            title: 'Set variables',
            description:
              'Turn the title, image, price, and other content into parameters',
          },
          {
            title: 'Call the API',
            description: "Send the template ID and this render's data",
          },
          {
            title: 'Get the image',
            description: 'Receive an image URL you can use directly',
          },
        ],
      },
      raw: {
        label: 'Method 02',
        title: 'Pass the full HTML + CSS',
        description:
          'Send the HTML and CSS needed for each render. Better when the structure changes a lot and you want full control.',
        request: 'POST /v1/render',
        body: `{
  "content": "<div>...</div>",
  "width": 640,
  "height": 360,
  "format": "png"
}`,
      },
    },
    hero: {
      editor: 'Editor',
      preview: 'Preview',
      imageAlt: 'Rendered summer promo image',
      tools: {
        template: 'Template',
        text: 'Text',
        image: 'Image',
        position: 'Position',
      },
      variables: {
        panel: 'Variables',
        type: 'Text',
        defaultValue: 'Default',
      },
      canvas: {
        badge: 'SALE',
        title: 'Summer edit',
        titleLabel: 'Title',
        subtitle: 'Selected styles, 50% off',
        cta: 'Buy now',
        price: '$49',
        original: '$99',
      },
    },
    cards: {
      image: {
        title: 'Image API',
        description: 'HTML / JSX templates, variables, and render endpoints.',
      },
      editor: {
        title: 'Design Editor',
        description: 'Edit the same templates on a visual canvas.',
      },
      showcase: {
        title: 'Showcase',
        description:
          'Share posters, product covers, article covers, and live edits.',
      },
      blog: {
        title: 'Blog',
        description: 'Release notes and longer write-ups.',
      },
    },
  },
  cn: {
    eyebrow: '面向开发者的可视化编辑器 + 图片生成 API',
    titleLines: ['基于模板调整数据结构', '自动批量出图'],
    description:
      '在编辑器里调整版式和文案，保存为可复用模板。传入不同数据，一次生成整批海报和商品图。',
    primaryCta: '开始渲染',
    imageDocsCta: '图片渲染文档',
    editorDocsCta: '编辑器文档',
    scenarios: {
      eyebrow: '应用场景',
      title: '自动生成每张图片',
      description:
        '使用模板保持视觉一致，传入动态变化的数据即可快速生成视觉一致的图片。无需反复打开设计工具导出图片。',
      placeholder: '占位图',
      items: [
        {
          title: '电商商品图',
          description:
            '根据商品数据批量生成统一风格的主图、促销图和价格卡片，告别重复导出',
          image: '',
        },
        {
          title: '社交媒体封面',
          description:
            '一套模板适配多个社交平台尺寸，让活动、品牌与产品内容持续保持一致。',
          image: '',
        },
        {
          title: '分享海报',
          description:
            '为博客文章、产品更新、活动通知自动生成精美海报，提升社交传播效果。',
          image: '',
        },
        {
          title: '文章封面',
          description:
            'CMS 发布内容时自动生成符合品牌规范的文章封面与 Open Graph 图片。',
          image: '',
        },
      ],
    },
    templates: {
      eyebrow: '模板灵感',
      title: '从一个好模板开始',
      description: '使用现成模板快速开始，也可以用 HTML + CSS 从零开始设计。',
      more: '查看更多模板',
      items: [
        {
          category: '社交分享卡',
          title: '小宇宙播客节目分享卡片',
          description:
            '播客单集分享卡，含节目封面、单集标题、主播与收听二维码。',
          size: '640 × 360',
          image: '',
        },
        {
          category: '个人名片',
          title: 'Twitter 账号片卡',
          description: '社交账号片卡，展示头像、昵称、简介与关注数据。',
          size: '1200 × 630',
          image: '',
        },
        {
          category: '文章封面',
          title: '博客文章封面',
          description: '技术文章封面，含分类标签、发布日期、大标题与作者信息。',
          size: '1200 × 630',
          image: '',
        },
        {
          category: '',
          title: '空白模板',
          description: '空白模板，可以自由发挥。',
          size: '640 × 360',
          image: '',
        },
      ],
    },
    features: {
      eyebrow: '功能特性',
      title: '用 HTML + CSS 控制每一处细节',
      description:
        '从简单的 API 调用到复杂的自定义模板，ydesign 覆盖你所需的一切图片生成场景。',
      items: [
        {
          icon: 'sliders',
          title: '高度可定制',
          description:
            '完全控制布局、颜色、间距和样式。支持任意 Tailwind 类和内联样式，生成完全符合品牌调性的图片。',
        },
        {
          icon: 'type',
          title: '多种字体支持',
          description:
            '内置 10+ 免费商用字体，也支持自定义字体。中文、英文、日文、韩文、Emoji 完美渲染，无需额外配置。',
        },
        {
          icon: 'zap',
          title: '高性能生成',
          description: 'P99 响应时间 < 1s。不基于浏览器渲染，性能上限更高。',
        },
        {
          icon: 'globe',
          title: '多种输出格式',
          description:
            '支持 PNG、JPEG、WebP 输出，可指定分辨率和质量参数，满足不同平台的图片规格要求。',
        },
      ],
    },
    methods: {
      eyebrow: '渲染方式',
      title: '同一套内容，两种渲染方式',
      template: {
        label: '方式 01',
        title: '基于可复用模板渲染',
        description:
          '先将 HTML + CSS 保存为模板，调用时只传变量。适合批量、自动化和品牌视觉一致的生产场景。适用于大部分场景。',
        steps: [
          {
            title: '设计模板',
            description: '使用 HTML / JSX + CSS 编写可复用模板',
          },
          {
            title: '设置变量',
            description: '把标题、图片、价格等内容参数化',
          },
          {
            title: '调用 API',
            description: '传入模板 ID 与本次渲染的数据',
          },
          {
            title: '获得图片',
            description: '返回可直接使用的图片 URL',
          },
        ],
      },
      raw: {
        label: '方式 02',
        title: '完整传入 HTML + CSS',
        description:
          '将每次渲染需要的 HTML 与 CSS 完整传入。适合内容结构变化较大、希望完全自行控制的场景。',
        request: 'POST /v1/render',
        body: `{
  "content": "<div>...</div>",
  "width": 640,
  "height": 360,
  "format": "png"
}`,
      },
    },
    hero: {
      editor: '编辑器',
      preview: '预览',
      imageAlt: '夏季焕新商品促销图渲染结果',
      tools: {
        template: '模板',
        text: '文字',
        image: '图片',
        position: '位置',
      },
      variables: {
        panel: '变量',
        type: '文本',
        defaultValue: '默认值',
      },
      canvas: {
        badge: 'SALE',
        title: '夏季焕新',
        titleLabel: '标题',
        subtitle: '精选好物 低至5折',
        cta: '立即购买',
        price: '¥49',
        original: '¥99',
      },
    },
    cards: {
      image: {
        title: '图片 API',
        description: 'HTML / JSX 模板、变量和渲染接口。',
      },
      editor: {
        title: '在线编辑器',
        description: '在画布上编辑同一批出图模板。',
      },
      showcase: {
        title: '场景展示',
        description: '分享海报、商品封面、文章封面和在线改稿。',
      },
      blog: {
        title: '博客',
        description: '版本说明与更长的文章。',
      },
    },
  },
} as const;

export const homeCopy = {
  en: {
    eyebrow: 'Visual editor + image API',
    titleLines: ['Edit the template once', 'Batch-render with the API'],
    description:
      'Adjust the template, then pass different data to the API and batch-render posters and product images.',
    primaryCta: 'Start rendering',
    imageDocsCta: 'Image rendering docs',
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

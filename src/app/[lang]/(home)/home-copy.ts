export const homeCopy = {
  en: {
    eyebrow: 'Visual editor + image API',
    titleLines: ['Edit the template once', 'Batch-render with the API'],
    description:
      'Adjust layout, copy, and layers in the editor, save a reusable template, then pass different data to the API and render posters, covers, and product images in one go.',
    primaryCta: 'Start rendering',
    secondaryCta: 'View docs',
    hero: {
      editor: 'Editor',
      imageAlt: 'Rendered summer promo image',
      tools: {
        template: 'Template',
        text: 'Text',
        image: 'Image',
        position: 'Position',
      },
      canvas: {
        badge: 'SALE',
        title: 'Summer edit',
        subtitle: 'Selected styles, 50% off',
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
    eyebrow: '可视化编辑器 + 出图 API',
    titleLines: ['用编辑器改模板', '用 API 批量出图'],
    description:
      '在编辑器里调整版式、文案和图层，保存为可复用模板。调用 API 传入不同数据，一次生成整批海报、封面和商品图。',
    primaryCta: '开始渲染',
    secondaryCta: '查看文档',
    hero: {
      editor: '编辑器',
      imageAlt: '夏季焕新商品促销图渲染结果',
      tools: {
        template: '模板',
        text: '文字',
        image: '图片',
        position: '位置',
      },
      canvas: {
        badge: 'SALE',
        title: '夏季焕新',
        subtitle: '精选好物 低至5折',
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

import { defineI18n } from 'fumadocs-core/i18n';
import { zhCN } from '@fumadocs/language/zh-cn';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { openapiTranslations } from 'fumadocs-openapi/i18n';

/** GitHub Pages 静态导出不能用 cookie/middleware，语言前缀始终出现在 URL 里。 */
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'cn'],
  hideLocale: 'never',
});

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .extend(openapiTranslations())
  .preset('cn', zhCN())
  .add({
    en: {
      displayName: 'English',
    },
    cn: {
      displayName: '简体中文',
    },
  });

export function htmlLang(locale: string) {
  return locale === 'cn' ? 'zh-CN' : locale;
}

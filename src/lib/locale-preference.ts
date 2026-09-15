export const localeStorageKey = 'ydesign-locale';

export function isAppLocale(value: string | null): value is 'en' | 'cn' {
  return value === 'en' || value === 'cn';
}

/** 仅在站点根路径执行；优先用用户选过的语言，否则用浏览器语言。 */
export const localeRedirectScript = `(function(){
  var path=location.pathname;
  if(path!=="/"&&path!=="")return;
  var saved=null;
  try{saved=localStorage.getItem("${localeStorageKey}");}catch(e){}
  if(saved==="cn"||saved==="en"){location.replace("/"+saved+"/");return;}
  var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"];
  var cn=false;
  for(var i=0;i<langs.length;i++){
    if(/^zh\\b/i.test(String(langs[i]))){cn=true;break;}
  }
  location.replace(cn?"/cn/":"/en/");
})();`;

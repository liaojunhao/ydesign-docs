/** 仅在站点根路径执行；放进根 layout 的 inline script，尽量赶在首屏绘制前跳转。 */
export const localeRedirectScript = `(function(){
  var path=location.pathname;
  if(path!=="/"&&path!=="")return;
  var langs=navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||"en"];
  var cn=false;
  for(var i=0;i<langs.length;i++){
    if(/^zh\\b/i.test(String(langs[i]))){cn=true;break;}
  }
  location.replace(cn?"/cn/":"/en/");
})();`;

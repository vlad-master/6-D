async function copyToClipboard(parent) {

   var element = parent.children[0];
   var onclickValue =element.getAttribute("onclick");
   var copyText= onclickValue.substring(onclickValue.indexOf("=") + 2,  onclickValue.lastIndexOf("'"));
   
   
   navigator.clipboard.writeText(copyText);
  
  }
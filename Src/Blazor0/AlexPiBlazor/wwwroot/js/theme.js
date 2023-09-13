window.addCSS = (href) => {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

window.removeCSS = (href) => {
  var links = document.head.getElementsByTagName('link');
  for (var i = 0; i < links.length; i++) {
    if (links[i].href.indexOf(href) > -1) {
      document.head.removeChild(links[i]);
      break;
    }
  }
}

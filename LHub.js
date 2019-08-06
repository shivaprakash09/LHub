var pages = prompt("No of pages to be printed", 100);

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild; 
}

document.body.innerHTML = ""

for(var i = 1; i <= pages; i++){ 
  document.body.append(createElementFromHTML(`<object id="object_container_${i}" page_placed="center" class="object_container" type="image/svg+xml" data="xml/topic${i}.svg" style="width: auto; height: 99%; margin-left: 0.6%; margin-top: 0%;">Your browser does not support SVG</object>`));
}

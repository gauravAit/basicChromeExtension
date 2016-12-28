chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "I was clicked" ) {
      console.log("Cool! you clicked my chrome extension.");
      if(window.location.origin.indexOf('https://www.google.co') >=0){
        document.body.querySelector('input[title=Search]').value = request.country;
      }
    }
  }
);

document.body.addEventListener('click', function(event){
  var capturedElem = event.target||event.srcElemen;
  console.log("you clicked the element with xpath: " + getXPathToTheElement(capturedElem));
  console.log("you clicked the element with selector path: " + UTILS.cssPath(capturedElem));
})
function getXPathToTheElement(elem) {
    if (elem.id!==''){
      return 'id("'+elem.id+'")';
    }
    if (elem === document.body) {
      return elem.tagName;
    }

    var count= 0;
    var siblings= elem.parentNode.children;
    for (var i= 0; i<siblings.length; i++) {
        var sibling= siblings[i];
        if (sibling===elem) {
          return getXPathToTheElement(elem.parentNode)+'/'+elem.tagName+'['+(count+1)+']';
        }
        if (sibling.nodeType===1 && sibling.tagName===elem.tagName) {
          count++;
        }
    }
}

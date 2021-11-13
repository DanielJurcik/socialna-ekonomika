function toggleClass(className) {
   let element = event.target;
   let wrapper = element.parentElement;
   wrapper.classList.toggle(className);
   element.classList.toggle(className);
}

addToggleListener();

function addToggleListener(){
   const listenersElements = document.querySelectorAll(".custom-listener-toogle-active");
   console.log(listenersElements);
   listenersElements.forEach(element => {
      const attributeValue = element.getAttribute("data-toogle-element-selector");
      toggableElement = document.querySelector(attributeValue);
      toggableElement.classList.toggle(className);
   });
}

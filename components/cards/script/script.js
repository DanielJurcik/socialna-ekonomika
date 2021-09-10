function toggleClass(className) {
   let element = event.target;
   let wrapper = element.parentElement;
   wrapper.classList.toggle(className);
   element.classList.toggle(className);
}
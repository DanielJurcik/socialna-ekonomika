function toggleClass(className) {
   let element = event.target;
   element.classList.toggle(className);
   console.log(element);
   element.parentElement.classList.toggle(className);
}

function moveSearch(){
   const searchBarWrapper = document.querySelector('#controlers4');

   //let searchBarWrapperCopy = searchBarWrapper.cloneNode(true);
   //searchBarWrapperCopy.removeAttribute("id");

   // searchBarWrapperCopy.addEventListener("input",function(){
   //    console.log("pise");
   //    const searchBarWrapper = document.querySelector('#controlers3 input');
   //    searchBarWrapper.value = this.value;
   // });
   
   console.log(searchBarWrapper);
   const dashboardElem = document.querySelector('#dashboard');
   console.log(dashboardElem);

   const newDiv = document.createElement("div");

   newDiv.innerHTML = '<hr><h1 id="nadpis">TOTOT JE TEST</h1><hr>';
   
   //dashboardElem.insertBefore(searchBarWrapperCopy,dashboardElem.firstChild);
   dashboardElem.insertBefore(newDiv,dashboardElem.firstChild);

   const nadpis = document.querySelector('#nadpis');
   nadpis.appendChild(searchBarWrapper);
}

setTimeout(function() {
   moveSearch();
 }, 200);


 
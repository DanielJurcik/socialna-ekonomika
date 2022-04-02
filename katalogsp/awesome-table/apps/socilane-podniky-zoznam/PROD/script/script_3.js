function moveSearch(){
   const searchBarWrapper = document.querySelector('#controlers4');
   const searchInit = document.querySelector('.sp-catalog-search-init');
   searchInit.appendChild(searchBarWrapper);
}

function moveCatogory(){
   const categoryFilter = document.querySelector('#controlers1');
   categoryFilter.style.display = 'none';
   const dropDownMenu = document.querySelector('#controlers1 .awt-csvFilter-dropdown-menu')
   const heroSection = document.querySelector('.rsp-category-filter');

   heroSection.appendChild(dropDownMenu);
   heroSection.appendChild(categoryFilter)
}

function replaceNoResultText(){
   const noResultTextElem = document.querySelector('.at-noData .at-noData-message');
   noResultTextElem.innerHTML = 'Ľutujeme, zadaným podmienkam nevyhovuje žiadne RSP';
   console.log('Replace resutl');
}

function addListenerToButton(){
   const searchBtnElem = document.querySelector('.sp-catalog-search-btn');
   searchBtnElem.addEventListener("click", scrollToElement);
   console.log('Listener ide');
}

function scrollToElement(){
   const searchResults = document.querySelector('.at-filter-panel');
   searchResults.scrollIntoView();
}

function showMoreButton(){
   const showMoreBtnElem = document.querySelector('.show-more-category');
   showMoreBtnElem.addEventListener("click", showMoreCategory);
}

function showMoreCategory(e){
   const categoryContainerElem = document.querySelector('.rsp-category-filter .awt-csvFilter-dropdown-menu');
   categoryContainerElem.style.height = 'auto';
   e.target.classList.toogle("active");
   e.target.innerHTML = 'Skryť možnosti';

}

setTimeout(function() {
   moveSearch();
   //moveCatogory();
   replaceNoResultText();
   addListenerToButton();
   //showMoreButton();
 }, 150); 
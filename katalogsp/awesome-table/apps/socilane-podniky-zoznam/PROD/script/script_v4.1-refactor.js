//Init values
const searchInputClass = 'searchFilter';
const searchInputWrapperClass = 'sp-catalog-search-init';

init();

function init(){

   setTimeout(function() {
      moveSearch();
      replaceNoResultText();
      addListenerToSearchButton();
    }, 150);

}

function moveSearch(){
   const searchInputElem = document.querySelector('.'+searchInputClass);
   const searchInputWrapperElem = document.querySelector('.'+searchInputWrapperClass);
   searchInputWrapperElem.appendChild(searchInputElem);
}

function replaceNoResultText(){
   const noResultTextElem = document.querySelector('.at-noData .at-noData-message');
   noResultTextElem.innerHTML = 'Ľutujeme, zadaným podmienkam nevyhovuje žiadne RSP';
   console.log('Replace resutl');
}

function addListenerToSearchButton(){
   const searchBtnElem = document.querySelector('.sp-catalog-search-btn');
   searchBtnElem.addEventListener("click", scrollToElement);
}

function scrollToElement(){
   const searchResults = document.querySelector('.at-filter-panel');
   searchResults.scrollIntoView();
}


 
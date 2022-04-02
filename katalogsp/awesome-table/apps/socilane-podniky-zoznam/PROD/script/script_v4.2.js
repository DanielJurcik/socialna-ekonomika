//Init values

setTimeout(function() {
   init();
}, 250);

function init(){
      moveSearch();
      replaceNoResultText();
      addListenerToSearchButton();
      //moveSearchFilter();
      //moveClearFilter();
}

function moveSearch(){
   const searchInputClass = 'searchFilter';
   const searchInputWrapperClass = 'sp-catalog-search-init';
   const searchInputElem = document.querySelector('.'+searchInputClass);
   const searchInputWrapperElem = document.querySelector('.'+searchInputWrapperClass);
   searchInputWrapperElem.appendChild(searchInputElem);
}

function replaceNoResultText(){
   const noResultTextElem = document.querySelector('.at-noData .at-noData-message');
   noResultTextElem.innerHTML = 'Ľutujeme, zadaným podmienkam nevyhovuje žiadne RSP';
}

function moveSearchFilter(){
   const filterWrapperPlacementClass = 'filter-wrapper';
   const filterWrapperClass = 'at-action-panel';
   const filterWrapperPlacementElem = document.querySelector('.'+filterWrapperPlacementClass);
   const filterWrapperElem = document.querySelector('.'+filterWrapperClass);
   filterWrapperPlacementElem.appendChild(filterWrapperElem);
}

function moveClearFilter(){
   const clearFiltersElem = document.querySelector('[title="Clear filters"]');
   const filterWrapperPlacementElem = document.querySelector('.at-table-fix .cards-page');
   filterWrapperPlacementElem.appendChild(clearFiltersElem);
}

function addListenerToSearchButton(){
   const searchBtnElem = document.querySelector('.sp-catalog-search-btn');
   searchBtnElem.addEventListener("click", scrollToElement);
}

function scrollToElement(){
   const searchResults = document.querySelector('.at-filter-panel');
   searchResults.scrollIntoView();
}


 
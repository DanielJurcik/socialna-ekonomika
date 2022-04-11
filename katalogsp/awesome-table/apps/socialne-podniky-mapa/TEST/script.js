init();

function init(){
   setTimeout(function() {
      moveSearch();
      //replaceNoResultText();
      addListenerToSearchButton();
      renameFilterOptions();
      //moveSearchFilter();
      moveClearFilter();
    }, 150);

    setTimeout(function() {
      moveSearch();
      moveClearFilter();
    }, 500);

    setInterval(moveSearch,200);
    setInterval(moveClearFilter,200);
}

function moveSearch(){
   let searchInputElem = document.querySelector('#dashboard .searchFilter');
   if(!searchInputElem) return;
   let searchInputWrapperClass = 'sp-catalog-search-init';
   let searchInputWrapperElem = document.querySelector('.'+searchInputWrapperClass);
   searchInputWrapperElem.appendChild(searchInputElem);
}

function replaceNoResultText(){
   let noResultTextElem = document.querySelector('.at-noData .at-noData-message');
   noResultTextElem.innerHTML = 'Ľutujeme, zadaným podmienkam nevyhovuje žiadne RSP';
}

function moveSearchFilter(){
   let filterWrapperPlacementClass = 'filter-wrapper';
   let filterWrapperClass = 'at-action-panel';
   let filterWrapperPlacementElem = document.querySelector('.'+filterWrapperPlacementClass);
   let filterWrapperElem = document.querySelector('.'+filterWrapperClass);
   filterWrapperPlacementElem.appendChild(filterWrapperElem);
}

function addListenerToSearchButton(){
   let searchBtnElem = document.querySelector('.sp-catalog-search-btn');
   searchBtnElem.addEventListener("click", scrollToElement);
}

function scrollToElement(){
   let searchResults = document.querySelector('.at-filter-panel');
   searchResults.scrollIntoView();
}

function renameFilterOptions(){
   let clearFilterText = document.querySelector('[title="Clear filters"] span');
   clearFilterText.innerHTML = 'Vymazať filtrovanie';

   //let copyLinkText = document.querySelector('.at-action-menu-dropdown [title="Copy filtered URL"] span');
   //copyLinkText.innerHTML = 'Kopírovať link filtru';

   //let printText = document.querySelector('.at-action-menu-dropdown [title="Print"] span');
   //printText.innerHTML = 'Tlačiť';
}

function moveClearFilter(){
   let haveClearFilter = document.querySelector('.clear-filter-wrapper #at-button-cleanFilter');
   if(haveClearFilter) return;
   let clearFilterElement = document.querySelector('#at-button-cleanFilter');
   let searchWrapperElement = document.querySelector('.clear-filter-wrapper');
   searchWrapperElement.appendChild(clearFilterElement);
   renameFilterOptions();
}
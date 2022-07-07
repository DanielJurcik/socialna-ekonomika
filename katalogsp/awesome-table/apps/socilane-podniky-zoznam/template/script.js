init();

function init() {
   // Timeout nastavený , kedže DOMLoad alebo load nechcel ísť
   setTimeout(()=> {
      renameFilterTitleAtr();
      moveSearch();
      replaceNoResultText();
      addListenerToSearchButton();
      renameFilterOptions();
      moveClearFilter();
      addGlobalListeners();
      addListenerToSwitch()
      //moveSearchFilter();
      initAdaptivSwitch();
   },150)

   // Z nejakého dôvodu sa stránka niekedy refresne a stránka sa vráti do pôvodného stavu
   // JS sa ale znova nevykoná.
   setInterval(moveSearch, 200);
   setInterval(moveClearFilter, 200);
   setInterval(replaceNoResultText, 400);
   setInterval(renameFilterTitleAtr, 1000);
   setInterval(initAdaptivSwitch, 2000);
}

function moveSearch() {
   let searchInputElem = document.querySelector('#dashboard .searchFilter');
   if (!searchInputElem) return;
   let searchInputWrapperClass = 'sp-catalog-search-init';
   let searchInputWrapperElem = document.querySelector('.' + searchInputWrapperClass);
   searchInputWrapperElem.appendChild(searchInputElem);
}

function replaceNoResultText() {
   let noResultTextElem = document.querySelector('.at-noData .at-noData-message');
   if (!noResultTextElem) return;
   if (noResultTextElem.classList.contains('translated')) return;
   noResultTextElem.classList.add('translated');
   let noResultText = 'Ľutujeme, zadaným kritériám nevyhovuje žiadny sociálny podnik. Skúste spresniť svoje vyhľadávanie.';
   noResultTextElem.innerHTML = noResultText;
}

function moveSearchFilter() {
   let filterWrapperPlacementClass = 'filter-wrapper';
   let filterWrapperClass = 'at-action-panel';
   let filterWrapperPlacementElem = document.querySelector('.' + filterWrapperPlacementClass);
   let filterWrapperElem = document.querySelector('.' + filterWrapperClass);
   filterWrapperPlacementElem.appendChild(filterWrapperElem);
}

function addListenerToSearchButton() {
   let searchBtnElem = document.querySelector('.sp-catalog-search-btn');
   searchBtnElem.addEventListener("click", scrollToElement);
}

function scrollToElement() {
   let searchResults = document.querySelector('.at-filter-panel');
   searchResults.scrollIntoView();
}

function renameFilterOptions() {
   let clearFilterText = document.querySelector('[title="Clear filters"] span');
   clearFilterText.innerHTML = 'Vymazať filtrovanie';

   //let copyLinkText = document.querySelector('.at-action-menu-dropdown [title="Copy filtered URL"] span');
   //copyLinkText.innerHTML = 'Kopírovať link filtru';

   //let printText = document.querySelector('.at-action-menu-dropdown [title="Print"] span');
   //printText.innerHTML = 'Tlačiť';
}

function moveClearFilter() {
   let haveClearFilter = document.querySelector('.clear-filter-wrapper #at-button-cleanFilter');
   if (haveClearFilter) return;
   let clearFilterElement = document.querySelector('#at-button-cleanFilter');
   let searchWrapperElement = document.querySelector('.clear-filter-wrapper');
   searchWrapperElement.appendChild(clearFilterElement);
   renameFilterOptions();
}

////////////////////
// NEW 
////////////////////

function addGlobalListeners() {
   //const filterElems = document.querySelectorAll('.at-filter-panel .awt-csvFilter');
   document.addEventListener('click', renameElementText)
}

//Prepíše elementy, ktoré nemajú title na "žiadna možnosť"
function renameElementText() {
   const elems = document.querySelectorAll('.csvFilter-itemText:not([title])');
   const elemsWithTitle = document.querySelectorAll('.csvFilter-itemText[title=""]');
   elems.forEach(elem => {
      elem.innerHTML = 'Žiadna možnosť'
   });

   elemsWithTitle.forEach(elem => {
      elem.innerHTML = 'Žiadna možnosť'
   });
}

function renameFilterTitleAtr(){
   const filterItems = document.querySelectorAll('.csvFilter-item .csvFilter-itemText');
   filterItems.forEach(item => {
      const orgTitle = item.title;
      let replacedTitle = orgTitle.replace("Remove","Vybrať:");
      replacedTitle = replacedTitle.replace(/from.*$/i, "");
      item.title = replacedTitle;
   });
}


//////////////////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////

// create a variable for the parent window. We will assign it once we get the first message.
let parent = null;


function addListenerToSwitch(){
   const switchBtnElem = document.querySelector('.switch');
   switchBtnElem.addEventListener('click',onSwitchClick);
}

function onSwitchClick(){
   console.log('button');
   console.log(parent);
   // don't do anything if there is no parent reference yet
   if (parent === null) {
      return;
   }

   // otherwise get the field text, and send it to the parent
   const text = "Poslana sprava"
   parent.postMessage(text);
}

function initAdaptivSwitch(){
   // set up references to DOM nodes
   const output = document.getElementById("output");
   const field = document.getElementById("field");
   // add an event listener to run when a message is received
   window.addEventListener("message", ({ data, source }) => {
      console.log('Received message');
      console.log(data);
      // if we don't have a reference to the parent window yet, set it now
      if (parent === null) {
         parent = source;
      }
   
      // now we can do whatever we want with the message data.
      // in this case, displaying it, and then sending it back
      // wrapped in an object
      output.textContent = JSON.stringify(data);
      const response = {
      success: true,
      request: { data },
      };
      parent.postMessage(response);
   });
}
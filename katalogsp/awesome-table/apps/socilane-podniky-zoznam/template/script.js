init();

// Nastavenia :
// ID pre mapu
var baseUrl = 'https://view-awesome-table.com/-N4GdMNia8ftO-4Cb88S/view';
var dynamicLinkText = 'Zobraziť podniky na mape';

function init() {
   // Timeout nastavený , kedže DOMLoad alebo load nechcel ísť
   setTimeout(() => {
      renameFilterTitleAtr();
      moveSearch();
      replaceNoResultText();
      addListenerToSearchButton();
      renameFilterOptions();
      moveClearFilter();
      addGlobalListeners();
      initDynamicLink();
      //moveSearchFilter();
   }, 150)

   // Z nejakého dôvodu sa stránka niekedy refresne a stránka sa vráti do pôvodného stavu
   // JS sa ale znova nevykoná.
   setInterval(moveSearch, 200);
   setInterval(initDynamicLink, 1000);
   setInterval(moveClearFilter, 800);
   setInterval(replaceNoResultText, 700);
   setInterval(renameFilterTitleAtr, 1000);
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

function addGlobalListeners() {
   document.addEventListener('click', renameElementText);
   document.addEventListener('click', onFilterContainerClick)
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

function renameFilterTitleAtr() {
   const filterItems = document.querySelectorAll('.csvFilter-item .csvFilter-itemText');
   filterItems.forEach(item => {
      const orgTitle = item.title;
      let replacedTitle = orgTitle.replace("Remove", "Vybrať:");
      replacedTitle = replacedTitle.replace(/from.*$/i, "");
      item.title = replacedTitle;
   });
}

/////////////////////////////////////////////////////
// Adaptivny link - start 
////////////////////////////////////////////////////

// Použitý var namiesto const, kvôli tomu, že Awesome Table si zapamätá premenné 
// a potom píše error pri opakovanom spustení JS (Je to divné :D)
var dynamicLinkElem = null;

// Filter collum char
var filterColNameKraj = 'E';
var filterColNameKategoria = 'G';
var filterColNamePocetZam = 'I';
var filterColNameIne = 'J';

// Selectors
var filterKrajId = 'controlers0';
var filterKategoriaId = 'controlers1';
var filterPocetZamId = 'controlers2';
var filterIneId = 'controlers3';
var selectedItemsSelector = '.awt-csvFilter-selected .awt-csvFilter-selected-item'

function initDynamicLink() {
   let dynLink = document.querySelector('.dynamic-link-switch')
   if(dynLink) return;
   
   // Init values
   createDynamicLink();
   onFilterContainerClick();
   //addListenerToFilters();
}

function addListenerToFilters(){
   const dropdownFilters = document.querySelectorAll(".at-filter-panel awt-csvFilter-dropdown-menu");
   const filtersContainer = document.querySelector(".at-filter-panel");
   filtersContainer.addEventListener("click",onFilterContainerClick);

   dropdownFilters.forEach(dropdown => {
      dropdown.addEventListener("click",onFilterContainerClick);
   });
}

// Nastavenie clicku na celu sekciu filtrov
function onFilterContainerClick(){
   setTimeout(()=> {
      // Získa všetky označené elementy podla filtrov
      const krajSelected = Array.from(document.querySelectorAll(`#${filterKrajId} ${selectedItemsSelector}`));
      const kategoriaSelected = Array.from(document.querySelectorAll(`#${filterKategoriaId} ${selectedItemsSelector}`));
      const pocetZamSelected = Array.from(document.querySelectorAll(`#${filterPocetZamId} ${selectedItemsSelector}`));
      const ineSelected = Array.from(document.querySelectorAll(`#${filterIneId} ${selectedItemsSelector}`));

      // Encode a uloženie do pola
      let krajSelectedStringUrl = (krajSelected.length > 0) ? joinAndEncodeElemsHtml(krajSelected) : '';
      let kategoriaSelectedStringUrl = (kategoriaSelected.length > 0) ? joinAndEncodeElemsHtml(kategoriaSelected) : '';
      let pocetZamSelectedStringUrl = (pocetZamSelected.length > 0) ? joinAndEncodeElemsHtml(pocetZamSelected) : '';
      let ineSelectedStringUrl = (ineSelected.length > 0) ? joinAndEncodeElemsHtml(ineSelected) : '';

      // Prepíše aktuálny link na link s nastavením filtrov
      changeDynamicLink(krajSelectedStringUrl,kategoriaSelectedStringUrl,pocetZamSelectedStringUrl,ineSelectedStringUrl);
   },50)
}

// Prevedenie diakritiky na text, ktorý sa dá vložiž do URL
function joinAndEncodeElemsHtml(nodeList){
   return nodeList.map((elem) => {
      return encodeURIComponent(elem.innerText);
   }).join(",");
}

function changeDynamicLink(krajValue,kategoriaValue,pocZamValue,ineValue){
   // Na odfiltrovanie prázdnych filtrov
   let krajFilter = (krajValue != '') ? `filter${filterColNameKraj}=${krajValue}` : '';
   let kategoriaFilter = (kategoriaValue != '') ? `&filter${filterColNameKategoria}=${kategoriaValue}` : '';
   let pocetZamFilter = (pocZamValue != '') ? `&filter${filterColNamePocetZam}=${pocZamValue}` : '';
   let ineFilter = (ineValue != '') ? `&filter${filterColNameIne}=${ineValue}` : '';

   dynamicLinkElem.href = `${baseUrl}?${krajFilter}${kategoriaFilter}${pocetZamFilter}${ineFilter}`
   //dynamicLinkElem.href = `${baseUrl}?filter${filterColNameKraj}=${krajValue}&filter${filterColNameKategoria}=${kategoriaValue}&filter${filterColNamePocetZam}=${pocZamValue}&filter${filterColNameIne}=${ineValue}`;
}

function createDynamicLink(){
   dynamicLinkElem = document.createElement("a");
   dynamicLinkElem.href = baseUrl;
   dynamicLinkElem.innerHTML = '<img class="sp-icon" alt="Odkaz na mapu" src="https://katalogsp.sk/wp-content/uploads/2022/07/location-icon-black.png">'
   dynamicLinkElem.innerHTML += dynamicLinkText;
   dynamicLinkElem.classList.add('dynamic-link-switch')

   const containerElem = document.querySelector('.at-table-fix');
   //let dynamicLinkElem = document.querySelector('.sp-catalog-hero-section a.dynamic-link-switch');
   containerElem.prepend(dynamicLinkElem);
   //document.body.insertBefore(dynamicLinkElem, containerElem);
}

/////////////////////////////////////////////////////
// Adaptivny link - end 
////////////////////////////////////////////////////
function moveSearch(){
   const searchBarWrapper = document.querySelector('#controlers4');
   const searchInit = document.querySelector('.sp-catalog-search-init');
   searchInit.appendChild(searchBarWrapper);
}

function moveCatogory(){
   const categoryFilter = document.querySelector('#controlers2');
   //categoryFilter.style.display = 'none';
   const dropDownMenu = categoryFilter.querySelector('.awt-csvFilter-dropdown-menu')
   dropDownMenu.style.display = 'flex';
   const heroSection = document.querySelector('#at-global-template');

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
   searchBtnElem.addEventListener("click", scrollToElement());
   console.log('Listener ide');
}

function scrollToElement(){
   const searchResults = document.querySelector('#chart1');
   searchResults.scrollIntoView();
   console.log('Click');
}

setTimeout(function() {
   moveSearch();
   moveCatogory();
   replaceNoResultText();
   addListenerToButton();
 }, 200); 
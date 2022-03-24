// ---- Nastavenia ----- 

//Text, ktory sa nastavi namiesto adresy pri kartách podnikov
const textForAdress = 'Sídlo';

//Nazov kategorie kariet podnikov
const ekatalogCategory = 'Katalóg SP';
//Link na ekatalog 
const ekatalogLink = '/katalogsp/'

//Nazov pre kategoriu verejného obstarávania
const verejneObstaravanieCategory = 'Verejné obstarávanie so sociálnym aspektom'
//Link na stranku pre verejne obstaravanie 
const verObstaLink = '/verejne-obstaravanie-so-socialnym-aspektom/'

redirectCategory(ekatalogCategory, ekatalogLink);	
redirectCategory(verejneObstaravanieCategory, verObstaLink);	

changeAddressText(textForAdress);

function redirectCategory(categoryName,newPageLink){
	let ekatalogLink = document.querySelector(`.breadcrumbs a[title="${categoryName}"]`);
	if(ekatalogLink)ekatalogLink.href = newPageLink;
}
	
function changeAddressText(word){
    let zakUdajeDruhStlp = document.querySelectorAll('.rsp-section-sp-info .sek-column:nth-child(2) strong');
    if (!zakUdajeDruhStlp[0]) return;
    if (zakUdajeDruhStlp[0].textContent = "Adresa:") zakUdajeDruhStlp[0].textContent = `${word}:`;	
}
	
	
const navToggleIconSelector = '.mobile-navbar__wrapper .ham-toggler-menu';

closeNavOnClick();

function closeNavOnClick(){
	const navLinks = document.querySelectorAll('#mobile-nav .nav__link');
	navLinks.forEach((elem) => {
  		elem.addEventListener("click", event =>{
  			console.log(`Event : ${event}`);
  			document.querySelector("#mobile-nav").classList.remove("show");
  			document.querySelector(navToggleIconSelector).classList.add("czr-collapsed");
  		});
	})
}
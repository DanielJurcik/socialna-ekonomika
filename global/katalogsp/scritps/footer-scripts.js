// ---- Nastavenia ----- 

//Text, ktory sa nastavi namiesto adresy pri kartách podnikov
const textForAdress = 'Sídlo';

//Nazov kategoriu kariet podnikov
const ekatalogCategory = 'Katalóg SP';
//Link na ekatalog 
const ekatalogLink = '/katalogsp/'

//Nazov pre kategoriu verejného obstarávania
const verejneObstaravanieCategory = 'Verejné obstarávanie so sociálnym aspektom'
//Link na stranku pre verejne obstaravanie 
const ekatalogLink = '/verejne-obstaravanie-so-socialnym-aspektom/'

redirectCategory(ekatalogCategory, ekatalogLink);	
redirectCategory(verejneObstaravanieCategory, ekatalogLink);	

changAddressText(textForAdress);

function redirectCategory(categoryName,newPageLink){
	let ekatalogLink = document.querySelector(`.breadcrumbs a[title="${categoryName}"]`);
	if(ekatalogLink)ekatalogLink.href = newPageLink;
}
	
function changAddressText(word){
    let zakUdajeDruhStlp = document.querySelectorAll('.rsp-section-sp-info .sek-column:nth-child(2) strong');
    if (!zakUdajeDruhStlp) return;
    if (zakUdajeDruhStlp[0].textContent = "Adresa:") zakUdajeDruhStlp[0].textContent = `${word}:`;	
}
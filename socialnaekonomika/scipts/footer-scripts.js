// ---- Nastavenia ----- 

//Nazov kategorie
const rcCategoryName = 'Regionálne centrá sociálnej ekonomiky';
//Link na ekatalog 
const rcLink = '/regionalne-centra-socialnej-ekonomiky/'

const socPodCategoryName = 'Sociálne podnikanie';
const socPodLink = '/socialne-podnikanie/';


function init(){
    redirectCategory(rcCategoryName, rcLink);
    redirectCategory(socPodCategoryName, socPodLink);
    addColorClassToParent();	
    replaceDefaultTooltip();
}

init();

///////////////////////
// Custom functions
///////////////////////

function redirectCategory(categoryName,newPageLink){
	let breadcrumbsElem = document.querySelector(`.breadcrumbs a[title="${categoryName}"]`);
	if(breadcrumbsElem)breadcrumbsElem.href = newPageLink;
}

function addColorClassToParent(){
    const color1 = document.querySelector('.color-1');
    if (color1) {addClassToParentElem(color1,'tc-sidebar','color-1'); return};
    
    const color2 = document.querySelector('.color-2');
    if (color2) {addClassToParentElem(color2,'tc-sidebar','color-2'); return};

    const color3 = document.querySelector('.color-3');
    if (color3) {addClassToParentElem(color3,'tc-sidebar','color-3'); return};

}

function addClassToParentElem(childElem,parentSelector,classSelector){
    const parentElem = childElem.closest(`.${parentSelector}`);
    parentElem.classList.add(classSelector);
}
	

function replaceDefaultTooltip(){
    const nimbleBuilderButtons = document.querySelectorAll('.sek-btn[title]');
    nimbleBuilderButtons.forEach(builderButton => {
        addCustomTooltipToElem(builderButton,'title');
    });
}

function addCustomTooltipToElem(newElem,newAtt){
    const tooltipValue = newElem.getAttribute(newAtt);
    newElem.setAttribute('data-tooltip',tooltipValue);
    newElem.removeAttribute(newAtt);
}  
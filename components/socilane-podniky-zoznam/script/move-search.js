function moveSearch(){
    const searchBarWrapper = document.querySelector('.awt-vis-controls-SearchFilter');
    const dashboardElem = document.querySelector('#dashboard');

    dashboardElem.appendChild(searchBarWrapper);
}

moveSearch();
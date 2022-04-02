	changeNumbers();
	
	function changeNumbers(){
	    const number_section = document.querySelector(".custom-numbers-section");
        const filter_panel = document.querySelector("#controlersPanel");

        const sro_text = number_section.querySelector(".sro-number .sek-heading");


		const sro_itemText=filter_panel.querySelector('[title="s.r.o."]');
		const sro_itemCount = filter_panel.parentElement.querySelector(".csvFilter-itemCount");
		console.log(sro_itemCount);
        sro_text.textContent = sro_itemCount.textContent;
	}
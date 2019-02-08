window.onload = function(){
	var Sort__variants = document.getElementById("sort-variants").getElementsByTagName("span");
	for(i=0; i<Sort__variants.length; i++){
		Sort__variants[i].addEventListener("click", function(event){
			for(j=0; j<Sort__variants.length; j++){
				if(Sort__variants[j].classList.contains('active')){
					Sort__variants[j].classList.remove('active');
				}
			}
			this.classList.add('active');
			Sort(this.innerHTML);
		});
	}
}

function Sort(how__sort){
	var list = document.getElementById("list-of-products");
	var listNodes = list.childNodes;
	var List__length = list.getElementsByTagName("li").length;
	var ListElem = {};
	for(var i=0; i<List__length; i++){
		var Elems = {"data__new" : Number(list.getElementsByTagName("li")[i].getAttribute("data-new")),
					"data__popular" : Number(list.getElementsByTagName("li")[i].getAttribute("data-popular")),
					"data__toppicks" : Number(list.getElementsByTagName("li")[i].getAttribute("data-top-picks")),
					"Node" : listNodes[i*2+1]};
		ListElem[i] = Elems;
	}
	switch(how__sort){
		case "NEW":
			how__sort = "data__new";
			break;
		case "POPULAR":
			how__sort = "data__popular";
			break;
		case "TOP PICKS":
			how__sort = "data__toppicks";
			break;
		default:
			break;
	}
	for(var i = 0; i<List__length-1; i++){
		for(var j = i+1; j<List__length; j++){
			if(ListElem[j][how__sort] < ListElem[i][how__sort]){
				var temp = ListElem[i];
				ListElem[i] = ListElem[j];
				ListElem[j] = temp;
			}
		}
	}
	for(var i=List__length-1; i>=0; i--){
		list.insertBefore(ListElem[i].Node.previousSibling,list.childNodes[0]);
		list.insertBefore(ListElem[i].Node,list.childNodes[1]);
	}

}

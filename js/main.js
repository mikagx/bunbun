var allTheBun = [];

//Document ready, click add-to-cart, get value of the product
$(document).ready(function() {

	$('#add-to-cart').click(function(){
    getDropdownValue();
    });

    document.getElementById('cart-number').innerHTML = getCurrentCartValue();

})


function getCurrentCartValue() {

	var val = localStorage.getItem("currentVal");
	if(val) {
		return val;
	}
	return 0;
}

function setCurrentCartValue() {

	var currentVal = getCurrentCartValue(); 
	currentVal++; // instead of ++ +=6 
	document.getElementById("cart-number").innerHTML = currentVal; 
	localStorage.setItem("currentVal", currentVal);
}

function modifyCart() {

	document.getElementById("#cart-number").innerHTML = 1;
	localStorage.setItem('cartnumber', 1);
}

function getDropdownValue(){
	 var dropdownSizeValue = $("#dropdownSize option:selected").text();
	 var dropdownQuantityValue = $("#dropdownQuantity option:selected").text();
	 var dropdownImgValue = $("")
	 var checkboxAllName = [];
	 $('#checkbox-section input:checked').each(function() {
     	checkboxAllName.push($(this).attr('id'));
	 });

     var item = {size: dropdownSizeValue, quantity: dropdownQuantityValue, flavor: checkboxAllName};
     // var oldItems = JSON.parse(localStorage.getItem("itemsArray")) || [];
     allTheBun.push(item);

     localStorage.setItem("itemsArray", JSON.stringify(allTheBun));

     var newItems = localStorage.getItem("itemsArray");

     var newItemsInfo = JSON.parse(newItems);

     var shoppingCart = $("#shopping-cart");

     var i = 0;
     if (i < newItemsInfo.length) {
     shoppingCart.append("<h5>" + console.log(newItemsInfo[i].flavor) + "</h5>" + "<h5>" + console.log(newItemsInfo[i].size) + "</h5>" + "<h5>" + 
    	console.log(newItemsInfo[i].quantity) + "</h5>" + "<button class='delete-item'>remove</button>");
    i++;
    }

    

     $("#product-title-1").text(allTheBun.size + " the " + allTheBun.quantity);
     console.log("This is selectedItem.size" + " " + JSON.stringify(allTheBun) + " ");
};






/*
function save(){
    var checkbox = document.getElementById('Bacon');
    localStorage.setItem('Bacon', checkbox.checked);
    console.log(localStorage.getItem('Bacon'));
}
*/

// function updateItemName() {
// 	var obj1 = JSON.parse(localStorage.getItem('itemsArray'));
// 	console.log('This is the size of the product selected : ' + obj1[0]['checkboxAllName'][0]);
// 	var itemName = obj1[0]['checkboxAllName'][0];
// 	document.getElementById('#cart-item-name').innerHTML(itemName);
// }


/*
function updateItemName() {
	var obj = localStorage.getItem('itemsArray');
	document.getElementById('cart-item-name').value = obj;
    console.log(obj);
	storage.setItem('cart-item-name', obj);
}
*/

/*
function updateItemName() {
	var obj = JSON.parse(localStorage.getItem('itemsArray'));
	console.log('aaa : '+obj[0]['checkboxAllName'][0]);
	var itemName = obj[0]['checkboxAllName'][0];
	document.getElementById('cart-item-name').innerHTML = itemName;
}
*/

     
     
     /*JSON.parse(selectedItem);

     var theSpecificProduct = JSON.parse(localStorage.getItem("someitem"));
     console.log(selectedItem);*/
/*
function updateCount(){
	var storedCount = 0;
	if 
         
		 $("#animal-name").text(animal.name +" the "+ animal.type);
		 // update the image based on the animal’s image property  
		 $("#animal-img").attr("src", animal.image);
}
*/
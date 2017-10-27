
/*

[{
"dropdownSizeValue":"Individual",
"dropdownQuantityValue":"1",
"checkboxAllName":["Maple-Apple-Pecan","Bacon","Caramel-Pecan"]
},

{"dropdownSizeValue":"6-pack",
"dropdownQuantityValue":"2",
"checkboxAllName":["Maple-Apple-Pecan","Bacon","Caramel-Pecan"]}]



*/

$(document).ready(function() {

	updateItemName();
})


function updateItemName() {
	var obj = JSON.parse(localStorage.getItem('itemsArray'));
	console.log('aaa : '+obj[0]['checkboxAllName'][0]);
	var itemName = obj[0]['checkboxAllName'][0];
	document.getElementById('cart-item-name').innerHTML = itemName;
}
$(document).ready(function() {

//	var itemDescription, itemPrice;
	
	$('button').on('click', function() {
		console.log('this is working');
		var itemDescription = $('.add-item-name').val();
		var itemPrice = $('.add-item-price').val();
		
		console.log(itemDescription);
		
		var inputQty = $('<input type="text" placeholder="1" value="1" maxlength="2" />');
		var inputDescription = $('<input class="td-item-description-input" type="text" disabled="true">').text($('input[type=text].add-item-name')).val(itemDescription);
		var inputPrice = $('<input class="td-item-price-input" type="text" disabled="true">').text($('input[type=text].add-item-price')).val(itemPrice);
		var inputTotal = $('<input class="td-item-total-input" type="text" disabled="true">').text($('input[type=text].add-item-price')).val(itemPrice);
		
		var tr = $("<ul>", {class: "tr"});
		var tdQty = $("<li>", {class: "td td-item-qty"}).append(inputQty);
		var tdDescription = $("<li>", {class: "td td-item-description"}).append(inputDescription);
		var tdPrice = $("<li>", {class: "td td-item-price"}).append(inputPrice);
		var tdTotal = $("<li>", {class: "td td-item-total"}).append(inputTotal);
		
		var tableRow = $(tr).append(tdQty).append(tdDescription).append(tdPrice).append(tdTotal).appendTo('.tbody');

		var clearNameInput = $('.add-item-name, :reset').val('');
		var clearPriceInput = $('.add-item-price, :reset').val('');	
	});
	
});

function drag() {
			$('#sortable').sortable();
			$('#sortable').disableSelection();
}
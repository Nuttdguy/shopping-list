$(document).ready(function() {
	
	sort();
	addItems();

});

//  SORT LIST ITEMS BETWEEN TABLES

function sort() {
	$( "#sortable1, #sortable2" ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();
};
	

//  ADD ITEMS TO SHOPPING LIST

function addItems() {
	
		$('button').on('click', function() {

		var itemDescription = $('.add-item-name').val();
		var itemPrice = $('.add-item-price').val();
		
		var inputQty = $('<input class="col-qty-input ui-state-default" type="text" placeholder="1" maxlength="2" >');
		var inputDescription = $('<input class="td-item-description-input ui-state-default" type="text" placeholder="Shopping list item" >').text($('input[type=text].add-item-name')).val(itemDescription);
		var inputPrice = $('<input class="td-item-price-input ui-state-default" type="text" placeholder="$ 0.00"  disabled >').text($('input[type=text].add-item-price')).val(itemPrice);
		var inputTotal = $('<input class="td-item-total-input ui-state-default" type="text" placeholder="$ 0.00"  disabled >').text($('input[type=text].add-item-price')).val(itemPrice);
		var trash = $('<img class="trash ui-state-default" src="img/x.png" alt="trash">');
		
		var ul = $("<ul>", {class: "tr"});
		var li = $("<li>", {class: "td" });
		var listItems = $(li).append(function() {
			$(this).append(inputQty);
			$(this).append(inputDescription);
			$(this).append(inputPrice);
			$(this).append(inputTotal);
			$(this).append(trash);
		})
		
		var tableRow = $(ul).append(listItems).appendTo('.tbody-shopping');

		var clearNameInput = $('.add-item-name, :reset').val('');
		var clearPriceInput = $('.add-item-price, :reset').val('$ ');	
	});
	
	
}
	
	
	
	
	
	
	
	
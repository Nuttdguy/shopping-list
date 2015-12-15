$(document).ready(function() {
	
	sort();
	trash();
	addItems();
	
});

//  SORT LIST ITEMS BETWEEN TABLES

function sort() {
	$( "#sortable1, #sortable2" ).sortable({
		connectWith: ".connectedSortable"
	}).disableSelection();
};

//function sort() {
//	
//	$( "div.droptrue" ).sortable({
//		connectWith: ".connectedSortable"
//	});
//
//	$( "div.dropfalse" ).sortable({
//		connectWith: ".connectedSortable",
//		dropOnEmpty: false
//	});
//
//	$( "#sortable1, #sortable2, #sortable3" ).disableSelection();
//	
//});
	
	
function trash() {
	
	$('.ui-state-default').draggable();
		
	$('.total-all').droppable({
		drop: function(event, ui) {
			$(ui.draggable).remove();
		}
	});
};

//  ADD ITEMS TO SHOPPING LIST

function addItems() {
	
		$('button').on('click', function() {

		var itemDescription = $('.add-item-name').val();
		var itemPrice = $('.add-item-price').val();
		var uniqueTime = new Date().getTime();
			
		var inputQty = $('<input class="col-qty-input ui-state-default" type="text" placeholder="1" maxlength="2" >');
		var inputDescription = $('<input class="td-item-description-input ui-state-default" type="text" placeholder="Shopping list item" >').text($('input[type=text].add-item-name')).val(itemDescription);
		var inputPrice = $('<input class="td-item-price-input ui-state-default" type="number" placeholder="$ 0.00" name="quantity" disabled >').text($('input[type=number].add-item-price')).val(itemPrice);
		var inputTotal = $('<input class="td-item-total-input ui-state-default" type="number" placeholder="$ 0.00" name="quantity" disabled >').text($('input[type=number].add-item-price')).val(itemPrice);
		
		var ul = $("<ul>", {class: "tr", id: uniqueTime});
		var li = $("<li>", {class: "td" });
		var listItems = $(li).append(function() {
			$(this).append(inputQty);
			$(this).append(inputDescription);
			$(this).append(inputPrice);
			$(this).append(inputTotal);
		})
		
		var tableRow = $(ul).append(listItems).appendTo('.tbody-shopping');

		var clearNameInput = $('.add-item-name, :reset').val('');
		var clearPriceInput = $('.add-item-price, :reset').val('$ ');	
	});
	
};
	
	
	
	
	
	
	
	
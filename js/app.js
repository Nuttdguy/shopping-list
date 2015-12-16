$(document).ready(function() {
	
	sort();
	trash();
	trashHover();
	addItems();
	updateTotalPrice();
	
});

//  SORT LIST ITEMS BETWEEN TABLES

function sort() {
	
	$( "div.droptrue" ).sortable({
		connectWith: "div"
	});

	$( "div.dropfalse" ).sortable({
		connectWith: "div",
		dropOnEmpty: false
	});

	$( "#sortable1, #sortable2, #sortable3" ).disableSelection();
	
};


//  CHANGE CSS PROPERTIES OF TRASH IMAGE WHEN MOUSE OVER UL

function trashHover() {
	
	$('.ui-sortable').hover(function() {
		$('.total-all img').css({
			"background-color": "rgba(248, 38, 0, 0.5)",
			"width": "38px",
			"height": "38px",
			"transition": "background-color 1s, width 1s, height 1s",
		})			
	})
	
	$('.ui-sortable').mouseleave(function() {
		$('.total-all img').css({
			"background-color": "rgba(248, 38, 0, 0)",
			"width": "34px",
			"height": "34px",
			"transition": "background-color 1s, width 1s, height 1s",
		})
	})
};

//  DELETE/TRASH ITEMS OF SHOPPING LIST
	
function trash() {
		
	$('.ui-state-default').draggable();
	
	var highlightTrash;
	
	$('.total-all').droppable({
		drop: function(event, ui) {
			$(ui.draggable).remove();
		}
	});
};

//  ADD CURRENCY FORMATTING TO PRICE INPUT BOX

var formatCurrency = function(total) {
	
	var total = $('.add-item-price').val();

	var neg = false;
	if(total < 0) {
			neg = true;
			total = Math.abs(total);
	}
	console.log("Format Currency")
	var formatedValue = (neg ? "-$" : '$') + parseFloat(total, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
//	$('#unitPrice').val(formatedValue);
//	$('#totalPrice').val(formatedValue);
	return formatedValue;
	
};

//  UPDATE TOTAL PRICE

function updateTotalPrice() {
	var newQty, nQty, pricePer, newTotalPrice;

	$('#totalQty').on('click', function() {
		var newQty = $('#totalQty').val();
		var nQty = parseInt(newQty);
		var pricePer = $('#unitPrice').val();
		var newTotalPrice = (nQty * pricePer).toFixed(2);
		
		console.log(nQty);
		console.log(pricePer);
		console.log(newTotalPrice);
		console.log("Update total price");
		$('#shopping-list-total').html('$ ' + newTotalPrice);
		return $('#totalPrice').val(newTotalPrice);
	})
	
};

//  ADD ITEMS TO SHOPPING LIST

function addItems() {
	var itemPrice;
	
		$('button').on('click', function() {
			var itemDescription = $('.add-item-name').val();
			var itemPrice = $('.add-item-price').val();
			var uniqueTime = new Date().getTime();
			
			var inputQty = $('<input class="col-qty-input ui-state-default" onclick="updateTotalPrice()" id="totalQty" type="number" placeholder="1" maxlength="2" >');
			var inputDescription = $('<input class="td-item-description-input ui-state-default" type="text" maxlength="30" placeholder="Shopping list item" >').text($('input[type=text].add-item-name')).val(itemDescription);
			var inputPrice = $('<input class="td-item-price-input ui-state-default" id="unitPrice" value="$ " placeholder="$0.00" readonly="readonly"  >').val(itemPrice);
			var inputTotal = $('<input class="td-item-total-input ui-state-default" id="totalPrice" value="" placeholder="$ 0.00" readonly="readonly" >').val(itemPrice);

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
			var clearPriceInput = $('.add-item-price, :reset').val(' ');
			return itemPrice;
		})
		
	$('#unitPrice').val(itemPrice);
	$('#totalPrice').val(itemPrice);
	
};
	
	
	
	
	
	
	
	
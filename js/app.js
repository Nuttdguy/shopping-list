$(document).ready(function() {
	
	getTime();
//	formatCurrency();
	sort();
	trash();
	trashHover();
	addItems();
	updateTotalPrice();
	
});


//  UPDATE DAY AND YEAR 

function getTime() {
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
	var currentDate = new Date;
	var todayDate = currentDate.getDate();
	var currentMonth = currentDate.getMonth();
	var currentYear = currentDate.getFullYear();
	
	$('.today').html(months[currentMonth] + " " + todayDate + " " + currentYear);
}


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
	})
};


////  ADD CURRENCY FORMATTING TO PRICE INPUT BOX --- DOES NOT WORK --- FORMAT OCCURS IN ADDITEM FUNCTION
//
//var formatCurrency = function(total) {
//	
//	console.log(total);
//	var convertTotal = $('.add-item-price').val(total);
//
//	var neg = false;
//	if(convertTotal < 0) {
//			neg = true;
//			convertTotal = Math.abs(convertTotal);
//	}
//	
//	console.log(convertTotal);
////(neg ? "-$" : '$') 
//	var formattedValue =  parseFloat(convertTotal, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString();
//	
//	return 0;
//	
//	console.log(formattedValue);
////	
////	$('.tbody-shopping input').eq(2).val(convertTotal);
////	$('.tbody-shopping input').eq(3).val(formattedValue);
//	
//};


//  UPDATE PRICE, TOTAL AND SUBTOTAL 

function updateTotalPrice() {
	
	$('.td').off('mouseup').on('mouseup', function() {
		$(this).addClass('active');
		var qty = parseFloat($('.active input').eq(0).val()).toFixed(2);
		var unit = $('.active input').eq(2).val();

		var calculate = (parseFloat(unit) * parseFloat(qty)).toFixed(2);
		$('.active input').eq(3).val(calculate);
	})

	$('.td').off('click').on('click', function() {
		$(this).removeClass('active');
		$('.tbody-shopping .totalPrice').addClass('shoppingTable');
		$('.tbody-purchases .totalPrice').addClass('purchasesTable');

		var storedTotalShopping = 0; // Variable for storing value for shopping total

		$('.shoppingTable').each(function(index, element) {
			var value = ($(element).val());
			var convertValue = parseFloat(value).toFixed(2);
			storedTotalShopping = parseFloat(convertValue) + parseFloat(storedTotalShopping);
		})

		var storedTotalPurchases = 0; // Variable for storing value for purchases total

		$('.purchasesTable').each(function(index, element) {
			var value = ($(element).val());
			var convertValue = parseFloat(value).toFixed(2);
			storedTotalPurchases = parseFloat(convertValue) + parseFloat(storedTotalPurchases);
		})

		var shoppingSubTotal = parseFloat(storedTotalShopping).toFixed(2);
		var purchasesSubTotal = parseFloat(storedTotalPurchases).toFixed(2);

		$('.total-all h3').html('$ '+ shoppingSubTotal);
		$('.total-spent h3').html('$ '+ purchasesSubTotal);

		$('.tbody-shopping .totalPrice').removeClass('shoppingTable');
		$('.tbody-purchases .totalPrice').removeClass('purchasesTable');

	})
};


//  ADD ITEMS TO SHOPPING LIST

function addItems() {
	var itemPrice;
	
		$('#add-item-button').on('click', function() {
			var itemDescription = $('.add-item-name').val();
			var itemPrice = parseFloat($('.add-item-price').val()).toFixed(2);
			var uniqueTime = new Date().getTime();
			
			var inputQty = $('<input class="col-qty-input ui-state-default totalCalc" onclick="updateTotalPrice()" type="number" placeholder="1" maxlength="2" >');
			var inputDescription = $('<input class="td-item-description-input ui-state-default" type="text" maxlength="40" placeholder="Shopping list item" >').val(itemDescription);
			var inputPrice = $('<input class="td-item-price-input ui-state-default totalCalc unitPrice" placeholder="$0.00"  >').val(itemPrice);
			var inputTotal = $('<input class="td-item-total-input ui-state-default totalCalc totalPrice" placeholder="$ 0.00" readonly="readonly" >').val(itemPrice);

			var ul = $("<ul>", {class: "tr", id: uniqueTime });
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
		})
};
	
	
	
	
	
	
	
	
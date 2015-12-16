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
	
		$('.td').on('mouseup', function() {
//			var total = 0;
			var bug = 1;
			$(this).addClass('active');
			var qty = parseInt($('.active input').eq(0).val());
			var unit = parseInt($('.active input').eq(2).val());
			console.log ( qty + " +++ " + unit)

			var calculate = unit * qty;
			$('.active input').eq(3).val(calculate);
			
//			var total = total + (calculate + total);		
//			console.log(calculate + '  --- Step calculate');
//			console.log(total);
//			return total;
		})
		
		$('.td').on('click', function() {
			$(this).removeClass('active');
		})
	
};

//  ADD ITEMS TO SHOPPING LIST

function addItems() {
	var itemPrice, counter='0';
	
		$('#add-item-button').on('click', function() {
			var itemDescription = $('.add-item-name').val();
			var itemPrice = $('.add-item-price').val();
			var uniqueTime = new Date().getTime();
			
			var inputQty = $('<input class="col-qty-input ui-state-default totalCalc" onclick="updateTotalPrice()" type="number" placeholder="1" maxlength="2" >').last().addClass('totalQty' + counter);
			var inputDescription = $('<input class="td-item-description-input ui-state-default" type="text" maxlength="40" placeholder="Shopping list item" >').val(itemDescription); //text($('input[type=text].add-item-name')).val(itemDescription);
			var inputPrice = $('<input class="td-item-price-input ui-state-default totalCalc unitPrice" placeholder="$0.00" readonly="readonly"  >').last().addClass('unitPrice' + counter).val(itemPrice);
			var inputTotal = $('<input class="td-item-total-input ui-state-default totalCalc totalPrice" placeholder="$ 0.00" readonly="readonly" >').last().addClass('totalPrice' + counter).val(itemPrice);

			var ul = $("<ul>", {class: "tr", id: uniqueTime });
			var li = $("<li>", {class: "td td" + counter });
			var listItems = $(li).append(function() {
				$(this).append(inputQty);
				$(this).append(inputDescription);
				$(this).append(inputPrice);
				$(this).append(inputTotal);
				counter++;
//				$(this).addClass('td' + counter);
//				console.log(counter);
			})

			var tableRow = $(ul).append(listItems).appendTo('.tbody-shopping');
			
			var clearNameInput = $('.add-item-name, :reset').val('');
			var clearPriceInput = $('.add-item-price, :reset').val(' ');
		})
		
};
	
	
	
	
	
	
	
	
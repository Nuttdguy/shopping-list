$(document).ready(function() {

	var itemDescription, itemPrice;
	
	$('button').on('click', function() {
		$('#add-item-form').serialize(function() {
			var x = 
			console.log('this is working')
			itemDescription = $('.add-item-name').text();
			itemPrice = $('.add-item-price').text();
			console.log(itemDescription + ' ' + itemPrice);
			
		})
		
	});
	
});

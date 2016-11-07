$(document).ready(function(){

	$("#nav_uc1a").click(function() {
		$("#uc1a").show("slow");
		$("#uc1b, #uc2a, #uc2b, #uc2c, #uc2d, #uc3a, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc1a").toggleClass("active");
		$("#nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc1a #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc1a #confirmationEmail #intro").load('includes/intro/intro.html #uc1a_oc');
		$("#uc1a #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc1a_oc');
		$("#uc1a #confirmationEmail #support").load('includes/support/support.html');
		$("#uc1a #confirmationEmail #extras").load('includes/extras/extras.html #uc1a_oc');
		$("#uc1a #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc1a #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc1a #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email
		$("#uc1a #voucherEmail #header").load('includes/header/header.html #voucher');
		$("#uc1a #voucherEmail #intro").load('includes/intro/intro.html #uc1a_ve');
		$("#uc1a #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc1a_ve');
		$("#uc1a #voucherEmail #support").load('includes/support/support.html');
		$("#uc1a #voucherEmail #extras").load('includes/extras/extras.html #uc1a_ve');
		$("#uc1a #voucherEmail #closing").load('includes/closing/closing.html');
		$("#uc1a #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc1a #voucherEmail #footer").load('includes/footer/footer.html');
		// Voucher
		$("#uc1a #voucherDocument #barcode").load('includes/barcode/barcode.html #uc1a_v');
		$("#uc1a #voucherDocument #details").load('includes/voucher/voucherDetails.html #uc1a_v');
		$("#uc1a #voucherDocument #support").load('includes/support/support.html');
		$("#uc1a #voucherDocument #extras").load('includes/extras/extras.html #uc1a_v');
		$("#uc1a #voucherDocument #legal").load('includes/legal/legal.html #confirmation');
		$("#uc1a #voucherDocument #footer").load('includes/footer/footer.html');
	});
	$("#nav_uc1b").click(function() {
		$("#uc1b").show("slow");
		$("#uc1a, #uc2a, #uc2b, #uc2c, #uc2d, #uc3a, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc1b").toggleClass("active");
		$("#nav_uc1a, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc1b #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc1b #confirmationEmail #intro").load('includes/intro/intro.html #uc1b_oc');
		$("#uc1b #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc1b_oc');
		$("#uc1b #confirmationEmail #support").load('includes/support/support.html');
		$("#uc1b #confirmationEmail #extras").load('includes/extras/extras.html #uc1b_oc');
		$("#uc1b #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc1b #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc1b #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email - NONE
		// Voucher - NONE
	});
	$("#nav_uc2a").click(function() {
		$("#uc2a").show("slow");
		$("#uc1a, #uc1b, #uc2b, #uc2c, #uc2d, #uc3a, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc2a").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc2a #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc2a #confirmationEmail #intro").load('includes/intro/intro.html #uc2a_oc');
		$("#uc2a #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc2a_oc');
		$("#uc2a #confirmationEmail #support").load('includes/support/support.html');
		$("#uc2a #confirmationEmail #extras").load('includes/extras/extras.html #uc2a_oc');
		$("#uc2a #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc2a #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc2a #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email
		$("#uc2a #voucherEmail #header").load('includes/header/header.html #voucher');
		$("#uc2a #voucherEmail #intro").load('includes/intro/intro.html #uc2a_ve');
		$("#uc2a #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc2a_ve');
		$("#uc2a #voucherEmail #support").load('includes/support/support.html');
		$("#uc2a #voucherEmail #extras").load('includes/extras/extras.html #uc1a_ve');
		$("#uc2a #voucherEmail #closing").load('includes/closing/closing.html');
		$("#uc2a #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc2a #voucherEmail #footer").load('includes/footer/footer.html');
		// Voucher
		$("#uc2a #voucherDocument #barcode").load('includes/barcode/barcode.html #uc2a_v');
		$("#uc2a #voucherDocument #details").load('includes/voucher/voucherDetails.html #uc2a_v');
		$("#uc2a #voucherDocument #support").load('includes/support/support.html');
		$("#uc2a #voucherDocument #extras").load('includes/extras/extras.html #uc2a_v');
		$("#uc2a #voucherDocument #legal").load('includes/legal/legal.html #voucherSoCal');
		$("#uc2a #voucherDocument #footer").load('includes/footer/footer.html');
	});
	$("#nav_uc2b").click(function() {
		$("#uc2b").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2c, #uc2d, #uc3a, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc2b").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc2b #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc2b #confirmationEmail #intro").load('includes/intro/intro.html #uc2b_oc');
		$("#uc2b #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc2b_oc');
		$("#uc2b #confirmationEmail #support").load('includes/support/support.html');
		$("#uc2b #confirmationEmail #extras").load('includes/extras/extras.html #uc2b_oc');
		$("#uc2b #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc2b #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc2b #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email - NONE
		// Voucher - NONE
	});
	$("#nav_uc2c").click(function() {
		$("#uc2c").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2b, #uc2d, #uc3a, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc2c").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc2c #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc2c #confirmationEmail #intro").load('includes/intro/intro.html #uc2c_oc');
		$("#uc2c #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc2c_oc');
		$("#uc2c #confirmationEmail #support").load('includes/support/support.html');
		$("#uc2c #confirmationEmail #extras").load('includes/extras/extras.html #uc2c_oc');
		$("#uc2c #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc2c #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc2c #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email
		$("#uc2c #voucherEmail #header").load('includes/header/header.html #voucher');
		$("#uc2c #voucherEmail #intro").load('includes/intro/intro.html #uc1a_ve');
		$("#uc2c #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc2c_ve');
		$("#uc2c #voucherEmail #support").load('includes/support/support.html');
		$("#uc2c #voucherEmail #extras").load('includes/extras/extras.html #uc1a_ve');
		$("#uc2c #voucherEmail #closing").load('includes/closing/closing.html');
		$("#uc2c #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc2c #voucherEmail #footer").load('includes/footer/footer.html');
		// Voucher
		$("#uc2c #voucherDocument #barcode").load('includes/barcode/barcode.html #uc2a_v');
		$("#uc2c #voucherDocument #details").load('includes/voucher/voucherDetails.html #uc2c_v');
		$("#uc2c #voucherDocument #support").load('includes/support/support.html');
		$("#uc2c #voucherDocument #extras").load('includes/extras/extras.html #uc2c_v');
		$("#uc2c #voucherDocument #legal").load('includes/legal/legal.html #voucherSoCal');
		$("#uc2c #voucherDocument #footer").load('includes/footer/footer.html');
	});
	$("#nav_uc2d").click(function() {
		$("#uc2d").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2b, #uc2c, #uc3a, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc2d").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc3a, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc2d #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc2d #confirmationEmail #intro").load('includes/intro/intro.html #uc2d_oc');
		$("#uc2d #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc2d_oc');
		$("#uc2d #confirmationEmail #support").load('includes/support/support.html');
		$("#uc2d #confirmationEmail #extras").load('includes/extras/extras.html #uc2d_oc');
		$("#uc2d #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc2d #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc2d #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email - NONE
		// Voucher - NONE
	});
	$("#nav_uc3a").click(function() {
		$("#uc3a").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2b, #uc2c, #uc2d, #uc3b, #uc3c, #uc4a").hide("slow");
		$("#nav_uc3a").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3b, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc3a #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc3a #confirmationEmail #intro").load('includes/intro/intro.html #uc3a_oc');
		$("#uc3a #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc3a_oc');
		$("#uc3a #confirmationEmail #support").load('includes/support/support.html');
		$("#uc3a #confirmationEmail #extras").load('includes/extras/extras.html #uc3a_oc');
		$("#uc3a #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc3a #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc3a #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email
		$("#uc3a #voucherEmail #header").load('includes/header/header.html #voucher');
		$("#uc3a #voucherEmail #intro").load('includes/intro/intro.html #uc3a_ve');
		$("#uc3a #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc3a_ve');
		$("#uc3a #voucherEmail #support").load('includes/support/support.html');
		$("#uc3a #voucherEmail #extras").load('includes/extras/extras.html #uc1a_ve');
		$("#uc3a #voucherEmail #closing").load('includes/closing/closing.html');
		$("#uc3a #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc3a #voucherEmail #footer").load('includes/footer/footer.html');
		// Voucher
		$("#uc3a #voucherDocument #barcode").load('includes/barcode/barcode.html #uc3a_v');
		$("#uc3a #voucherDocument #details").load('includes/voucher/voucherDetails.html #uc3a_v');
		$("#uc3a #voucherDocument #support").load('includes/support/support.html');
		$("#uc3a #voucherDocument #extras").load('includes/extras/extras.html #uc3a_v');
		$("#uc3a #voucherDocument #legal").load('includes/legal/legal.html #voucherChicago');
		$("#uc3a #voucherDocument #footer").load('includes/footer/footer.html');
	});
	$("#nav_uc3b").click(function() {
		$("#uc3b").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2b, #uc2c, #uc2d, #uc3a, #uc3c, #uc4a").hide("slow");
		$("#nav_uc3b").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3c, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc3b #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc3b #confirmationEmail #intro").load('includes/intro/intro.html #uc3a_oc');
		$("#uc3b #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc3a_oc');
		$("#uc3b #confirmationEmail #support").load('includes/support/support.html');
		$("#uc3b #confirmationEmail #extras").load('includes/extras/extras.html #uc3a_oc');
		$("#uc3b #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc3b #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc3b #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email
		$("#uc3b #voucherEmail #header").load('includes/header/header.html #voucher');
		$("#uc3b #voucherEmail #intro").load('includes/intro/intro.html #uc3a_ve');
		$("#uc3b #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc3a_ve');
		$("#uc3b #voucherEmail #support").load('includes/support/support.html');
		$("#uc3b #voucherEmail #extras").load('includes/extras/extras.html #uc1a_ve');
		$("#uc3b #voucherEmail #closing").load('includes/closing/closing.html');
		$("#uc3b #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc3b #voucherEmail #footer").load('includes/footer/footer.html');
		// Voucher
		$("#uc3b #voucherDocument #barcode").load('includes/barcode/barcode.html #uc3b_v');
		$("#uc3b #voucherDocument #details").load('includes/voucher/voucherDetails.html #uc3b_v');
		$("#uc3b #voucherDocument #support").load('includes/support/support.html');
		$("#uc3b #voucherDocument #extras").load('includes/extras/extras.html #uc3b_v');
		$("#uc3b #voucherDocument #legal").load('includes/legal/legal.html #voucherChicago');
		$("#uc3b #voucherDocument #footer").load('includes/footer/footer.html');
	});
	$("#nav_uc3c").click(function() {
		$("#uc3c").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2b, #uc2c, #uc2d, #uc3a, #uc3b, #uc4a").hide("slow");
		$("#nav_uc3c").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc4a").removeClass();
		// Order Confirmation
		$("#uc3c #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc3c #confirmationEmail #intro").load('includes/intro/intro.html #uc3c_oc');
		$("#uc3c #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc3c_oc');
		$("#uc3c #confirmationEmail #support").load('includes/support/support.html');
		$("#uc3c #confirmationEmail #extras").load('includes/extras/extras.html #uc3c_oc');
		$("#uc3c #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc3c #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc3c #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email - NONE
		// Voucher - NONE
	});
	$("#nav_uc4a").click(function() {
		$("#uc4a").show("slow");
		$("#uc1a, #uc1b, #uc2a, #uc2b, #uc2c, #uc2d, #uc3a, #uc3b, #uc3c").hide("slow");
		$("#nav_uc4a").toggleClass("active");
		$("#nav_uc1a, #nav_uc1b, #nav_uc2a, #nav_uc2b, #nav_uc2c, #nav_uc2d, #nav_uc3a, #nav_uc3b, #nav_uc3c").removeClass();
		// Order Confirmation
		$("#uc4a #confirmationEmail #header").load('includes/header/header.html #confirmation');
		$("#uc4a #confirmationEmail #intro").load('includes/intro/intro.html #uc4a_oc');
		$("#uc4a #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc4a_oc');
		$("#uc4a #confirmationEmail #support").load('includes/support/support.html');
		$("#uc4a #confirmationEmail #extras").load('includes/extras/extras.html #uc4a_oc');
		$("#uc4a #confirmationEmail #closing").load('includes/closing/closing.html');
		$("#uc4a #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc4a #confirmationEmail #footer").load('includes/footer/footer.html');
		// Voucher Email
		$("#uc4a #voucherEmail #header").load('includes/header/header.html #voucher');
		$("#uc4a #voucherEmail #intro").load('includes/intro/intro.html #uc1a_ve');
		$("#uc4a #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc4a_ve');
		$("#uc4a #voucherEmail #support").load('includes/support/support.html');
		$("#uc4a #voucherEmail #extras").load('includes/extras/extras.html #uc1a_ve');
		$("#uc4a #voucherEmail #closing").load('includes/closing/closing.html');
		$("#uc4a #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
		$("#uc4a #voucherEmail #footer").load('includes/footer/footer.html');
	});

});
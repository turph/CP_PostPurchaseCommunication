// This set initial page load

$(document).ready(function(){
// Order Confirmation
$("#uc1a #confirmationEmail #header").load('includes/header/header.html #confirmation');
$("#uc1a #confirmationEmail #intro").load('includes/intro/intro.html #uc1a_oc');
$("#uc1a #confirmationEmail #details").load('includes/orderDetails/orderDetails.html #uc1a_oc');
$("#uc1a #confirmationEmail #support").load('includes/support/support.html #uc_all');
$("#uc1a #confirmationEmail #extras").load('included/extras/extras.html #uc1a_oc');
$("#uc1a #confirmationEmail #closing").load('includes/closing/closing.html');
$("#uc1a #confirmationEmail #legal").load('includes/legal/legal.html #confirmation');
$("#uc1a #confirmationEmail #footer").load('includes/footer/footer.html');

// Voucher Email
$("#uc1a #voucherEmail #header").load("includes/header/header.html #voucher");
$("#uc1a #voucherEmail #intro").load('includes/intro/intro.html #uc1a_ve');
$("#uc1a #voucherEmail #details").load('includes/voucherDetails/voucherDetails.html #uc1a_ve');
$("#uc1a #voucherEmail #support").load('includes/support/support.html #uc1a_ve');
$("#uc1a #voucherEmail #extras").load('included/extras/extras.html #uc1a_ve');
$("#uc1a #voucherEmail #closing").load('includes/closing/closing.html');
$("#uc1a #voucherEmail #legal").load('includes/legal/legal.html #confirmation');
$("#uc1a #voucherEmail #footer").load('includes/footer/footer.html');

// Voucher
$("#uc1a #voucherDocument #barcode").load('includes/barcode/barcode.html #uc1a_v');
$("#uc1a #voucherDocument #details").load('includes/voucher/voucherDetails.html #uc1a_v');
$("#uc1a #voucherDocument #support").load('includes/support/support.html #uc_all');
$("#uc1a #voucherDocument #extras").load('includes/extras/extras.html #uc1a_v');
$("#uc1a #voucherDocument #legal").load('includes/legal/legal.html #confirmation');
$("#uc1a #voucherDocument #footer").load('includes/footer/footer.html');

});
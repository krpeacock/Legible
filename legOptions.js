$("#select-native-1").on("change", function (e) {
	switch ($("select")[0].value) {
	case "1":
		console.log(this.value);
		$(".adjust").css("font-family", "adobe-garamond");
		$(".legHeader").css("font-family", "adobe-bodoni");
		break;
	case "2":
		console.log(this.value);
		$(".adjust").css("font-family", "Times");
		break;
	case "3":
		console.log(this.value);
		$(".adjust").css("font-family", "Arial");
		break;
	case "4":
		console.log(this.value);
		$(".adjust").css("font-family", "Comic Sans MS");
		$(".legHeader").css("font-family", "Comic Sans MS");
		break;
	default:
		break;
	}
});

$(".legImg").toggle();
$(document).ready(function () {
	var small = ".8em";
	var medium = "1em";
	var large = "1.5em";


	$("#fontSmall").click(function () {

		$('input:radio[name=font]:nth(0)').attr('checked', true);
		$(".adjust").css("font-size", small);
		$(".legHeader").css("font-size", "2em");
		$(".legImg").css("max-width", "180px");
		//$('input:radio[name=font]')[0].checked = true;

	});

	$("#fontMedium").click(function () {

		$('input:radio[name=font]:nth(1)').attr('checked', true);
		$(".adjust").css("font-size", medium);
		$(".legHeader").css("font-size", "2em");
		$(".legImg").css("max-width", "250px");
		//$('input:radio[name=font]')[1].checked = true;

	});

	$("#fontLarge").click(function () {

		$('input:radio[name=font]:nth(2)').attr('checked', true);
		$(".adjust").css("font-size", large);
		$(".legHeader").css("font-size", "2em");
		$(".legImg").css("max-width", "400px");
		//$('input:radio[name=font]')[2].checked = true;

	});
	$("#imgToggle").on("change", function () {
		$(".legImg").toggle();
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$("#dialog").dialog("close");
		}
	});

});
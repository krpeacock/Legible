chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "legible_activate") {
			$("body").wrap("<div id = 'legContain' class='bodyHide'></div>");

			//Include stylesheet
			var legStyle = chrome.extension.getURL("legStyle.css");
			var optionStyle = chrome.extension.getURL("jqueryui.css");
			var optionScript = chrome.extension.getURL("jqueryui.js");
			var jqScript = chrome.extension.getURL("jqueryui.js");

			var stylesheet1 = $('<link rel="stylesheet" type="text/css" href="' + legStyle + '" >').appendTo("head");
			var stylesheet2 = $('<link rel="stylesheet" type="text/css" href="' + optionStyle + '" >').appendTo("head");

			var exit = chrome.extension.getURL("closeIcon.png");
			var options = chrome.extension.getURL("optionsIcon.png");


			//Create Legible Window
			var legWindow = $("html").append(`<div id="legWindow">
				<div class = "left-margin"><img class = "legIcon" src = "${exit}"></div>
						<div class="right-margin" data-role="listview">
			<a href="#dialog" data-rel="dialog"><img class = "legIcon" src = "${options}"></a></div>
			<div id ="reader"><article id = "innerArticle"></article></div></div>`);
			var reader = $("#reader");
			var inner = $("#innerArticle");

			legWindow;

			var articles = $("article");
			var arrLength = [];


			//Creates an array of all base elements (no children)
			function recursiveNode($node, array) {
				$node.children().each(function () {
					if (this.children[0] === undefined) {
						array.push(this)
					};
					recursiveNode($(this), array);
				});
			}
			var articleArray = [];
			recursiveNode(articles, articleArray);
			console.log(articleArray);

			//Adds H1, P, & IMG tags to legWindow Div

			var title = $("title")[0].innerHTML;
			inner.prepend(`<h1 class = "legHeader">${title}</h1>`);

			for (i = 0; i < articleArray.length; i++) {
				if (articleArray[i].nodeName === "P") {
					var temp = articleArray[i].innerHTML;
					if (temp.toLowerCase() !== "advertisement") {
						inner.append(`<p class = "legText">${temp}</p>`)
					} else if (articleArray[i].nodeName === "IMG") {
						var temp = articleArray[i].src;
						inner.append(`<img src="${temp}" class = "legImg">`)
					}
				}
			}
			//Exit Function
			$('.left-margin').click(function () {
				$("body").unwrap();
				$("#legWindow").remove();
			});
			$(document).keyup(function (e) {
				if (e.keyCode == 27) {
					$("body").unwrap();
					$("#legWindow").remove();
				}
			});
		}

		var dialog = $("html").append(`<div data-role="page" id="dialog" data-add-back-btn="true">
		<div data-role="header">
			<h1>Legible Options</h1>
		</div>
		<div data-role="content">
			<h2>Font Family</h2>
			<form data-role="controlgroup">
				<div class="ui-field-contain">
					<select name="select-native-1" id="select-native-1">

						<option value="1">Garamond</option>

						<option value="2">Times New Roman</option>

						<option value="3">Arial</option>

						<option value="4">Wingdings</option>
					</select>
				</div>
			</form>
			<hr>
			<h2>Font Size</h2>
			<form data-role="controlgroup">
				<label for="fontSmall">
					<input type="radio">Small
				</label>
				<label for="">
					<input type="radio">Medium
				</label>
				<label for="">
					<input type="radio">Large
				</label>
			</form>
			<hr>
			<h2>Images</h2>
			<form action="">
				<label for="flip-1">Try to collect images?</label>
				<select name="flip-1" id="flip-1" data-role="slider">
					<option value="off">Off</option>
					<option value="on">On</option>
				</select>
			</form>
		</div>
	</div>`);
		var scriptsource1 = $('<script src="' + optionScript + '" >').appendTo("#dialog");
		var scriptsource2 = $('<script src="' + jqScript + '" >').appendTo("head");

	});
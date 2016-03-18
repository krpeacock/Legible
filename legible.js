chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.message === "legible_activate") {
			$("body").wrap("<div id = 'legContain' class='bodyHide'></div>");

			//Include stylesheet
			var legStyle = chrome.extension.getURL("legStyle.css");
			//			var optionStyle = chrome.extension.getURL("jqueryui.css");



			var jqScript = document.createElement('script');
			jqScript.src = chrome.extension.getURL("jquery.js");
			jqScript.onload = function () {
				this.parentNode.removeChild(this);
			}


			//			var optionScript = document.createElement('script');
			//			optionScript.src = chrome.extension.getURL("jqueryui.js");
			//			optionScript.onload = function () {
			//				this.parentNode.removeChild(this);
			//			}

			var stylesheet1 = $('<link rel="stylesheet" type="text/css" href="' + legStyle + '" >').appendTo("head");
			var stylesheet2 =
				document.createElement('link');
			//			$('<link rel="stylesheet" type="text/css" href="' + optionStyle + '" >').appendTo("head");



			var exit = chrome.extension.getURL("closeIcon.png");
			var options = chrome.extension.getURL("optionsIcon.png");


			//Create Legible Window
			var legWindow = $("html").append(`<div id="legWindow">
				<div class = "left-margin"><img class = "legIcon" src = "${exit}"></div>
				<div class = "right-margin"><img class = "legIcon" src = "${options}"></div>
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
		}

	});
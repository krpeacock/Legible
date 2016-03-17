$("select").on("change", function (e){
  switch ($("select")[0].value){
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
    case "off":
      console.log(this.value);
      $(".legImg").hide();
      break;
    case "on":
      $(".legImg").show();
      break;
    default:
      console.log(this.value);
      break;
  }
});

// $("#fontSize").on("change", function (e){
 
// $("input[type='radio']:first").attr("checked",true).checkboxradio("refresh");
//   console.log(e.target.value);
//   if (e.target.value === "small"){
//       $("#fontSmall").attr("checked",true).checkboxradio("refresh");
//       fontUncheck("#fontMedium", "#fontLarge");     
//   } else if (e.target.value === "medium"){
//       $("#fontMedium").checked = "checked";
//       fontUncheck("fontSmall", "fontLarge");
//   } else if (e.target.value === "large"){
//       $("#fontLarge").checked = "checked";
//       fontUncheck("fontSmall", "fontMedium");
//   }
// });

// function fontUncheck(font, font2){
//   if ($(font).checked === "checked"){
//     $(font).attr("checked",false).checkboxradio("refresh");
//   }
//   if ($(font2).checked === "checked"){
//     $(font).attr("checked",false).checkboxradio("refresh");
//   }
// }

$(document).ready(function(){
  var small = ".8em";
  var medium = "1em";
  var large = "1.5em";
  $(".legImg").hide(); 
  
    $("#fontSmall").click(function () {
    
  $('input:radio[name=font]:nth(0)').attr('checked',true);
  $(".adjust").css("font-size", small);
  $(".legHeader").css("font-size", "2em");
  //$('input:radio[name=font]')[0].checked = true;

    });
  
    $("#fontMedium").click(function () {
    
  $('input:radio[name=font]:nth(1)').attr('checked',true);
  $(".adjust").css("font-size", medium);
  $(".legHeader").css("font-size", "2em");
  //$('input:radio[name=font]')[1].checked = true;
      
    });
  
    $("#fontLarge").click(function () {
    
  $('input:radio[name=font]:nth(2)').attr('checked',true);
  $(".adjust").css("font-size", large);
  $(".legHeader").css("font-size", "2em");
  //$('input:radio[name=font]')[2].checked = true;

    });
    $("#flip1").click(function(){
      
    })

    
  });
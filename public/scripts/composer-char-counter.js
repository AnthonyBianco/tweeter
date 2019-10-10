const maxLength = 140;

$(document).ready(function() {

jQuery("#formTextArea") // use # when using CSS selectors
  const whatsInHere = jQuery("#formTextArea");
  whatsInHere.keydown(() => { 
    let tweeterTyping = whatsInHere.val(); // how I retrieve the value
    console.log(tweeterTyping.length);  
    let lengthOfText = tweeterTyping.length;
    jQuery(".new-tweet span.counter").text(maxLength - lengthOfText);
    const charsRemaining = (maxLength - lengthOfText);
    if (charsRemaining <= 0){
      jQuery(".new-tweet span.counter").addClass("redText");
    } else {
      jQuery(".new-tweet span.counter").removeClass("redText");
    }
  });
  //as typing continued, decrement maxLength by number of characters in the textArea

  // $("input:text").val("Glenn Quagmire");

});


// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").text("Hello world!");
//   });
// });

//If users exceed the 140 character limit, the counter should appear red
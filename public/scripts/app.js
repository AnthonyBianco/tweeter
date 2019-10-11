

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function() {
$(".errorHandling").hide();


  // scroll function
  $(".toggleButton").click(function(){
  $("#tweet-form").slideToggle("slow");
  });
  // scroll function 
  

  // Fake data taken from initial-tweets.json
  const data = [
      {
        "user": {
          "name": "Newton",
          "avatars": "https://i.imgur.com/73hZDYK.png"
          ,
          "handle": "@SirIsaac"
        },
        "content": {
          "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
      },
      {
        "user": {
          "name": "Descartes",
          "avatars": "https://i.imgur.com/nlhLi3I.png",
          "handle": "@rd" },
        "content": {
          "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
      }
    ]
  

const renderTweets = function(tweets){
  $(`#tweets-container`).empty();
  for (tweet of tweets){
    let output = createTweetElement(tweet);
    $(`#tweets-container`).prepend(output); //prepened make post go to top
    }
  
}

//fetching tweets
const loadTweets = function () {
//request to tweets
  $.ajax(`/tweets/`, {method: 'GET'})
  .then(function(response
  ){
    renderTweets(response);
  });

}
// call function
loadTweets();

//fetching tweets

// prevents tweet page from redireting

// this is handling the submission of the CODE

// this is the submitter

 $( "#tweet-form" ).on( "submit", function( event ) {
  event.preventDefault();
  let tweetBody = $( this ).serialize();
  let text = $("#tweet-form textarea").val();
  // validate form
  // if statements 140>alert && ===0
  console.log(text.length); 
  if (text.length === 0){
    $(".errorHandling").html("&#9888 You have not entered a Tweet &#9888").show().delay(5000).fadeOut();
  } else if (text.length > 140){
    $(".errorHandling").html("&#9888You have entered more than 140 characters.&#9888").show().delay(5000).fadeOut();
  } else {
  $.ajax(`/tweets/`, {method: 'POST', data: tweetBody})
  .then(function(){
    loadTweets();
  });
}
  
 });
// prevents tweet page from redirecting


const escape =  function(str) {
  let div = $("<div>").text(str);
  return div[0].innerHTML;
}



const createTweetElement = function (tweetData) {
  return `<article class="tweet">
  <header class="secondHeader">
  <img src="${tweetData.user.avatars}" />
  <p>${tweetData.user.name}</p>
  <a>${tweetData.user.handle}</a>
  </header>
  <p>${escape(tweetData.content.text)}</p>

<hr />
<footer>${moment(tweetData.created_at).fromNow()}

  <div class="icons">

      <i class="fa fa-flag"></i>
        <i class="fa fa-heart"></i>
          <i class="fa fa-refresh"></i>

  </div>
</footer>

</article>`
}

});


// event.preventDefault()  USE THIS

// Consider the jQuery .serialize() function, which turns the form data into a query string. This serialized data should be sent to the server in the data field of the AJAX POST request.  
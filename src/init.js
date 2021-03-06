$(document).ready(function(){
  window.dancers = [];
  window.kangs = [];
  window.backgrounds = ['url(images/alcoholicCowboysBG.jpg)',
                        'url(images/house.jpg)',
                        'url(images/livingroom.png)',
                        'url(images/school.png)',
                        'url(images/townhall.jpg)'];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    // var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');



    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      ($("body").height() - 300) * Math.random(),
      ($("body").width() - 200) * Math.random(),
      Math.random() * 5000
    );
    if(dancerMakerFunction === Kang){
      window.kangs.push(dancer);
      $('body').append(window.kangs[window.kangs.length-1].$node);
    } else {
      window.dancers.push(dancer);
      $('body').append(window.dancers[window.dancers.length-1].$node);
    }

  });


  $(".changeBackgroundButton").on("click", function(event) {
    var rand = window.backgrounds[Math.floor(Math.random() * window.backgrounds.length)];
    $('html').css('background', rand + " no-repeat center center fixed");
    $('html').css('-webkit-background-size', "cover");
    $('html').css('-moz-background-size', "cover");
    $('html').css('-o-background-size', "cover");
    $('html').css('background-size', "cover");
  });

  $("body").on("mouseenter", '.dancer', function() {
    var rotation = '360deg';
    $(this).css('-webkit-transform','rotate('+rotation+')');
    $(this).css('-moz-transform','rotate('+rotation+')');
    $(this).css('transform','rotate('+rotation+')');
  });

  $("body").on("mouseleave", '.dancer', function() {
    var rotation = '0deg';
    $(this).css('-webkit-transform','rotate('+rotation+')');
    $(this).css('-moz-transform','rotate('+rotation+')');
    $(this).css('transform','rotate('+rotation+')');
  });

  $(".lineupBackgroundButton").on("click", function(event) {
    var dancersNoKang = dancers.slice();


    for(var i = 0; i < window.dancers.length; i++){
      var leftPosition = (($('body').width()-200)/window.dancers.length)*i;
      window.dancers[i].setPosition(700, leftPosition);
    }
  });


});



//each time we create a dancer, push it to window.dancers
//make different dance maker functions

$(document).ready(function(){
  window.dancers = [];
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
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });

  $(".changeBackgroundButton").on("click", function(event) {
    debugger;
    var rand = window.backgrounds[Math.floor(Math.random() * window.backgrounds.length)];
    $('html').css('background', rand + " no-repeat center center fixed");
  });
});

//each time we create a dancer, push it to window.dancers
//make different dance maker functions

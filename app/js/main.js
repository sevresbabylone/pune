(function ($) {

// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// loop through each .project element
$('.container-inner').each(function(){
  // build a scene
  var ourScene = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.9,
    reverse: false
  })
  .setClassToggle(this, 'is-active') // add transition class
  .addIndicators({
    name: 'test'
  }) // requires indicators plugin
  .addTo(controller);
})

}(jQuery));

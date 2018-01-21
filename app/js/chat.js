(function ($) {
// @ document.ready
// => trigger friend request animation,
// => reduce height and scroll upwards
// => add display: block to all the display:none sections
// => first chat container appears
// => add scrollMagic triggers for the other containers

  $(document).ready(function () {
    var leftChatContainers = $.grep($('.chat_container'), function(element) {
      return !$(element).hasClass('c-right')
    })

    $('#accept-button').click(function () {
      $('.story_header').addClass('auto-height')
      $('#accept-button').off('click')
      $('.story_dialogue, .story_snippet, .story_quote, .story_album').css('display', 'block')
      $('.chat_text_first').addClass('animated fadeInLeft')
      var controller = new ScrollMagic.Controller()
      $(leftChatContainers).each(function (index, value) {
        new ScrollMagic.Scene({
          triggerElement: value,
          reverse: false
        })
        .setClassToggle(this, 'fadeInLeft') // add transition class
        .addIndicators({
          name: index + ' leftChat'
        }) // requires indicators plugin
        .addTo(controller)
      })
      $('.c-right').each(function (index, value) {
        new ScrollMagic.Scene({
          triggerElement: value,
          reverse: false
        })
        .setClassToggle(value, 'fadeInRight') // add transition class
        .addIndicators({
          name: index + ' rightChat'
        }) // requires indicators plugin
        .addTo(controller)
      })
      $('.story_quote_container').each(function (index, value) {
        new ScrollMagic.Scene({
          triggerElement: value,
          reverse: false
        })
        .setClassToggle(value, 'fadeIn') // add transition class
        .addIndicators({
          name: index + ' storyQuote'
        }) // requires indicators plugin
        .addTo(controller)
      })
      $('.story_snippet h3, .story_snippet img, .story_snippet p').each(function (index, value) {
        console.log(value)
        new ScrollMagic.Scene({
          triggerElement: value,
          reverse: false
        })
        .setClassToggle(value, 'fadeIn') // add transition class
        .addIndicators({
          name: index + ' storySnippet'
        }) // requires indicators plugin
        .addTo(controller)
      })
      $('.story_photo').each(function (index, value) {
        new ScrollMagic.Scene({
          triggerElement: value,
          reverse: false
        })
        .setClassToggle(value, 'fadeIn') // add transition class
        .addIndicators({
          name: index + ' storyPhoto'
        }) // requires indicators plugin
        .addTo(controller)
      })
    })
  })
}(jQuery))

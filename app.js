$(".slide-submit button").draggable({cancel: false, containment: "parent", axis: "x", stop: function() {
    if (($(this).parent().width() / 2) === ($(this).position().left + 8)) {
      $(this).css({left: "auto", right: 0}).addClass("submitted").text("Submitting...").draggable('false');
      $(this).closest("form").submit();
    } else {
      $(this).css({left: 0});
    }
  }}).on("click", function() {
    return false;
  });
  
  
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);
  function touchHandler(event) {
      var touch = event.changedTouches[0];
  
      var simulatedEvent = document.createEvent("MouseEvent");
          simulatedEvent.initMouseEvent({
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup"
      }[event.type], true, true, window, 1,
          touch.screenX, touch.screenY,
          touch.clientX, touch.clientY, false,
          false, false, false, 0, null);
  
      touch.target.dispatchEvent(simulatedEvent);
      event.preventDefault();
  }
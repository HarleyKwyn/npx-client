$(document).ready(function() {
  var socket;

  $('.js-connect').on('click', function() {
    $('.connected').hide();
    socket = new WebSocket("ws://10.0.0.11:8080/");
    console.log('created new socket')
    socket.onopen = function(evt) {
      console.log('opened socket')
      $('.connected').show();
      $('.disconnected').hide();
    };
    socket.onclose = function(evt) {
      $('.connected').hide();
      $('.disconnected').show();
    }
    socket.onerr = function(evt) {
      $('.error').show();
    }
  });

  $(".color").pickAColor({
    showSpectrum: true,
    showSavedColors: true,
    saveColorsPerElement: true,
    fadeMenuToggle: true,
    showAdvanced: true,
    showBasicColors: true,
    showHexInput: true,
    allowBlank: true,
    inlineDropdown: true
  });

  $(".color").on("change", function(event) {
    console.log(event.target.value);
    socket.send(event.target.value);
  });
});

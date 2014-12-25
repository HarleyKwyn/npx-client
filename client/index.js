var socket = new WebSocket("ws://10.0.0.11:8080/");
socket.onopen = function(evt) {
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

$(".color").spectrum({
  flat: true,
  color: "#f00",
  change: function(color) {
    console.log(color);
    socket.send(color.toHexString());
  }
});

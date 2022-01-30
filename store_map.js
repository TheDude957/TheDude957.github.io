
function get_map(){
$.ajax({
    type: "GET",
    url: 'map_info.php',
    dataType: 'json',
    data: "check",
    success: function(response){
     
      `worddsss`
    }
});
}
var createCORSRequest = function(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // Most browsers.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // IE8 & IE9
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
};

var url = 'https://sapstore.conuhacks.io/orders/246';
var method = 'GET';
var xhr = createCORSRequest(method, url);

xhr.onload = function() {
  // Success code goes here.
  var customer_address = JSON.parse(xhr.response);
  document.write(customer_address.customerAddress)
};

xhr.onerror = function() {
  // Error code goes here.
};

xhr.send();

//get_map();
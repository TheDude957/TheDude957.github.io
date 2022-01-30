
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

// getting store locations
function getAddresses(xhr){
  var customer_addresses = JSON.parse(xhr.response);
  const addresses = [];
   for(let i in customer_addresses){
    address.push(customer_addresses.customerAddress);
   }
   return addresses
}

// getting customer location
function getAddress(xhr, email_or_ID){
  
  var customer_address = JSON.parse(xhr.response);
  var address;
  if (isNaN(email_or_ID))  
    address = customer_address[0].customerAddress;
  
  else
    address = customer_address.customerAddress;

  
   return address;

}

function makeRequest(order_or_store,email_OR_ID, myfunction){
    if(isNaN(email_OR_ID)){
      email_OR_ID = 'byEmail?email='+ email_OR_ID ;
      document.write('https://sapstore.conuhacks.io/orders/' + email_OR_ID)
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

    var url = 'https://sapstore.conuhacks.io/' + order_or_store + "/" + email_OR_ID;
    console.log(url);
    var method = 'GET';
    var xhr = createCORSRequest(method, url);

    xhr.onload = function() {
      // Success code goes here.
      console.log(xhr.responseText);
      var customer_address = JSON.parse(xhr.responseText);

      var thing = myfunction(xhr,email_OR_ID);
      return thing;
    };

    xhr.onerror = function() {
      return null;
    };

    xhr.send();
}


document.write(makeRequest("orders","246", getAddress));

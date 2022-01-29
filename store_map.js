
function get_map(){
$.ajax({
    type: "POST",
    url: 'map_info.php',
    dataType: 'json',
    data: "check",
    success: function(response){
     
      `worddsss`
      
    }
});
}

let url = "http://www.sapstore.conuhacks.io/orders";
let params = (new URL(url)).searchParams;

document.write(params);
get_map();
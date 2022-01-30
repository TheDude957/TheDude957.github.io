
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


get_map();
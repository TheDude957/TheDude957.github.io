
function get_map(){
  console.write("hello");
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
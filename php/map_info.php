     
<?php
    $xml = file_get_contents("http://www.sapstore.conuhacks.io/orders");
    $myJSON = json_encode($xml);
    echo $myJSON;
?>


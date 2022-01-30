     


<?php
    $xml = file_get_contents("http://www.sapstore.conuhacks.io/orders");
    $decoded = json_decode($xml, true);
    echo $decoded;
?>

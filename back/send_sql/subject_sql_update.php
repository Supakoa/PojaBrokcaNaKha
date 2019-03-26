<?php
    // connect database
    require '../../server/server.php';

    echo $i = $_POST['i'];
    echo $id = $_POST['id'];
    echo $name = $_POST['name'];

    $sql = "SELECT * FROM 'subject' WH";
?>
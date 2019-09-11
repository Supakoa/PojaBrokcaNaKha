<?php
    // connect database 
    require '../../server/server.php';

    $id = $_POST['id'];

    $sql = "DELETE FROM subject WHERE sub_id = '$id' ";
    $result = mysqli_query($con,$sql);

    echo json_encode($result);
    
?>
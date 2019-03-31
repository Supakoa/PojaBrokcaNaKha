<?php
    // connect database
    require '../../server/server.php';

    $id = $_POST['id'];
    $name = $_POST['name'];
    $real_id = $_POST['hide'];

    // print_r($_POST);

    $sql = " UPDATE fac SET fac_id = '$id' , name = '$name' WHERE fac_id = '$real_id' ";
    $result = mysqli_query($con,$sql);

    echo json_encode($result);
?>
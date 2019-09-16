<?php
    // connect database
    require '../../server/server.php';

    $id = $_POST['id'];

    $sql1 = " DELETE FROM fac WHERE fac_id = '$id' ";
    $result1 = mysqli_query($con,$sql1);

    $sql2 = " DELETE FROM major WHERE fac_id = '$id' ";
    $result2 = mysqli_query($con,$sql2);

    echo json_encode($result1&&$result2);

?>
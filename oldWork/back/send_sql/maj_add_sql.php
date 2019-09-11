<?php
    // connect database
    require '../../server/server.php';

    $id = $_POST['id'];
    $name = $_POST['name'];
    $fac_id = $_POST['facID'];

    $sql = " INSERT INTO major(mar_id,fac_id,name) VALUE ('$id','$fac_id','$name') ";
    $result = mysqli_query($con,$sql);

    echo json_encode($result);

?>
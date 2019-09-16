<?php
    // connect database
    require '../../server/server.php';

    $id = $_POST['id'];
    $name = $_POST['name'];

    $sql = "INSERT INTO fac (fac_id,name) VALUES ('$id','$name')";
    $result = mysqli_query($con,$sql);

    echo json_encode($result);

?>
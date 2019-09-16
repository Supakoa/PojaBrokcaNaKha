<?php
    // coneect database
    require '../../server/server.php';

    $id = $_POST['id'];
    $name = $_POST['name'];

    $sql = " INSERT INTO subject ( sub_id , sub_name ) VALUES ( '$id' , '$name' ) ";
    $result = mysqli_query($con,$sql);

    echo json_encode($result);
?>
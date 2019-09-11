<?php
    // connect database
    require '../../server/server.php';

    $id = $_POST['id'];

    $sql = " DELETE FROM major WHERE mar_id = '$id' ";
    $result = mysqli_query($con,$sql);

    echo json_encode($result);

?>
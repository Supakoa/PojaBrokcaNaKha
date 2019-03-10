<?php

    // connect database
    require '../../server/server.php';

    //POST
    $id = $_POST['id_del'];

    $sql = "DELETE FROM news WHERE news_id = '$id' ";
    $re_news_del = mysqli_query($con,$sql);
    
?>
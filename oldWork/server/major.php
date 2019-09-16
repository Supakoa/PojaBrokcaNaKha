<?php 
require 'server.php';
if($_POST['data']==null){
    echo '<option value="">กรุณาเลือกจากคณะก่อน</option>';
}
elseif(isset($_POST['data'])){
    $id=$_POST['data'];
    $sql = "SELECT * FROM `major` WHERE `fac_id` = '$id' ";
    $re = mysqli_query($con,$sql);
    echo '<option disabled selected  value="">กรุณาเลือกสาขา</option>';
    while($r = mysqli_fetch_array($re)){
      echo '<option value="'.$r['mar_id'].'">'.$r['name'].'</option>';
    }
}

?>


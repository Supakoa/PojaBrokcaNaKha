<?php 
require '../../../server/server.php';
$id = $_SESSION['id'];
if(isset($_POST['form_1'])){
    $sql_paper = " INSERT INTO `paper`( `owner_id`, `form_id`, `paper_detail`, `step_now`, `status`, `note`) VALUES ('$id',[value-3],[value-4],[value-5],[value-6],[value-7])";
    $re_paper = mysqli_query($con,$sql_paper);
    $row_paper = mysqli_fetch_array($re_paper);

}elseif(isset($_POST['form_2'])){
    echo "2";

}elseif(isset($_POST['form_3'])){
    echo "3";

}elseif(isset($_POST['form_4'])){
    echo "4";

}elseif(isset($_POST['form_5'])){
    echo "5";

}elseif(isset($_POST['form_6'])){
    echo "6";

}elseif(isset($_POST['form_7'])){
    echo "7";

}
else{
    echo "8";

}
// header("Location: ../main.php");
// exit;
?>
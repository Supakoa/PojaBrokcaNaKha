<?php 
require '../../../server/server.php';
$id = $_SESSION['id'];
if(isset($_POST['form_1'])){
   $detail= $_POST['sub']."๛".$_POST['group'];
    $sql_paper = "INSERT INTO `paper`( `owner_id`, `form_id`, `paper_detail`, `step_now`, `status`) VALUES ('$id','1','$detail','1','0') ";
    if($re_paper = mysqli_query($con,$sql_paper)){
                $_SESSION['alert'] = 3;
    }else{
        $_SESSION['alert'] = 4;
    }
   echo $detail;
 
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
header("Location: ../main.php");
exit;
?>
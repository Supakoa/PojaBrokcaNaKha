<?php 
require '../../../server/server.php';
$id = $_SESSION['id'];
function getToken($length){
    $token = "";
    $codeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $codeAlphabet .= "0123456789";
    $max = strlen($codeAlphabet); // edited
   for ($i=0; $i < $length; $i++) {
       $token .= $codeAlphabet[random_int(0, $max-1)];
   }
   return $token;
}
 $paper_id = getToken(10);
if(isset($_POST['form_1'])){
   $detail= $_POST['sub']."๛".$_POST['group'];
    $sql_paper = "INSERT INTO `paper`( `paper_id`,`owner_id`, `form_id`, `paper_detail`, `step_now`, `status`) VALUES ('$paper_id', '$id','1','$detail','1','3') ";
    if($re_paper = mysqli_query($con,$sql_paper)){
                $_SESSION['alert'] = 3;
                $sql_form = "SELECT * FROM `form_way` WHERE `form_id` = '1' AND `step` ='1' ";
                $re_form = mysqli_query($con, $sql_form);
                $row_form = mysqli_fetch_array($re_form);
                $user_id = $row_form['user_id'];
                $sum_q = '(\''.$paper_id.'\',\''.$user_id.'\' )';
                while($row_form = mysqli_fetch_array($re_form)){
                    $user_id = $row_form['user_id'];
                    $sum_q .= ',(\''.$paper_id.'\',\''.$user_id.'\' )';
                }
                $sql_user = "INSERT INTO `paper_user`( `paper_id`, `user_id`) VALUES ".$sum_q." ";
                if($re_user = mysqli_query($con, $sql_user)){
                    $_SESSION['alert'] = 3;
                }else{
                    $_SESSION['alert'] = 4;
                }
    }else{
        $_SESSION['alert'] = 4;
    }
    
 
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
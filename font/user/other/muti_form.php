<?php 
require '../../../server/server.php';
if(isset($_POST['form_1'])){
echo "1";
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
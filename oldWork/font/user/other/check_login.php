<?php 
if(isset($_SESSION['online'])&&isset($_SESSION['id'])){
    if($_SESSION['online']!=1){
        $_SESSION['check_login'] = 1;
        header("Location: ../../../index.php");
        $_SESSION['alert'] = 1;
        exit();
    }
}else{
    $_SESSION['check_login'] = 1;
        header("Location: ../../../index.php");
        $_SESSION['alert'] = 2;
        exit();
}
?>
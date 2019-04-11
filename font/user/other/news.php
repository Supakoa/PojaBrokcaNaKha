<!-- News -->
<?php
require '../../../server/server.php';
$url = $_POST['url'];
$sql = "SELECT * FROM `news`";
?>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
    <ol class="carousel-indicators">
    <?php
     $act = "active";
     $i = 0;
     $re = mysqli_query($con,$sql);
     while($row_news = mysqli_fetch_array($re)){
         echo '<li data-target="#carouselExampleIndicators" data-slide-to="'.$i++.'" class="'.$act.'"></li>';
     }
    ?>
    </ol>
    <div class="carousel-inner">
    
    <?php 
    $act = "active";
    $re = mysqli_query($con,$sql);
    while($row_news = mysqli_fetch_array($re)){
        echo '<div class="carousel-item '.$act.'">
        <a href="'.$row_news['news_url'].'" target="_blank">
            <img src="'.$url.$row_news['news_img'].'" style = "height:420px" class="d-block w-100"
                alt="...">
        </a>
        </div>';
        $act = '';
    } ?>

    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div><br><!-- News -->
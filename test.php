<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- Jquery -->
    <!-- bootstrap 4.2.1 -->
    <!-- <link rel="stylesheet" href="font/node_modules/bootstrap/dist/css/bootstrap.min.css"> -->
    <!-- bootstrap 4.2.1 -->
    <!-- <script src="font/node_modules/popper.js/dist/popper.min.js"></script>
    <script src="font/node_modules/bootstrap/dist/js/bootstrap.min.js"></script> -->
    <!-- datatable -->
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>


    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">

    <!-- <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script> -->
    <!-- Our Custom CSS -->
    <!-- <link rel="stylesheet" href="style2.css"> -->
    <!-- Scrollbar Custom CSS -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css"> -->
    <link rel="stylesheet" href="back\node_modules\animate.css\animate.min.css">


</head>

<body>


    <table id="example" class="display" width="100%">
        <thead>
            <tr>
                <th>user_id</th>
                <th>name</th>
                <th>.....</th>
                <th>.....</th>
                <th>.....</th>


            </tr>
        </thead>
       

    </table>
    <button type="button">Toggle Paragraph Display</button>
    <p style="display: none;">Lorem ipsum dolor sit amet adipi elit...</p>
    <script>
        $(document).ready(function () {
            $('#example').DataTable( {
      "processing": true,
      "serverSide": true,
      "ajax": "server_processing.php"
    } );
        });
    </script>
    
    <script type="text/javascript">
    $(document).ready(function(){
        $("button").click(function(){
            // show hide paragraph on button click
            $("p").toggle("slow", function(){
                // check paragraph once toggle effect is completed
                if($("p").is(":visible")){
                    alert("The paragraph  is visible.");
                } else{
                    alert("The paragraph  is hidden.");
                }
            });
        });
    });
    
</script>

</body>

</html>
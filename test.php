<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    
<script src="push.js"></script>
<script src="font/node_modules/jquery/dist/jquery.min.js"></script>
</head>
<body>
    
    <button id = "eiei">กดหน่อยจ่ะ</button>
</body>
<script>
 $("#eiei").click(function(){
    Push.create('Hello World!')
 });
</script>
</html>
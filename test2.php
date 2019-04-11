<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

</head>

<body>
    <link rel="stylesheet" href="back\node_modules\animate.css\animate.min.css">
    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>

    <input type="number" id="input">
    <h1 id="ans"></h1>
    <script>
        $("#input").keyup(function (e) {
            // alert("123");

            num = $(this).val();
            console.log(num);
            if (num != '') {
                console.log("65asda");
                if (num >= 0 && num <= 100) {
                    if (num < 50) {
                        $("#ans").html('F');
                    } else if (num < 60) {
                        $("#ans").html('D');

                    } else if (num < 70) {
                        $("#ans").html('C');

                    } else if (num < 80) {
                        $("#ans").html('B');

                    } else {
                        $("#ans").html('A');
                    }

                } else {
                    $("#ans").html('ควย');

                }
            } else {
                $("#ans").html('กรุณาใส่คะแนน');

            }


        });
    </script>

</body>

</html>
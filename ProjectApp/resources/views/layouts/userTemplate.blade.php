<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    @stack('css')
    <title>User Template</title>
</head>
<body>
    <div class="body">
        @yield('login')


        <nav>
            
        </nav>
        <div class="content">
            @yield('content')
        </div>
        <footer>

        </footer>
    </div>

@stack('js')

</body>
</html>
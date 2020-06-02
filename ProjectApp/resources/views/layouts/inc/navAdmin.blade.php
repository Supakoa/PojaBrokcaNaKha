<nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
            <li class="nav-item active align-middle">
            <a class="nav-link" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElEB7aM36PB-C-AJW6Z308tsVc5LJTydI-Ab86qqAVtsyrRVl" alt="" width="30" height="30" ><span> {{ auth()->user()->firstname." ".auth()->user()->lastname}}</span></a>
            </li>
            <li class="nav-item">
            <form action="{{url('/logout')}}" id="logout" method="post">
                @csrf
                <a class="nav-link" href="#" onclick="$('#logout').submit()" >ออกจากระบบ</a>
            </form>

            </li>
            <li class="nav-item">
                <a class="nav-link txt-greenblue" href="#" id="lang"><span id="eng">ENG</span>/<span
                        class="m-1 p-1 text-light bg-dark rounded" id="th">TH</span></a>
            </li>
        </ul>
    </div>
</nav>

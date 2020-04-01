
<ul class="nav nav-pills d-flex" id="pills-tab" role="tablist">
    <li class="nav-item w-50">
        <a class="nav-link btn rounded-0 active btn-block btn-info" id="pills-home-tab" data-toggle="pill"
            href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ประวัติคำร้อง</a>
    </li>
    <li class="nav-item w-50">
        <a class="nav-link btn rounded-0 btn-info btn-block" id="pills-profile-tab" data-toggle="pill"
            href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">แบบคำร้อง</a>
    </li>
</ul>

<div class="tab-content p-3 bg-info" id="pills-tabContent">
    <div class="card p-3 rounded tab-pane fade show active" id="pills-home" role="tabpanel"
        aria-labelledby="pills-home-tab">
            @include('Students.include.body.table.tableStatus')
    </div>

    <div class="card rounded tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
        <div class="accordion p-1" id="accordionExample">
            @include('Students.include.body.forms.formsOne')
            @include('Students.include.body.forms.formsTwo')
            @include('Students.include.body.forms.formsThree')
            @include('Students.include.body.forms.formsFour')
            @include('Students.include.body.forms.formsFive')
            @include('Students.include.body.forms.formsSix')
            @include('Students.include.body.forms.formsSeven')
        </div>
    </div>
    @include('Students.include.body.modal.modalIndex')
</div>



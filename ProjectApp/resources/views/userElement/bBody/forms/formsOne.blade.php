<div class="card ">
    <div class="card-header border-bottom-greenblue" id="headingOne">
        <h2 class="mb-0">
            <button class="btn txt-greenblue" type="button" data-toggle="collapse" data-target="#paperOne"
                aria-expanded="true" aria-controls="paperOne">
                <span><img src="{{url('images/Artboard.png')}}" width="40" height="40" alt=""></span>
                แบบคำร้องขอตรวจสอบผลการเรียน
            </button>
        </h2>
    </div>

    <div id="paperOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="card-body">
            <form action="" class="w-100">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="subject1" class="txt-greenblue">วิชา</label>
                            <select class="form-control boder-greenBlue txt-greenblue" id="subject1">
                                <option selected disabled>เลือกิวชา</option>
                                <option>GEH0101</option>
                                <option>GEH0102</option>
                                <option>GEL0101</option>
                                <option>GEL0102</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="forms-group">
                            <label for="studyGroup1" class="txt-greenblue">กลุ่มเรียน</label>
                            <input type="text" class="form-control boder-greenBlue txt-greenblue" id="studyGroup1"
                                placeholder="กลุ่มเรียน">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="cat1" class="txt-greenblue">ประเภทการสอบ</label>
                            <select class="form-control boder-greenBlue txt-greenblue" id="cat1">
                                <option selected disabled>เลือกประเภท</option>
                                <option>กลางภาค</option>
                                <option>ปลายภาค</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="forms-group">
                            <label for="comment1" class="txt-greenblue">หมายเหตุ</label>
                            <input type="text" class="form-control boder-greenBlue txt-greenblue" id="comment1"
                                placeholder="สาเหตุการลา">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="inputfile1" class="txt-greenblue">หลักฐานสาเหตุ</label>
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input boder-greenBlue" id="inputfile1"
                                    aria-describedby="inputGroupFile">
                                <label class="custom-file-label txt-greenblue" for="inputfile1">Choose
                                    file</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <button class="btn btn-info p-1 m-3 float-right btn-sm">
                ส่งแบบคำร้อง
            </button>
        </div>
    </div>
</div>

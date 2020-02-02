<div class="card ">
        <div class="card-header border-bottom-greenblue" id="headingFive">
            <h2 class="mb-0">
                <button class="btn txt-greenblue collapsed" type="button" data-toggle="collapse"
                    data-target="#paperFive" aria-expanded="false" aria-controls="paperFive">
                    <span><img src="{{url('images/Artboard.png')}}" width="40" height="40"
                            alt=""></span>
                    แบบใบลาป่วย ลากิจ
                </button>
            </h2>
        </div>
        <div id="paperFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
            <div class="card-body">
                <form action="" class="w-100">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="subject5" class="txt-greenblue">วิชา</label>
                                <select class="form-control boder-greenBlue txt-greenblue" id="subject5">
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
                                <label for="studyGroup5" class="txt-greenblue">กลุ่มเรียน</label>
                                <input type="text" class="form-control boder-greenBlue txt-greenblue"
                                    id="studyGroup5" placeholder="กลุ่มเรียน">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="cat5" class="txt-greenblue">ประเภทการลา</label>
                                <select class="form-control boder-greenBlue txt-greenblue" id="cat5">
                                    <option selected disabled>เลือกประเภท</option>
                                    <option>ลากิจ</option>
                                    <option>ลาป่วย</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="forms-group">
                                <label for="comment5" class="txt-greenblue">หมายเหตุ</label>
                                <input type="text" class="form-control boder-greenBlue txt-greenblue"
                                    id="comment5" placeholder="สาเหตุการลา">
                            </div>
                        </div>
                        <div class="col-md-12 ">
                            <div class="form-group d-flex">
                                <div class="w-50 p-2">
                                    <label for="date5-1" class=" txt-greenblue">วันที่ลา</label>
                                    <input type="date" class="form-control boder-greenBlue txt-greenblue"
                                        id="date5-1">
                                </div>
                                <div class="w-50 p-2">
                                    <label for="date5-2" class=" txt-greenblue">ถึงวันที่</label>
                                    <input type="date" class="form-control boder-greenBlue txt-greenblue"
                                        id="date5-2">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputfile5" class="txt-greenblue">เอกสารการลา</label>
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input boder-greenBlue" id="inputfile5"
                                        aria-describedby="inputGroupFile">
                                    <label class="custom-file-label txt-greenblue" for="inputfile5">Choose
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

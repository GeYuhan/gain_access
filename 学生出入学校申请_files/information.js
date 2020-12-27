window.onload = function get_information() {
    var time1,
    time2,
    time3;
    var student,
    supervisor;
    time1 = "2020-12-27"; //填表时间
    time2 = "2020-12-28 08:00"; //计划出校时间
    time3 = "2020-12-31 22:01"; //计划入校时间
    student = "葛青宇";
    supervisor = "焦重庆";
    reason = "亲属来京探望，住在北京龙城温德姆酒店，外出会面。";
    /* 		alert("赋值") */
    document.getElementById("time1").innerHTML = time1;
    document.getElementById("time2").innerHTML = time2;
    document.getElementById("time3").innerHTML = time3;
    document.getElementById("time4").innerHTML = time1;
    document.getElementById("student1").innerHTML = student;
    document.getElementById("supervisor1").innerHTML = supervisor;
    document.getElementById("supervisor2").innerHTML = supervisor;
    document.getElementById("reason").innerHTML = reason;
    //如果preview没有下面元素，则自动停止
    document.getElementById("student2").innerHTML = student;
    document.getElementById("supervisor3").innerHTML = supervisor;
    document.getElementById("time5").innerHTML = time1 + " 17:15:59";
    document.getElementById("time6").innerHTML = time1 + " 17:42:22";
}

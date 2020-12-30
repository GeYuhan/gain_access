window.onload = function get_information() {
	var now = new Date();
	var before = new Date(now.getTime()-1*24*60*60*1000);//第一个1表示1天
	var future = new Date(now.getTime()+1*24*60*60*1000);
    var today = now.getFullYear()+"-" + (now.getMonth()+1) + "-" + now.getDate();
    var yesterday = before.getFullYear()+"-" + (before.getMonth()+1) + "-" + before.getDate();
	var tomorrow = future.getFullYear()+"-" + (future.getMonth()+1) + "-" + future.getDate();

    var time1=yesterday;
    var time2=today+" 07:00"; //计划出校时间
    var time3=tomorrow+" 22:01"; //计划入校时间;
    var student,    supervisor;

    student = "葛青宇";
    supervisor = "焦重庆";
    reason = "在京居住，回家，住址回龙观金榜园10-2-401。";
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

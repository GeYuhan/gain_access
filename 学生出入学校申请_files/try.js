alert("运行");
function change1() {
    var element = document.getElementById("top_form");
    element.setAttribute("class", "W_onetop active");
    var element = document.getElementById("top_process");
    element.setAttribute("class", "showBpmn");
    var element = document.getElementById("top_record");
    element.setAttribute("class", "history");
    var element = document.getElementById("bar");
    element.setAttribute("style", "width: 16%; left: 9%;");
    /* 	        element.setAttribute("style","width: 16%; left: 35.5557px");
     */
    var element = document.getElementById("form");
    element.setAttribute("style", "display: block");
    var element = document.getElementById("process");
    element.setAttribute("style", "display: none ");
    var element = document.getElementById("record");
    element.setAttribute("style", "display: none");
}
function change2() {
    var element = document.getElementById("top_form");
    element.setAttribute("class", "W_onetop");
    var element = document.getElementById("top_process");
    element.setAttribute("class", "showBpmn active");
    var element = document.getElementById("top_record");
    element.setAttribute("class", "history");
    var element = document.getElementById("bar");
    element.setAttribute("style", "width: 16%; left: 42%;");
    /* 	  element.setAttribute("style","width: 16%; left: 167.556px");
     */
    var element = document.getElementById("form");
    element.setAttribute("style", "display: none");
    var element = document.getElementById("process");
    element.setAttribute("style", "display: block");
    var element = document.getElementById("record");
    element.setAttribute("style", "display: none");
}
function change3() {
    var element = document.getElementById("top_form");
    element.setAttribute("class", "W_onetop");
    var element = document.getElementById("top_process");
    element.setAttribute("class", "showBpmn");
    var element = document.getElementById("top_record");
    element.setAttribute("class", "history active");
    var element = document.getElementById("bar");
    element.setAttribute("style", "width: 16%; left: 75%;");
    /* 	  element.setAttribute("style","width: 16%; left: 299.556px");
     */
    var element = document.getElementById("form");
    element.setAttribute("style", "display: none");
    var element = document.getElementById("process");
    element.setAttribute("style", "display: none ");
    var element = document.getElementById("record");
    element.setAttribute("style", "display: block");
}

var dbclick_preview_flag = 1;
/* var x = 0, y = 0; */

function preview() {
    var element = document.getElementById("preview_form");
    element.setAttribute("style", "display:block");
}
function close_preview() {
    var element = document.getElementById("preview_form");
    element.setAttribute("style", "display:none");
}
function zoom_preview(e) {
    /* 	e = e || window.event;//获取事件对象
    alert("事件获取成功")
    console.log(e)
    var x=String(e.clientX*-1);
    var y=String(e.clientY*-1);

    console.log(x,y)
    alert("坐标获取车公共") */
    if (dbclick_preview_flag == 1) {
        document.getElementById("m_preview").setAttribute("style", "transform-origin: 0% 0%;position: absolute;transform: scale(1.5224, 1.5224) translate(-25%, 0);");
        dbclick_preview_flag = -1;
    } else {
        document.getElementById("m_preview").setAttribute("style", "transform-origin: 0% 0%;position: absolute;transform: scale(1.0112, 1.0112) translate(0, 0);");
        dbclick_preview_flag = 1;
    }
}

function movement(e) {
    e = e || window.event; //获取事件对象
/*     x = x + e.clientX * -1
        y = y + e.clientY * -1
        var dx = String(x);
    var dy = String(y); */

    console.log(e);
/*     if (dbclick_preview_flag == -1) {
        document.getElementById("m_preview").setAttribute("style", "transform-origin: 0% 0%;position: absolute;transform: scale(1.5224, 1.5224) translate(" + "px-100%, " + String(0) + "px-100%);");
    } */
}

//不要在test后面加()因为这是在给事件关联触发的方法

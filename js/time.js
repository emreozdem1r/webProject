showTime();

function showTime(){

    var date = new Date();

    var d = date.getDate(); // 1 - 31
    var month = date.getMonth(); // 0-11
    var y = date.getFullYear(); // yyyy
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    d = (d < 10) ? "0" + d : d;
    moth = month+1;
    month = (month < 9) ? "0" + month : month;
    var time = h + ":" + m + ":" + s;
    document.getElementById("MyClockDisplay").innerHTML = time;
    //document.getElementById("MyClockDisplay").textContent = time;
    setTimeout(showTime, 1000);
    
}


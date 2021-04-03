function guithongso() {
    let ms = Number(document.getElementById("tentram").value)
    let sl = Number(document.getElementById("sl").value)
    let sl1 = Number(document.getElementById("sl1").innerText)
    let sl2 = Number(document.getElementById("sl2").innerText)
    let sl3 = Number(document.getElementById("sl3").innerText)
    let sl4 = Number(document.getElementById("sl4").innerText)
    if((sl1 == 0) && (ms == 1)){
        document.getElementById("sl1").innerText = sl
    }
    else if ((sl2 == 0) && (ms == 2)){
        document.getElementById("sl2").innerText = sl
    }
    else if((sl2 == 0) && (ms==3)) {
        document.getElementById("sl3").innerText = sl
    }
    else alert("Ban da nhap")
    //console.log(sl1)
    }
    
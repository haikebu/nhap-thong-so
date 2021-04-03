function guithongso() {
    let ms = Number(document.getElementById("tentram").value)
    let sl = Number(document.getElementById("sl").value)
    let sl1 = Number(document.getElementById("sl1").innerText)
    let sl2 = Number(document.getElementById("sl2").innerText)
    let sl3 = Number(document.getElementById("sl3").innerText)
    let sl4 = Number(document.getElementById("sl4").innerText)
    if((sl1==0) && (ms==1)){
        document.getElementById("sl1").innerText = sl
    }
    else if((sl2 == 0) && (ms=2)){
        document.getElementById("sl2").innerText = sl
    }
    else if((sl3 == 0) && (ms=3)){
        document.getElementById("sl3").innerText = sl
    }
    else if((sl4 == 0) && (ms=4)){
        document.getElementById("sl4").innerText = sl
    }
    else if((sl5 == 0) && (ms=5)){
        document.getElementById("sl5").innerText = sl
    }
    else if((sl6 == 0) && (ms=6)){
        document.getElementById("sl6").innerText = sl
    }
    else if((sl7 == 0) && (ms=7)){
        document.getElementById("sl7").innerText = sl
    }
    else if((sl8 == 0) && (ms=8)){
        document.getElementById("sl8").innerText = sl
    }
    else if((sl9 == 0) && (ms=9)){
        document.getElementById("sl9").innerText = sl
    }
    else if((sl10 == 0) && (ms=10)){
        document.getElementById("sl10").innerText = sl
    }
    else alert("Ban da nhap")
    //console.log(sl1)
    }
    
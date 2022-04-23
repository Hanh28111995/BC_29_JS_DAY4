document.getElementById("btn1").onclick = function () {
    var so1 = parseInt(document.getElementById("sn1").value);
    var so2 = parseInt(document.getElementById("sn2").value);
    var so3 = parseInt(document.getElementById("sn3").value);
    var snn = 0, sln = 0, stb = 0;
    var chuoi = new Array(so1, so2, so3);
  
    if ((so1 <= so2) && (so1 <= so3)) { snn = so1; }
    else {
      if (so2 <= so3) { snn = so2; }
      else { snn = so3; }
    }
  
    for (let i = 0; i < 3; i++) {
      if (snn == chuoi[i]) {
        chuoi.splice(i, 1);
      }
    }
    if (chuoi[0] >= chuoi[1]) {
      sln = chuoi[0];
      stb = chuoi[1];
    }
    else {
      sln = chuoi[1];
      stb = chuoi[0];
    }
    document.getElementById("sxtt").value = snn + ">" + stb + ">" + sln;
    console.log(sln, stb, snn);
  };
  //////////////////////////////////////////////////////////////////////////////////////////
  
  document.getElementById("btn2").onclick = function () {
    if (b1.checked) {
      alert("hello, how are you today ?");
    }
    if (b2.checked) {
      alert("hello, Long time no see ");
    }
    if (b3.checked) {
      alert("hi , What’s up? ");
    }
    if (b4.checked) {
      alert("Hey there beautiful! You look stunning today! ");
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById("btn3").onclick = function () {
    var so4 = parseInt(document.getElementById("sn4").value);
    var so5 = parseInt(document.getElementById("sn5").value);
    var so6 = parseInt(document.getElementById("sn6").value);
    var sll = 0, sc = 0;
    var Chui = new Array(so4, so5, so6);
    for (let i = 0; i < 3; i++) {
      var sd = Chui[i] % 2;
      if (sd == 0) { sc++; }
      else { sll++; }
    }
    document.getElementById("scsl").value = "số chẵn :" + sc + " /số lẻ :" + sll;
    console.log(sc, sll);
  }
  //////////////////////////////////////////////////////////////////////////////////////////
  
  document.getElementById("btn4").onclick = function () {
    var a = parseInt(document.getElementById("c1").value);
    var b = parseInt(document.getElementById("c2").value);
    var c = parseInt(document.getElementById("c3").value);
    var pi = Math.PI;
    var goc111 = (a * a + c * c - b * b) / (2 * a * c) ;
    var goc222 = (b * b + c * c - a * a) / (2 * b * c) ;
    var goc11 = Math.acos(goc111)* (180/pi);
    var goc22 = Math.acos(goc222)* (180/pi);
    var goc33 = 180 - (goc11 + goc22);
    var goc1 = goc11.toFixed(0);
    var goc2 = goc22.toFixed(0);
    var goc3 = goc33.toFixed(0);
    
    if ((goc1 != goc2) && (goc2 != goc3) && (goc3 != goc1)) {
      if ((goc1 > 90) || (goc2 > 90) || (goc3 > 90)) { document.getElementById("tamgiac").value = "Đây là tam giác tù" }
      if ((goc1 == 90) || (goc2 == 90) || (goc3 == 90)) { document.getElementById("tamgiac").value = "Đây là tam giác vuông" }
      if ((goc1 < 90) && (goc2 < 90) && (goc3 < 90)) { document.getElementById("tamgiac").value = "Đây là tam giác nhọn" }
    }
    if ((goc1 == goc2) || (goc1 == goc3) || (goc2 == goc3)) {
      if ((goc1 == 60) || (goc3 == 60) || (goc2 == 60)) { document.getElementById("tamgiac").value = "Đây là tam giác đều" }
      else { document.getElementById("tamgiac").value = "Đây là tam giác cân" }
    }
    if ((goc111 >= 1)||(goc111 <= (-1))||(goc222 >= 1)||(goc222 <= (-1)) ) {
      alert("Triangle Error");}
    console.log( goc1, goc2, goc3);
  }
  
    
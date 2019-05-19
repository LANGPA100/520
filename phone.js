 window.onload=function(){ 

  //定义变量获取屏幕视口宽度
    var windowWidth = window.screen.width;
    if(windowWidth < 768){
        document.getElementById("pc1").style.display="none";
    }
    if(windowWidth >= 768){
        document.getElementById("sj1").style.display="none";
    }
  }
     
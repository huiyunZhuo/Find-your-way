/*
* @Author: Administrator
* @Date:   2017-12-12 11:37:58
* @Last Modified by:   asus
* @Last Modified time: 2018-06-19 16:36:33
*/

'use strict';
function $(id){
	return document.getElementById(id);
}
window.onload=function(){
	//搜索框
	var keyword="自驾游"
	var txt=$("text").getElementsByTagName("input")[0];
	txt.onfocus=function(){
		if(this.value==keyword){
			this.value="";
		}
	}
	txt.onblur=function(){
		if(this.value==""){
			this.value=keyword;
		}
	}
   //登录框
   $("login").onclick=function(){
   	    $("login_content").style.display="block";
   	    $("mask").style.display="block";
   }
   $("close").onclick=function(){
   	$("login_content").style.display="none";
   	$("mask").style.display="none";
   }



  //firstnav
  var firstuls = $("firstNav").getElementsByTagName("ul");
            for (var i = 0; i < firstuls.length; i++) {
                firstuls[i].onmousemove = function(){
                    for (var i = 0; i < firstuls.length; i++) {
                        firstuls[i].className = "firstulbgc";
                    }
                    this.className = "firstUl";
                }
                firstuls[i].onmouseleave = function(){
                    for (var i = 0; i < firstuls.length; i++) {
                        firstuls[i].className = "firstulbgc";
                    }
                }
            }


   //轮播图
   //箭头出现
   $("slideShow").onmouseover = function(){
        var span = this.getElementsByTagName("span");
        for (var i = 0; i < span.length; i++) {
        	span[i].style.display = "block";
          $("slNum").style.display = "block";
        }
   }
   //箭头消失
     $("slideShow").onmouseleave = function(){
        var span = this.getElementsByTagName("span");
        for (var i = 0; i < span.length; i++) {
        	span[i].style.display = "none";
          $("slNum").style.display = "none";
        }
   }
  //缓动动画公式
  var target = 0;
  var leader = 0;
  setInterval(function(){
    leader = leader + (target - leader) / 5;
    $("sl_Ul").style.left = leader + "px";
  }, 100);
   //动态创建圆圈
   var count = $("sl_Ul").getElementsByTagName("img").length;
   for (var i = 0; i < count; i++) {
      var lis = document.createElement("li");
      var index = i + 1;

      $("slNum").appendChild(lis);//放到ul里
      if (i == 0) {
        lis.setAttribute("class", "sl_current");
      }
      lis.setAttribute("index",i);


      lis.onclick = function(){
        var numindex = Number(this.getAttribute("index"));//将字符串转换为数字
        target = numindex*(-795);
        //排他原理
        var slli = $("slNum").getElementsByTagName("li");
        for (var i = 0; i < slli.length; i++) {
          slli[i].setAttribute("class", "");
        }
        this.setAttribute("class", "sl_current");
      }
   }

  //点箭头时，下面的小圆圈变色
  function setCurrent(){
     var index = Math.abs(target/(-795));//取绝对值，得到当前图片的序号
     var numLis = $("slNum").getElementsByTagName("li");
     for (var i = 0; i < numLis.length; i++) {
       numLis[i].setAttribute("class", "");
     }
     numLis[index].setAttribute("class", "sl_current");
  }
  
  //
  $("pre").onclick = function(){
    if (target < 0) {
      target+=795;
      setCurrent();
    }
  }

    $("next").onclick = function(){
    if (target > -3180) {
      target-=795;
      setCurrent();
    }
  }


  //轮播图右
  // var imgs1 = $("sliderRight").getElementById("imgs1");
  // imgs1.onmouseover = function(){
  //   var timer;
  //   var that = this;
  //   var left = 1;
  //   if (timer) {
  //     clearInterval(timer);
  //   }
  //   timer = setInterval(function(){
  //     if (left <= 10) {
  //       that.style.left = left + "px";
  //       left++;
  //     }
  //   },30);
  // }

  // imgs1.onmouseleave = function(){
  //   var that = this;
  //   var left = 10;
  //   if (timer) {
  //     clearInterval(timer);
  //   }
  //   timer = setInterval(function(){
  //     if (left >= 0) {
  //       that.style.left = left + "px";
  //       left--;
  //     }
  //   },30);
  // }
  

 //tab栏切换1 
  var seLis = $("seUl").getElementsByTagName("li");
  var divs = $("smimg").children;
  for (var i = 0; i < seLis.length; i++) {
    seLis[i].onmouseover = function(){
      for (var i = 0; i < seLis.length; i++) {
        seLis[i].setAttribute("index", i);
        seLis[i].className = "";
      }
      this.className = "se_navBgc";
      for (var i = 0; i < divs.length; i++) {
        divs[i].className = "hide";
      }
      // console.log(this.getAttribute("index"));
      // console.log(divs[this.getAttribute("index")]);
      divs[this.getAttribute("index")].className = "show";
    }
  }
   //tab栏切换2
  var thLis = $("thUl").getElementsByTagName("li");
  var divs2 = $("thimg").children;
  for (var i = 0; i < thLis.length; i++) {
    thLis[i].onmouseover = function(){
      for (var i = 0; i < thLis.length; i++) {
        thLis[i].setAttribute("index", i);
        thLis[i].className = "";
      }
      this.className = "th_navBgc";
      for (var i = 0; i < divs2.length; i++) {
        divs2[i].className = "hide";
      }
      
      divs2[this.getAttribute("index")].className = "show";
    }
  }


  $("seImg1").onmouseover = function(){
    $("wordmy1").className = "words show";
  }
  $("seImg1").onmouseleave = function(){
    $("wordmy1").className = "words hide";
  }

    $("seImg2").onmouseover = function(){
    $("wordmy2").className = "words show";
  }
  $("seImg2").onmouseleave = function(){
    $("wordmy2").className = "words hide";
  }

    $("seImg3").onmouseover = function(){
    $("wordmy3").className = "words show";
  }
  $("seImg3").onmouseleave = function(){
    $("wordmy3").className = "words hide";
  }

    $("seImg4").onmouseover = function(){
    $("wordmy4").className = "words show";
  }
  $("seImg4").onmouseleave = function(){
    $("wordmy4").className = "words hide";
  }

    $("seImg5").onmouseover = function(){
    $("wordmy5").className = "words show";
  }
  $("seImg5").onmouseleave = function(){
    $("wordmy5").className = "words hide";
  }

    $("seImg6").onmouseover = function(){
    $("wordmy6").className = "words show";
  }
  $("seImg6").onmouseleave = function(){
    $("wordmy6").className = "words hide";
  }

    $("seImg7").onmouseover = function(){
    $("wordmy7").className = "words show";
  }
  $("seImg7").onmouseleave = function(){
    $("wordmy7").className = "words hide";
  }

    $("seImg8").onmouseover = function(){
    $("wordmy8").className = "words show";
  }
  $("seImg8").onmouseleave = function(){
    $("wordmy8").className = "words hide";
  }

  $("sehd1").onmouseover = function(){
    $("wordhd1").className = "words show";
  }
  $("sehd1").onmouseleave = function(){
    $("wordhd1").className = "words hide";
  }

  $("sehd2").onmouseover = function(){
    $("wordhd2").className = "words show";
  }
  $("sehd2").onmouseleave = function(){
    $("wordhd2").className = "words hide";
  }

  $("sehd3").onmouseover = function(){
    $("wordhd3").className = "words show";
  }
  $("sehd3").onmouseleave = function(){
    $("wordhd3").className = "words hide";
  }

  $("sehd4").onmouseover = function(){
    $("wordhd4").className = "words show";
  }
  $("sehd4").onmouseleave = function(){
    $("wordhd4").className = "words hide";
  }

  $("sehd5").onmouseover = function(){
    $("wordhd5").className = "words show";
  }
  $("sehd5").onmouseleave = function(){
    $("wordhd5").className = "words hide";
  }

  $("sehd6").onmouseover = function(){
    $("wordhd6").className = "words show";
  }
  $("sehd6").onmouseleave = function(){
    $("wordhd6").className = "words hide";
  }

  $("sehd7").onmouseover = function(){
    $("wordhd7").className = "words show";
  }
  $("sehd7").onmouseleave = function(){
    $("wordhd7").className = "words hide";
  }

  $("sehd8").onmouseover = function(){
    $("wordhd8").className = "words show";
  }
  $("sehd8").onmouseleave = function(){
    $("wordhd8").className = "words hide";
  }

   $("sezm1").onmouseover = function(){
    $("wordzm1").className = "words show";
  }
  $("sezm1").onmouseleave = function(){
    $("wordzm1").className = "words hide";
  }

  $("sezm2").onmouseover = function(){
    $("wordzm2").className = "words show";
  }
  $("sezm2").onmouseleave = function(){
    $("wordzm2").className = "words hide";
  }
  $("sezm3").onmouseover = function(){
    $("wordzm3").className = "words show";
  }
  $("sezm3").onmouseleave = function(){
    $("wordzm3").className = "words hide";
  }
  $("sezm4").onmouseover = function(){
    $("wordzm4").className = "words show";
  }
  $("sezm4").onmouseleave = function(){
    $("wordzm4").className = "words hide";
  }
  $("sezm5").onmouseover = function(){
    $("wordzm5").className = "words show";
  }
  $("sezm5").onmouseleave = function(){
    $("wordzm5").className = "words hide";
  }
  $("sezm6").onmouseover = function(){
    $("wordzm6").className = "words show";
  }
  $("sezm6").onmouseleave = function(){
    $("wordzm6").className = "words hide";
  }
  $("sezm7").onmouseover = function(){
    $("wordzm7").className = "words show";
  }
  $("sezm7").onmouseleave = function(){
    $("wordzm7").className = "words hide";
  }
  $("sezm8").onmouseover = function(){
    $("wordzm8").className = "words show";
  }
  $("sezm8").onmouseleave = function(){
    $("wordzm8").className = "words hide";
  }

  $("semq1").onmouseover = function(){
    $("wordmq1").className = "words show";
  }
  $("semq1").onmouseleave = function(){
    $("wordmq1").className = "words hide";
  }
  $("semq2").onmouseover = function(){
    $("wordmq2").className = "words show";
  }
  $("semq2").onmouseleave = function(){
    $("wordmq2").className = "words hide";
  }
  $("semq3").onmouseover = function(){
    $("wordmq3").className = "words show";
  }
  $("semq3").onmouseleave = function(){
    $("wordmq3").className = "words hide";
  }
  $("semq4").onmouseover = function(){
    $("wordmq4").className = "words show";
  }
  $("semq5").onmouseleave = function(){
    $("wordmq5").className = "words hide";
  }
  $("semq5").onmouseover = function(){
    $("wordmq5").className = "words show";
  }
  $("semq5").onmouseleave = function(){
    $("wordmq5").className = "words hide";
  }
  $("semq6").onmouseover = function(){
    $("wordmq6").className = "words show";
  }
  $("semq6").onmouseleave = function(){
    $("wordmq6").className = "words hide";
  }
  $("semq7").onmouseover = function(){
    $("wordmq7").className = "words show";
  }
  $("semq7").onmouseleave = function(){
    $("wordmq7").className = "words hide";
  }
  $("semq8").onmouseover = function(){
    $("wordmq8").className = "words show";
  }
  $("semq8").onmouseleave = function(){
    $("wordmq8").className = "words hide";
  }

  $("thqx1").onmouseover = function(){
    $("wordqx1").className = "words show";
  }
  $("thqx1").onmouseleave = function(){
    $("wordqx1").className = "words hide";
  }
  $("thqx2").onmouseover = function(){
    $("wordqx2").className = "words show";
  }
  $("thqx2").onmouseleave = function(){
    $("wordqx2").className = "words hide";
  }
  $("thqx3").onmouseover = function(){
    $("wordqx3").className = "words show";
  }
  $("thqx3").onmouseleave = function(){
    $("wordqx3").className = "words hide";
  }
  $("thqx4").onmouseover = function(){
    $("wordqx4").className = "words show";
  }
  $("thqx4").onmouseleave = function(){
    $("wordqx4").className = "words hide";
  }
  $("thqx5").onmouseover = function(){
    $("wordqx5").className = "words show";
  }
  $("thqx5").onmouseleave = function(){
    $("wordqx5").className = "words hide";
  }
  $("thqx6").onmouseover = function(){
    $("wordqx6").className = "words show";
  }
  $("thqx6").onmouseleave = function(){
    $("wordqx6").className = "words hide";
  }
  $("thqx7").onmouseover = function(){
    $("wordqx7").className = "words show";
  }
  $("thqx7").onmouseleave = function(){
    $("wordqx7").className = "words hide";
  }
  $("thqx8").onmouseover = function(){
    $("wordqx8").className = "words show";
  }
  $("thqx8").onmouseleave = function(){
    $("wordqx8").className = "words hide";
  }
  $("thtb1").onmouseover = function(){
    $("wordtb1").className = "words show";
  } 
  $("thtb1").onmouseleave = function(){
    $("wordtb1").className = "words hide";
  }
  $("thtb2").onmouseover = function(){
    $("wordtb2").className = "words show";
  } 
  $("thtb2").onmouseleave = function(){
    $("wordtb2").className = "words hide";
  }
  $("thtb3").onmouseover = function(){
    $("wordtb3").className = "words show";
  }
  $("thtb3").onmouseleave = function(){
    $("wordtb3").className = "words hide";
  }
  $("thtb4").onmouseover = function(){
    $("wordtb4").className = "words show";
  }
  $("thtb4").onmouseleave = function(){
    $("wordtb4").className = "words hide";
  }
  $("thtb5").onmouseover = function(){
    $("wordtb5").className = "words show";
  }
  $("thtb5").onmouseleave = function(){
    $("wordtb5").className = "words hide";
  }
  $("thtb6").onmouseover = function(){
    $("wordtb6").className = "words show";
  }
  $("thtb6").onmouseleave = function(){
    $("wordtb6").className = "words hide";
  }
  $("thtb7").onmouseleave = function(){
    $("wordtb7").className = "words hide";
  }
  $("thtb7").onmouseover = function(){
    $("wordtb7").className = "words show";
  }
  $("thtb8").onmouseleave = function(){
    $("wordtb8").className = "words hide";
  }
  $("thtb8").onmouseover = function(){
    $("wordtb8").className = "words show";
  }
   $("thjd1").onmouseover = function(){
    $("wordjd1").className = "words show";
  }
  $("thjd1").onmouseleave = function(){
    $("wordjd1").className = "words hide";
  } 
  $("thjd2").onmouseover = function(){
    $("wordjd2").className = "words show";
  }
  $("thjd2").onmouseleave = function(){
    $("wordjd2").className = "words hide";
  }
  $("thjd3").onmouseover = function(){
    $("wordjd3").className = "words show";
  }
  $("thjd3").onmouseleave = function(){
    $("wordjd3").className = "words hide";
  }
  $("thjd4").onmouseover = function(){
    $("wordjd4").className = "words show";
  }
  $("thjd4").onmouseleave = function(){
    $("wordjd4").className = "words hide";
  }
  $("thjd5").onmouseover = function(){
    $("wordjd5").className = "words show";
  }
  $("thjd5").onmouseleave = function(){
    $("wordjd5").className = "words hide";
  }
  $("thjd6").onmouseover = function(){
    $("wordjd6").className = "words show";
  }
  $("thjd6").onmouseleave = function(){
    $("wordjd6").className = "words hide";
  }
  $("thjd7").onmouseover = function(){
    $("wordjd7").className = "words show";
  }
  $("thjd7").onmouseleave = function(){
    $("wordjd7").className = "words hide";
  }
  $("thjd8").onmouseover = function(){
    $("wordjd8").className = "words show";
  }
  $("thjd8").onmouseleave = function(){
    $("wordjd8").className = "words hide";
  }
  

   
}

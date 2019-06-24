/*
* @Author: Administrator
* @Date:   2017-12-23 11:15:12
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-23 22:30:48
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
   //
   //注册
   $("regist").onclick=function(){
   	$("regist_content").style.display="block";
   	$("mask").style.display="block";
   }
   $("res_close").onclick=function(){
   	$("regist_content").style.display="none";
   	$("mask").style.display="none";
   }
   $("deliver").onclick=function(){
   var tex=$("phone").getElementsByTagName("input")[0].value;
      // console.log(tex.length);
      if(tex.length!=11){
         $("txt-pwdStaTips").innerHTML="输入不合法";
         $("txt-pwdStaTips").className="err";
      }
     if(tex.length==11){
         $("txt-pwdStaTips").innerHTML="验证码已发送";
         $("txt-pwdStaTips").className="true";
      }
   }
   //注册验证手机号是不是为空
      $("res_submit").onclick=function(){
         var tex=$("phone").getElementsByTagName("input")[0].value;
         if(tex.length==0){
            $("txt-pwdStaTips").innerHTML="请输入手机号";
            $("txt-pwdStaTips").className="err";
         }
      }
   //轮播图
   //箭头注册事件
   $("ShowBox").onmouseover=function(){
     var spans=$("ShowBox").getElementsByTagName("span");
     for (var i = 0; i < spans.length; i++) {
        spans[i].style.display="block";
     }
   }
    $("ShowBox").onmouseleave=function(){
     var spans=$("ShowBox").getElementsByTagName("span");
     for (var i = 0; i < spans.length; i++) {
        spans[i].style.display="none";
     }
   }
   //动态创建li
   var count=$("imgUl").getElementsByTagName("img").length;
   for (var i = 0; i < count; i++) {
      var lis=document.createElement("li");
      var index=i+1;
      lis.innerHTML=index;
      $("slide_nav").appendChild(lis);
      if(i==0){
         lis.setAttribute("class","nav_bg");
      }
      //导航切换
      lis.setAttribute("index",i);
      lis.onmouseover=function(){
         var curr=Number(this.getAttribute("index"));
         target=curr*-1400;
         var lis=$("slide_nav").getElementsByTagName("li");
         for (var i = 0; i < lis.length; i++) {
            lis[i].setAttribute("class","");
         }
         this.setAttribute("class","nav_bg");
      }
   }
   //设定目标
   var target=0;
   var leader=0;
   setInterval(function(){
      leader=leader+(target-leader)/5;
      $("imgUl").style.left=leader+"px";
   },50);
   //给箭头注册事件
   $("sword_pre").onclick=function(){
      if(target<0){
         target+=1400;
         Get();
      }
   }
   $("sword_next").onclick=function(){
      // target>-4200注意不是-5600
      if(target>-4200){
         target-=1400;
         Get();
      }
   }
   //排他原理给让导航随着图片改变位置
   function Get(){
      var lis=$("slide_nav").getElementsByTagName("li");
      var current=Math.abs(target/1400);
      for (var i = 0; i < lis.length; i++) {
         lis[i].setAttribute("class","");
      }
      lis[current].setAttribute("class","nav_bg");
   }
   //轮播图完毕
   //主题推荐
   var themeNav=$("theme_nav").getElementsByTagName("li");
   var placeRight=$("romPlacer").children;
   for (var i = 0; i < themeNav.length; i++) {
      themeNav[i].onmouseover=function(){
         for (var i = 0; i < themeNav.length; i++) {
            themeNav[i].setAttribute("index",i);
         }
         for (var i = 0; i < placeRight.length; i++) {
            placeRight[i].className="none_romPlace";
         }
           console.log(this.getAttribute("index"));
            placeRight[this.getAttribute("index")].className="show_romPlace";
      }
   }
   //主题推荐完毕
   //目的地推荐li1
   var timer;
   $("aimPlace_intr1").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr1").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr1").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr1").style.top=430+num+"px";
         }
      },2);
   }
   //目的地推荐li2
      var timer;
   $("aimPlace_intr2").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr2").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr2").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr2").style.top=430+num+"px";
         }
      },2);
   }
      //目的地推荐li3
      var timer;
   $("aimPlace_intr3").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr3").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr3").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr3").style.top=430+num+"px";
         }
      },2);
   }
      //目的地推荐li4
      var timer;
   $("aimPlace_intr4").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr4").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr4").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr4").style.top=430+num+"px";
         }
      },2);
   }
      //目的地推荐li5
      var timer;
   $("aimPlace_intr5").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr5").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr5").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr5").style.top=430+num+"px";
         }
      },2);
   }
      //目的地推荐li6
      var timer;
   $("aimPlace_intr6").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr6").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr6").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr6").style.top=430+num+"px";
         }
      },2);
   }
      //目的地推荐li7
      var timer;
   $("aimPlace_intr7").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr7").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr7").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr7").style.top=430+num+"px";
         }
      },2);
   }
      //目的地推荐li8
      var timer;
   $("aimPlace_intr8").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-80){
            num--;
            $("aimPlace_intr8").style.top=160+num+"px";
         }
      },2);
   }
   $("aimPlace_intr8").onmouseleave=function(){
      var num=-270;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<=-80){
            num++;
            $("aimPlace_intr8").style.top=430+num+"px";
         }
      },2);
   }
}
/*
* @Author: Administrator
* @Date:   2017-12-12 11:37:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-26 11:02:44
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
   //注册框
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

   //发现当季游玩
   var playLi=$("play_nav").getElementsByTagName("li");
   var playTu=$("play_tu").getElementsByTagName("ul");
   for (var i = 0; i < playLi.length; i++) {
    
      playLi[i].onmouseover=function(){
         for (var i = 0; i < playLi.length; i++) {
            playLi[i].setAttribute("index",i);
            playLi[i].className = "";
         }
        for (var i = 0; i < playTu.length; i++) {
           playTu[i].className="tu_none";
        }
        playTu[this.getAttribute("index")].className="tu_show";
        this.className = "navColor";
      }
   }
//青旅酒店
  var img = document.getElementById("digmig");
    var timer;
    img.onmouseover = function(){
      var that = this;
      var left = 1;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 10){
          that.style.left = "-" + left + "px";
          left++;
        }
      }, 30);
    }

    img.onmouseleave = function(){
      var that = this;
      var left = -10;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 0){
          that.style.left = left + "px";
          left++;
        }
      }, 30);
    }
//古镇酒店
  var img = document.getElementById("digmig1");
    var timer;
    img.onmouseover = function(){
      var that = this;
      var left = 1;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 10){
          that.style.left = "-" + left + "px";
          left++;
        }
      }, 30);
    }

    img.onmouseleave = function(){
      var that = this;
      var left = -10;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 0){
          that.style.left = left + "px";
          left++;
        }
      }, 30);
    }
//亲子酒店
  var img = document.getElementById("digmig2");
    var timer;
    img.onmouseover = function(){
      var that = this;
      var left = 1;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 10){
          that.style.left = "-" + left + "px";
          left++;
        }
      }, 30);
    }

    img.onmouseleave = function(){
      var that = this;
      var left = -10;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 0){
          that.style.left = left + "px";
          left++;
        }
      }, 30);
    }
//依山酒店
  var img = document.getElementById("digmig3");
    var timer;
    img.onmouseover = function(){
      var that = this;
      var left = 1;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 10){
          that.style.left = "-" + left + "px";
          left++;
        }
      }, 30);
    }

    img.onmouseleave = function(){
      var that = this;
      var left = -10;
      if(timer){
        clearInterval(timer);
      }
      timer = setInterval(function(){
        if(left <= 0){
          that.style.left = left + "px";
          left++;
        }
      }, 30);
    }


}
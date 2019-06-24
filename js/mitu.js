/*
* @Author: Administrator
* @Date:   2017-12-12 11:37:58
* @Last Modified by:   Administrator
* @Last Modified time: 2017-12-20 19:57:55
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
   //倒计时
   setInterval(function(){
      var nowTime=new Date();
      var endTime=new Date("2018-02-02 00:00:00");
      var seconds=parseInt(endTime-nowTime)/1000;
      var day=parseInt(seconds/3600/24);
      var hours=parseInt(seconds/3600%24);
      var minute=parseInt(seconds/60%60);
      var second = parseInt(seconds % 60);
      $("back_time").innerHTML="距离活动结束还有"+day+"天"+hours+"小时"+minute+"分钟"+second+"秒";
   },1000);
   //倒计时完毕
   //特价换图
   var lis=$("sale_choose").getElementsByTagName("li");
   var countUl=$("show_box").getElementsByTagName("ul");
   for (var i = 0; i < lis.length; i++) {
      lis[i].onmouseover=function(){
            for(var i=0;i<lis.length;i++){
               lis[i].setAttribute("index",i);
               lis[i].className="sale_kind sale_nav sale_ul sale_li";
            } 
            this.className="sale_kind sale_nav sale_ul current";
            for (var i = 0; i < countUl.length; i++) {
               countUl[i].className="ul_none";
            }
            countUl[this.getAttribute("index")].className="ul_show";
      } 
   }
   //当季热玩
   var hotlis=$("hotPlay_ul").getElementsByTagName("li");
   var rightDiv=$("guide_right").children;
   for(var i=0;i<hotlis.length;i++){
      hotlis[i].onmouseover=function(){
         for(var i=0;i<hotlis.length;i++){
            hotlis[i].setAttribute("current",i);
            hotlis[i].className="li_border";

         }
         this.className="show_border";
         for(var i=0;i<rightDiv.length;i++){
            rightDiv[i].className="bigul_none";
         }
         rightDiv[this.getAttribute("current")].className="bigul_show";
      }
   }
   //出境长线
   var longlis=$("long_nav").getElementsByTagName("li");
   var longRoads=$("longRoad").children;
   for(var i=0;i<longlis.length;i++){
      longlis[i].onmouseover=function(){
            for(var i=0;i<longlis.length;i++){
            longlis[i].setAttribute("cur",i);
            longlis[i].className=""
         }
         this.className="bor_co";
         for(var i=0;i<longRoads.length;i++){
            longRoads[i].className="long_none";
         }
         console.log(this.getAttribute("cur"));
         longRoads[this.getAttribute("cur")].className="long_show";
      }
   }
   //出境长线完毕
   //出境短线
   var shortLis=$("short_nav").getElementsByTagName("li");
   var shortRoad=$("shortRoad").children;
   for (var i = 0; i < shortLis.length; i++) {
      shortLis[i].onmouseover=function(){
         for (var i = 0; i < shortLis.length; i++) {
            shortLis[i].setAttribute("index",i);
            shortLis[i].className="";
         }
         this.className="bor_co";
         for (var i = 0; i < shortRoad.length; i++) {
            shortRoad[i].className="short_none";
         }
         shortRoad[this.getAttribute("index")].className="short_show";
      }
   }
   //自助旅游
   var selfLis=$("self_nav").getElementsByTagName("li");
   var selfDiv=$("selfRoad").children;
   for (var i = 0; i < selfLis.length; i++) {
      selfLis[i].onmouseover=function(){
         for (var i = 0; i < selfLis.length; i++) {
            selfLis[i].className="";
            selfLis[i].setAttribute("index",i);
         }
         this.className="bor_co";
         for (var i = 0; i < selfDiv.length; i++) {
            selfDiv[i].className="self_none";
         }
         selfDiv[this.getAttribute("index")].className="self_show";
      }

   }
   //旅游攻略左面动画
   var timer;
   $("Raiders_left").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>=-285){
            num--;
            if(num>=-50){
                $("left_botm").style.top=335+num+"px";
            }
            else{
               num=-50;
               $("left_botm").style.top=335+num+"px";
            }
         }
      },20);
   }
   $("Raiders_left").onmouseleave=function(){
      var num=-50;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<0){
            num++;
            if(num<=50){
                $("left_botm").style.top=335+num+"px";
                console.log(num);
            }
            else{
               num=50;
               $("left_botm").style.top=335+num+"px";
            }
         }
      },20);
   }
    //旅游攻略右面的动画
      var timer;
   $("right_li").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>-130){
            num--;
            if(num>=-70){
              $("right_bottom").style.top=160+num+"px";
            }
            else{
               num=-70;
               $("right_bottom").style.top=160+num+"px";
            }
         }
      },20);
   }
   var timer;
   $("right_li").onmouseleave=function(){
      var num=-70;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<0){
            num++;
            if(num<=70){
              $("right_bottom").style.top=160+num+"px";
            }
            else{
               num=70;
               $("right_bottom").style.top=160+num+"px";
            }
         }
      },20);
   }
     //游记攻略li1
      var timer;
   $("right_li1").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>-130){
            num--;
            if(num>=-70){
              $("right_bottom1").style.top=160+num+"px";
            }
            else{
               num=-70;
               $("right_bottom1").style.top=160+num+"px";
            }
         }
      },20);
   }
   var timer;
   $("right_li1").onmouseleave=function(){
      var num=-70;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<0){
            num++;
            if(num<=70){
              $("right_bottom1").style.top=160+num+"px";
            }
            else{
               num=70;
               $("right_bottom1").style.top=160+num+"px";
            }
         }
      },20);
   }
   //游记攻略li2
     var timer;
   $("right_li2").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>-130){
            num--;
            if(num>=-70){
              $("right_bottom2").style.top=160+num+"px";
            }
            else{
               num=-70;
               $("right_bottom2").style.top=160+num+"px";
            }
         }
      },20);
   }
   var timer;
   $("right_li2").onmouseleave=function(){
      var num=-70;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<0){
            num++;
            if(num<=70){
              $("right_bottom2").style.top=160+num+"px";
            }
            else{
               num=70;
               $("right_bottom2").style.top=160+num+"px";
            }
         }
      },20);
   }
   //旅游攻略li3
        var timer;
   $("right_li3").onmouseover=function(){
      var num=0;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num>-130){
            num--;
            if(num>=-70){
              $("right_bottom3").style.top=160+num+"px";
            }
            else{
               num=-70;
               $("right_bottom3").style.top=160+num+"px";
            }
         }
      },20);
   }
   var timer;
   $("right_li3").onmouseleave=function(){
      var num=-70;
      if(timer){
         clearInterval(timer);
      }
      timer=setInterval(function(){
         if(num<0){
            num++;
            if(num<=70){
              $("right_bottom3").style.top=160+num+"px";
            }
            else{
               num=70;
               $("right_bottom3").style.top=160+num+"px";
            }
         }
      },20);
   }
   //旅游攻略完毕
}
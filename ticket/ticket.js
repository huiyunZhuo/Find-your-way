/*
* @Author: Administrator
* @Date:   2017-12-12 11:37:58
* @Last Modified by:   asus1
* @Last Modified time: 2017-12-26 09:21:11
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
 //------------------------------------------轮播图
   	//鼠标进入轮播图区域时，显示左右翻页的箭头
        		$("carousel_all").onmouseover = function(){
        			var arrs = this.getElementsByTagName("span");//获取到左右箭头
        			for (var i = 0; i < arrs.length; i++) {
        				arrs[i].style.display = "block";
        			};
        		}
        		//鼠标移出轮播图区域时，左右箭头隐藏
        		$("carousel_all").onmouseout = function(){
        			var arrs = this.getElementsByTagName("span");//获取到左右箭头
        			for (var i = 0; i < arrs.length; i++) {
        				arrs[i].style.display = "none";
        			};
        		}
		//动态生成轮播图对应的导航条选项
	        	var imgCount = $("slider_s1").getElementsByTagName("img").length;//获取图片个数
	        	// imgCount = $("scroll").children[0].children[0].children.length
	        	for (var i = 0; i < imgCount; i++) {
	        		var li = document.createElement("li");//创建1给个li标签
	        		li.innerHTML = i+1;
	        		//设置初始选中项
	        		if(i == 0){
	        			li.setAttribute("class", "current");
	        		}
	        		li.setAttribute("index", i);
	        		//注册每个选项的onclick事件。排他思想
	        		li.onclick = function(){
	        			var lis = $("sc_nav").getElementsByTagName("li");
	        			for (var i = 0; i < lis.length; i++) {
	        				lis[i].className = "";
	        			};
	        			this.className = "current";
	        			//点击导航选项时，修改target的值，让图片滚动起来
	        			target = this.getAttribute("index") * -800;
	        		}
	        		$("sc_nav").appendChild(li);
	        	};

	        	//缓动动画
	        	var leader = 0;
	        	var target = 0;
	        	setInterval(function(){
	        		leader = leader + (target - leader) / 10;
	        		$("slider_s1_ul").style.left = leader + "px";
	        	}, 30);

	        	//左箭头点击事件
	        	$("prev").onclick = function(){
	        		if(target < 0){
	        			target += 800;
	        		}
	        		setCurrent();
	        	}

	        	//右箭头点击事件
	        	$("next").onclick = function(){
	        		if(target > -3200){
	        			target -= 800;
	        		}
	        		else{
	        			target = 0;//如果已经是最后一张图(第5张图),就直接回到首图
	        		}
	        		setCurrent();
	        	}

	   //修改对应的nav栏中的按钮为被选中项
	        	function setCurrent(){
	        		var index = Math.abs(target / 800);//取绝对值
	        		var lis = $("sc_nav").getElementsByTagName("li");
	        		for (var i = 0; i < lis.length; i++) {
	        			lis[i].className = "";
	        		};
	        		lis[index].className = "current";
	        	}
	   //热门目的地里面随着导航栏变化图片边框会变的动画
	           var Lis = $("sAnav_lis").getElementsByTagName("li"); //首先找到导航栏中的li
	           var aS = $("sA_Pview_div").getElementsByTagName("a"); //找到链接图片的那个超链接
	           for (var j = 0; j < Lis.length; j++) {
	           	Lis[j].onmouseover = function(){
	           		 for (var i = 0; i < Lis.length; i++){
	           		 	Lis[i].className = "";
	           		    Lis[i].setAttribute("index",i);	           		 	 
	           		 }
	           		  this.className = "bgc";                   
	           for (var i = 0; i < aS.length; i++) {
	           	  aS[i].className = "";
	              }
	           aS[this.getAttribute("index")].className = "borderstyle";
	        } 
	           Lis[j].onmouseleave = function(){
	                 this.className = ""; 
	                 for (var i = 0; i < aS.length; i++) {
	                 	aS[i].className = "";
	                 }
	         }
	       }

	       for (var j = 0; j < aS.length; j++) {
	        	aS[j].onmouseover = function(){
              for (var i = 0; i < aS.length; i++) {
              	aS[i].className = "";
              	aS[i].setAttribute("index",i);	
              }
              this.className = "borderstyle";
         for (var i = 0; i < Lis.length; i++) {
         	Lis[i].className = "";
         }
         Lis[this.getAttribute("index")].className = "bgc";         
	        	}
	          aS[j].onmouseleave = function(){
	                 this.className = ""; 
	                 for (var i = 0; i < aS.length; i++) {
	                 	Lis[i].className = "";
	                 }
	         }	
	        }
	//----------境外景点----------------/ 
	//导航栏切换------
	  var lis = $("oSnav_lis").getElementsByTagName("li");
	  // var count = $("overSeas_div").getElementById("oS_Picked_div");
	  var divs = $("oS_Picked_div").children;
	  lis[0].className = "backgr";
	  for (var i = 0; i < lis.length; i++) {
	  	lis[i].onmouseover = function(){
	  	   for (var j = 0; j < lis.length; j++) {
	  	   	lis[j].className = "";
            lis[j].setAttribute("index",j);
	  	   }
	  	   this.className  = "backgr";
	  	   for (var i = 0; i < divs.length; i++) {
	  	   	divs[i].style.display = "none";
	  	   }
	  	   divs[this.getAttribute("index")].style.display = "block";
	  	}
	  }
   // 下面的四个盒子切换------------
     var divS = $("oS_Picked_div").children[0];
     var lisT = divS.getElementsByTagName("li");
     var Comment =divS.getElementsByClassName("comment1");
     for (var i = 0; i < lisT.length; i++) {
     	lisT[i].onmouseover = function(){
         for (var j = 0; j < lisT.length; j++) {
         	lisT[j].setAttribute("index", j);
         }
         for (var i = 0; i < Comment.length; i++) {
         	Comment[i].style.display = "none";
         }
         Comment[this.getAttribute("index")].style.display = "block";
     	}
      	lisT[i].onmouseleave = function(){
         for (var j = 0; j < lisT.length; j++) {
         	lisT[j].setAttribute("index", j);
         }
         for (var i = 0; i < Comment.length; i++) {
         	Comment[i].style.display = "none";
         }
         Comment[this.getAttribute("index")].style.display = "none";
     	}
     }
     //----------------------
       var timer;
       var skip = $("cooperate_D").getElementsByClassName("a_n");
       var Imag = $("cooperate_D").getElementsByTagName("img");
       for (var i = 0; i < skip.length; i++) {
       	     skip[i].onmouseover = function(){
       	     	for (var i = 0; i < skip.length; i++) {
       	     	skip[i].setAttribute("index",i);
       	     	}
              var num = 0;              
              if(timer){
        	clearInterval(timer);
        }
        timer = setInterval(function(){
        	if(num < 10){
        	num++;
        	Imag[this.getAttribute("index")].style.left  = "-" + num + "px";
        	}
        },50);
      } 
           skip[i].onmouseleave = function(){
           	for (var i = 0; i < skip.length; i++) {
           	   skip[i].setAttribute("index",i);
           	}
         	var num=-10;
         
      	    if(timer){
      		clearInterval(timer);
      	     }
      	     timer = setInterval(function(){
      	    	if(num<0){
      			num++;
      		Imag[this.getAttribute("index")].style.left = num +"px";
      		}
      	},50);
      }
       }


  }

	var jobarr=["职位描述：","职位要求:"];
	var introduce=[
	{"id":1, "job":"iOS工程师","price":"10 - 20K",
	"detail":"参与十年后项目的iOS客户端的开发，包括 iPhone、iPad。"},
	{"id":2, "job":"Android工程师","price":"10 - 20K",
	"detail":"负责十年后项目的Android客户端的开发。"},
	{"id":3, "job":"Web前端工程师","price":"10 - 20K",
	"detail":"负责十年后项目的web的开发。负责十年后项目推广HTML5页面的开发。"},
	{"id":4, "job":"CTO/Web后端工程师","price":"10 - 20K",
	"detail":"CTO/Web后端工程师介绍"},
	{"id":5, "job":"交互设计师","price":"10 - 20K",
	"detail":"交互设计师介绍"},
	{"id":6, "job":"平面设计师","price":"10 - 20K",
	"detail":"平面设计师介绍"}
	];	
	var join_list=document.getElementById("join_list");
	var join_bg=document.getElementById("join_bg");
	var close=document.getElementById("close");
	var j_list=join_list.children;
	var email=document.getElementById("email");
	var emailline=document.getElementById("emailline");
	var bgtxt=document.getElementById("bgtxt");
	email.onmouseenter=function(){
		animate(emailline,{"width":235,"left":395});
	}
	email.onmouseleave=function(){
		animate(emailline,{"width":0,"left":520});
	}
	for(var i=0;i<j_list.length;i++){
		j_list[i].setAttribute("index",i);
		var index="";
		j_list[i].onmouseenter=function(){
			this.style.backgroundColor="rgba(0,0,0,.4)";
			var Obj=this.children[1].children[0];
			clearInterval(Obj.timeId);
			var i=0;
			Obj.timeId=setInterval(function(){
				i+=10;
				Obj.style.transform="rotate("+i+"deg)";
				if(i==180){
					clearInterval(Obj.timeId);
				}
			},10);
		}
		j_list[i].onmouseleave=function(){
			this.style.backgroundColor="rgba(255,255,255,.2)";
			var Obj=this.children[1].children[0];
			clearInterval(Obj.timeId);
			var i=270;
			Obj.timeId=setInterval(function(){
				i-=10;
				Obj.style.transform="rotate("+i+"deg)";
				if(i==0){
					clearInterval(Obj.timeId);
				}
			},10);
		}
		j_list[i].onclick=function(){
				join_bg.style.display="block";
				index=this.getAttribute("index");
				var bgtxt=join_bg.children[index];
				bgtxt.style.display="block";
				close.style.display="block";
				animate(join_bg,{"height":610,"top":0});
				join_bg.ondblclick=function(){
					var bgtxt=join_bg.children[index];
					bgtxt.style.display="none";
					close.style.display="none";
					animate(join_bg,{"height":0,"top":305},function(){
						join_bg.style.display="none";
					});
				}
				close.onmouseenter=function(){
					clearInterval(close.timeId);
					var i=0;
					close.timeId=setInterval(function(){
						i+=10;
						close.style.transform="rotate("+i+"deg)";
						if(i==180){
							clearInterval(close.timeId);
						}
					},10);
				}
				close.onmouseout=function(){
					clearInterval(close.timeId);
					var i=180;
					close.timeId=setInterval(function(){
						i-=10;
						close.style.transform="rotate("+i+"deg)";
						if(i==0){
							clearInterval(close.timeId);
						}
					},10);
				}
				close.onclick=function(){
					var bgtxt=join_bg.children[index];
					bgtxt.style.display="none";
					close.style.display="none";
					animate(join_bg,{"height":0,"top":305},function(){
						join_bg.style.display="none";
					});
				}
		}
	}
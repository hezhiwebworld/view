  //获取所有的li
    var liObjs=my$("uul").children;
   
     //获取默认出现的botm
     var botm=document.getElementsByClassName('botm')[0];
     //获取微博div
     var weibo=document.getElementsByClassName('weibo')[0];
     //获取微信div
     var weixin=document.getElementsByClassName('weixin')[0];
     //获取人人div
     var renren=document.getElementsByClassName('renren')[0];
     //获取信件div
     var xinjian=document.getElementsByClassName('xinjian')[0];
     //获取小三角div
     var xiaosanjiao=document.getElementsByClassName('xiaosanjiao')[0];
    var mediaObj = my$("media");
    var mediaChildrens = mediaObj.children;
    var ind=0;
    var share_txt=document.getElementById("share_txt");
    var share_mind=document.getElementById("share_mind");
    var olLiObj=share_txt.children;
    var triangle=document.getElementById("triangle");
    var share_bottom=document.getElementById("share_bottom");
    share_mind.onclick=function(){
      for(var i=0;i<olLiObj.length;i++){
        olLiObj[i].style.display="none";
      }
      for(var j=0;j<liObjs.length;j++){
          liObjs[j].children[0].style.backgroundImage="";
        }
      olLiObj[0].style.display="block";
      triangle.style.left="270px";
    };
  for(var i = 0; i < liObjs.length; i++) {
      liObjs[i].index=i;
      liObjs[i].onclick=function(evt){
        for(var j=0;j<liObjs.length;j++){
          liObjs[j].children[0].style.backgroundImage="";
        }
        for(var j=0;j<olLiObj.length;j++){
          olLiObj[j].style.display="none";
        }
        evt=evt||window.event;
        triangle.style.left=(evt.clientX-share_bottom.offsetLeft-160)+"px";
        olLiObj[this.index+1].style.display="block";
        ind++;
        if(ind==1){
          this.children[0].style.backgroundImage="url(imgs/communicate"+(this.index+1)+".png)";
          ind=0;
        }
      };
  }
/* 
  lis[0].onclick=function(){
    botm.style.display="none";
    weibo.style.display="block";
  }
  lis[0].onmouseover=function(){
    lis[0].children[0].src="imgs/1.png"
  }
  lis[1].onmouseover=function(){
    lis[1].children[0].src="imgs/2.png"
  }
  lis[2].onmouseover=function(){
    lis[2].children[0].src="imgs/3.png"
  }
  lis[3].onmouseover=function(){
    lis[3].children[0].src="imgs/4.png"
  }
  lis[0].onmouseout=function(){
    lis[0].children[0].src="imgs/ic_contact_weibo.png"
  }
  lis[1].onmouseout=function(){
    lis[1].children[0].src="imgs/ic_contact_weixin.png"
  }
  lis[2].onmouseout=function(){
    lis[2].children[0].src="imgs/ic_contact_renren.png"
  }
  lis[3].onmouseout=function(){
    lis[3].children[0].src="imgs/ic_contact_mail.png"
  }
*/

  //下载板块
  var ff = document.getElementById("ff");
  //获取iphone
  var ip = document.getElementById("ip");
  //获取安卓
  var az = document.getElementById("azz");
  var az2 = document.getElementById("az2");
  az.onmouseover = function () {
      // az.style.display="none";
      az2.style.display = "block";
  };
  az2.onmouseover = function () {
      // az.style.display="none";
      az2.style.display = "block";
  };
  az2.onmouseout = function () {
      az.style.display = "block";
      az2.style.display = "none";
  };
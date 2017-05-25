/**
 * Created by Administrator on 2017/4/29.
 */
    //三个副导航开始
    //切换导航背景，并且实现内容的切换
    var subnavObj = document.getElementsByClassName("subnav")[0];
    var subnavAobj = subnavObj.getElementsByTagName("a");
    var lifePageObj = document.getElementsByClassName("lifePage");
    lifePageObj[0].style.display = "block";
    for(var i = 0; i < subnavAobj.length; i++) {
        subnavAobj[i].index = i;
        subnavAobj[i].addEventListener("click",function () {
          for (var j = 0; j < subnavAobj.length; j++) {
            subnavAobj[j].className = "";
            lifePageObj[j].style.display = "none";
          }
          this.className = "dream";
          lifePageObj[this.index].style.display = "block";
        })
    }











//图片展示区域鼠标移入划入透明层
var dreamCardMsg = document.getElementsByClassName("dream_card_l_msg");
var dreamCardL = document.getElementsByClassName("dream_card_l");
//获取下面的每个元素下的a标签
for(var i = 0; i < dreamCardMsg.length; i++) {
  dreamCardL[i].index = i;
  dreamCardL[i].addEventListener("mouseover", function () {
    var dreamCardMsgA = dreamCardMsg[this.index].getElementsByTagName("a")[0];
    animate(dreamCardMsgA, {"marginTop": 0});
  });
  dreamCardL[i].addEventListener("mouseout", function () {
    var dreamCardMsgA = dreamCardMsg[this.index].getElementsByTagName("a")[0];
    animate(dreamCardMsgA, {"marginTop": -250});
  });

//图片展示区域鼠标移入划入透明层 结束


//返回顶部
//第一个参数是按钮id；第二个参数是一个布尔值，true是一直显示按钮，false是当滚动距离不为0时，显示按钮

  function toTop(id, show) {
    var oTop = document.getElementById(id);
    var oTopSobj = oTop.getElementsByTagName("s")[0]; 
    oTop.addEventListener("mouseover",function() {
      oTopSobj.style.display = "block";
    })
    oTop.addEventListener("mouseout",function() {
      oTopSobj.style.display = "none";
    })
    var bShow = show;
    if (!bShow) {
      oTop.style.display = 'none';
      setTimeout(btnShow, 50);
    }
    oTop.onclick = scrollToTop;
    function scrollToTop() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var iSpeed = Math.floor(-scrollTop / 6);
      if (scrollTop <= 0) {
        if (!bShow) {
          oTop.style.display = 'none';
        }
        return;
      }
      document.documentElement.scrollTop = document.body.scrollTop = scrollTop + iSpeed;
      setTimeout(arguments.callee, 50);
    }

    function btnShow() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop <= 200) {
        oTop.style.display = 'none';
      } else {
        oTop.style.display = 'block';
      }
      setTimeout(arguments.callee, 50);
    }
  }
}

toTop("arrow",false);



//动态替换图片
function setDreamCardImg( ) {
  var lifePageDerem = document.getElementsByClassName("lifePage_dream")[0];
  var lifeDreamCard = lifePageDerem.getElementsByClassName("dream_card_l");
  for(var i = 0; i <lifeDreamCard.length ; i++) {
    lifeDreamCard[i].style.background = "url(images/dream_card_"+(1+i)+".png)";
  }
}
setDreamCardImg();


//梦想家页面图片替换
function setDreamerCardImg( ) {
  var lifePageDerem = document.getElementsByClassName("lifePage_dreamer")[0];
  var lifeDreamCard = lifePageDerem.getElementsByClassName("dream_card_l");
  for(var i = 0; i <lifeDreamCard.length ; i++) {
    lifeDreamCard[i].style.background = "url(images/dream_card_"+(lifeDreamCard.length-i)+".png)";
  }
}
setDreamerCardImg();



/**
 * Created by Administrator on 2017/4/29.
 */
//根据id获取单个元素
function my$(id) {
  return document.getElementById(id);
}


/**
 * 功能：运动函数，定时器
 * @param element
 * @param target
 */
function easyAnimate(element, target) {
  clearInterval(element.setId);
  element.setId = setInterval(function () {
    //获取元素的当前的位置
    var current = element.offsetLeft;//数字类型的
    //每次移动的步数
    var step = 15;
    step = current < target ? step : -step;
    //设置当前位置的值
    current += step;
    if (Math.abs(current - target) > Math.abs(step)) {
      element.style.left = current + "px";
    } else {
      element.style.left = target + "px";
      //到达目标,清理计时器
      clearInterval(element.setId);
    }
  }, 20);
}





/*
 * element----要移动的元素
 * target----移动的目标
 * 初级版本
 * */
/*
 * 终极版本的动画函数---有bug
 *
 * */
function animate(element,json,fn) {
  clearInterval(element.timeId);
  element.timeId=setInterval(function () {
    var flag=true;//假设都达到了目标
    for(var attr in json){
      if(attr=="opacity"){//判断属性是不是opacity
        var current= getAttrValue(element,attr)*100;
        //每次移动多少步
        var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
        var step=(target-current)/10;//(目标-当前)/10
        step=step>0?Math.ceil(step):Math.floor(step);
        current=current+step;
        element.style[attr]=current/100;
      }else if(attr=="zIndex"){//判断属性是不是zIndex
        element.style[attr]=json[attr];
      }else{//普通的属性

        //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
        var current= parseInt(getAttrValue(element,attr))||0;
        //每次移动多少步
        var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
        var step=(target-current)/10;//(目标-当前)/10
        step=step>0?Math.ceil(step):Math.floor(step);
        current=current+step;
        element.style[attr]=current+"px";
      }
      if(current!=target){
        flag=false;//如果没到目标结果就为false
      }
    }
    if(flag){//结果为true
      clearInterval(element.timeId);
      if(fn){//如果用户传入了回调的函数
        fn(); //就直接的调用,
      }
    }
  },10);
}


//根据id获取对应的元素
function my$(id) {
  return document.getElementById(id);
}
/*
 * element---任意的元素
 * attr---属性
 * */
function getAttrValue(element,attr) {
  return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}



function getScroll() {
  return {
    left:window.pageXOffset || window.document.body.scrollLeft || document.documentElement.scrollLeft || 0,
    top:window.pageYOffset || document.body.scrollTop || document.documentElement.scrollLeft || 0
  };
}


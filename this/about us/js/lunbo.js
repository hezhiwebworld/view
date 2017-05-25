/*
 * Created by mango on 2017/5/6.
 */
var json1 = [
    {
        top:0,
        left:-165,
        opacity: 0.2,
        zIndex: 2
    },
    {
        top:0,
        left:75,
        opacity: 0.8,
        zIndex: 3
    },
    {
        top:0,
        left:315,
        opacity: 1,
        zIndex: 4
    },
    {
        top:0,
        left:685,
        opacity: 0.8,
        zIndex: 3
    },
    {
        top:0,
        left:925,
        opacity: 0.2,
        zIndex: 2
    }
];

 // * Created by mango on 2017/5/5.
 
function my$(id){
    return document.getElementById(id);
}


 // * element---任意的元素
 // * attr---属性
 // * 
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}

//动画函数
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
        //console.log("target:"+target+"current:"+current+"step:"+step);
    },10);
}

//获取li元素
var flag = true;
var reLiObj = my$("slider").children[0].children;

function assign(){
    for(var i = 0;i < reLiObj.length;i++){
        //给li标签添加自定义索引
        reLiObj[i].setAttribute("index",i);
        //定位图片
        animate(reLiObj[i],json1[i],function (){
            flag=true;
        });
    }

}
assign();
//添加动画效果
//获取按钮
var left = my$("arrLeft");
var right = my$("arrRight");
//为按钮添加点击事件
var count = 2;
left.onclick = function () {
    if(flag){
        flag=false;
        count++;
        json1.unshift(json1.pop());
        //使用排他功能移除class
        for(var i = 0;i < reLiObj.length;i++){
            reLiObj[i].removeAttribute("class");
        }
        reLiObj[count%5].className="current";
        assign();//重新散开图片
    }
};
right.onclick=rightHandler;
function rightHandler() {

    if(flag){
        flag=false;
        count--;
        if(count<0){
            count=4;
        }
        //改变数组中元素的位置
        json1.push(json1.shift());
        for(var i = 0;i < reLiObj.length;i++){
            reLiObj[i].removeAttribute("class");
        }
        reLiObj[count%5].className="current";
        assign();//重新散开图片
    }
}
//自动播放效果
var timeId = setInterval(rightHandler,1500);
var slider = my$("slider");
slider.onmouseover = function () {
    clearInterval(timeId);
};
slider.onmouseout = function () {
    timeId=setInterval(rightHandler,1500);
};
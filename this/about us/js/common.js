function getStyle(element,attr){
        return window.getComputedStyle(element,null)[attr]||element.currentStyle[attr]||0;
    }

    function animate(element,json,fn){
        clearInterval(element.timeId);
        element.timeId=setInterval(function(){
            var flag=true;
            for(var attr in json){
                if(attr=="opacity"){
                    var current=getStyle(element,attr)*100;
                    if(current=='auto'){
                        current=0;
                    }
                    var target=json[attr]*100;
                    var step=(target-current)/10;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    current+=step;
                    element.style[attr]=current/100;
                }else if(attr=="zIndex"){
                    element.style[attr]=json[attr];
                }else{
                    var current=parseInt(getStyle(element,attr));
                    var target=json[attr];
                    var step=(target-current)/10;
                    step=step>0?Math.ceil(step):Math.floor(step);
                    current+=step;
                    element.style[attr]=current+"px";
                }
                if(current!=target){
                    flag=false;
                }
            }
            if(flag){
                clearInterval(element.timeId);
                if(fn){
                    fn();
                }
            }
            // console.log("current:"+current+",target:"+target+",step:"+step);
        },10);
    }


/**
 * Created by mango on 2017/5/5.
 */
function my$(id){
    return document.getElementById(id);
}

/*
 * element---任意的元素
 * attr---属性
 * */
function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}
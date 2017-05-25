/*
 * Created by 静静 on 2017/5/3.
 */



var member=[
    {"backgroundImage": "url(imgs/djq.jpg)","name":"丁建强","small":"Front-End Developer","p":"想成为环球旅行者"},
    {"backgroundImage": "url(imgs/pa.jpg)","name":"彭傲","small":"Android砖家","p":"想成为airfly的B-boy"},
    {"backgroundImage": "url(imgs/cxd.jpg)","name":"啜雪东","small":"COO","p":"想成为电影导演"},
    {"backgroundImage": "url(imgs/xl.jpg)","name":" 陈夏露","small":"新媒体运营经理","p":"想成为良心编剧"},
    {"backgroundImage": "url(imgs/gj.jpg)","name":"高军","small":"资深设计师","p":" 想成为餐厅老板"},
    {"backgroundImage": "url(imgs/lgz.jpg)","name":"刘广志","small":"运营经理","p":"想成为酒馆老板"},
    {"backgroundImage": "url(imgs/wqz.jpg)","name":"王其中","small":"后端工程师","p":"想成为大拿"},
    {"backgroundImage": "url(imgs/xxy.jpg)","name":" 徐晓语","small":" 乱点技能树的吃土少女","p":"想成为水草造景大师"},
    {"backgroundImage": "url(imgs/xy.jpg)","name":" 柳馨宇","small":" 运营实习生","p":" 想成为书店老板娘"},
    {"backgroundImage": "url(imgs/zlt.jpg)","name":" 张立涛","small":"Android砖家","p":"想成为Android专家"},
    {"backgroundImage": "url(imgs/zjx.jpg)","name":"周金欣","small":"PM","p":"想成为社会企业家"},
    {"backgroundImage": "url(imgs/dyz.jpg)","name":"戴一洲","small":"新媒体运营经理","p":"想不断遇见新奇的人"},
    {"backgroundImage": "url(imgs/cxw.jpg)","name":"常晓蔚","small":"CDO","p":"想成为宠物店老板"},
    {"backgroundImage": "url(imgs/dx.jpg)","name":"笪兴","small":"CEO","p":"想成为改变世界的人"},
    {"backgroundImage": "url(imgs/wxl.jpg)","name":"王栩灵","small":"大四学生","p":"想成为动画编剧"},
];
var containerObj=document.getElementById("container");
//头像渐现模块  begin
    function memberNum(){
        //随机生成一个数组
        var randomNum=[];
        for(var j=0;j<20;j++) {
            var n=parseInt(Math.random()*15);
            randomNum.push(n);
        }
        //对数组重复元素排重
        function unique(arr){
            // 遍历arr，把元素分别放入tmp数组(不存在才放)
            var tmp = new Array();
            for(var k in arr){
                //该元素在tmp内部不存在才允许追加
                if(tmp.indexOf(arr[k])==-1){
                    tmp.push(arr[k]);
                }
            }
            return tmp;
        }
        //拿到排重数组，但数组个数可能不足
        var uniqueArr = unique(randomNum);

        if(uniqueArr.length<member.length){//元素个数不足再执行函数
            memberNum();
        }else if(uniqueArr.length==member.length){//元素个数满足时执行下面的函数
            var resultArr=uniqueArr;
            for(var i=0;i<member.length;i++){
                var divObj=document.createElement("div");
                divObj.className="ty_about_team_member member_style_"+i;
                divObj.id="style_"+i;
                var dt=member[resultArr[i]];
                divObj.innerHTML= '<a href="javascript:void(0)" class="ty_about_team_member_circle" style="background-image:'+dt.backgroundImage+';">'+
                    '</a>' +
                    '<div class="ty_about_team_member_infor">' +
                    '<h3>'+dt.name+
                    '<small>'+dt.small+'</small>' +
                    '</h3>' +
                    '<p>'+dt.p+'</p>' +
                    '</div>';
                containerObj.appendChild(divObj);
            }
            return false;
        }
    }
    memberNum();
//头像渐现模块  end

    /*var tyLiObjs=document.getElementsByClassName("ty_about_box")[0].children[0].children;
    console.log(tyLiObjs);
    for(var i=0;i<tyLiObjs.length;i++){
        tyLiObjs[i].onmouseenter=mouseenterHandler;
        tyLiObjs[i].onmouseleave=mouseleaveHandler;
    }
    function mouseenterHandler(){
        for(var j=0;j<tyLiObjs.length;j++){
            animate(tyLiObjs[j],{"width":100});
        }
        animate(this,{"width":500});
    }

    function mouseleaveHandler(){
        for(var j=0;j<tyLiObjs.length;j++){
            animate(tyLiObjs[j],{"width":150});
        }
    }*/
    $(function(){
        $(".ty_about_box>ul>li").mouseenter(function(){
            $(this).stop(true,false).animate({"width":500},200).siblings().stop(true,false).animate({"width":100},200);
            $(this).children(".mask_b").css("display", "none");
        });
        $(".ty_about_box>ul>li").mouseleave(function(){
            $(".ty_about_box>ul>li").stop(true,false).animate({"width":150},200);
            $(this).children(".mask_b").css("display", "block");
        });
    });




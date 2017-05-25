/**
 * Created by Administrator on 2016/5/14.
 */
 
window.onload = function () {

    //1. 创建case下的ul下的li
    //创建ulLeft 下的 <li><a href="#"><img src="" alt=""/><div></a><img src="" alt=""/></div></li>
    for (var i = 0; i <= 14; i++) {
        var $li = "<li><a><img class='caseImg' src='images/" + i + ".jpg' /><div class='info'info></div></a><img class='caseImg2' src='images/" + i + ".jpg' /></li>";

        $("#ul1").append($li);
    }
    for (var i = 15; i <= 29; i++) {
        var $li = "<li><a><img class='caseImg' src='images/" + i + ".jpg' /><div class='info'info></div></a><img class='caseImg2' src='images/" + i + ".jpg' /></li>";
        $("#ul2").append($li);
    }



    //2 注册事件，实现动画效果
    //2.1点击图片，图片翻转
    //封装翻转函数
    var turn = function (target, time, opts) {
        target.find('a').hover(function () {
            $(this).find('img').stop().animate(opts[0], time, function () {
                $(this).hide().next().show();
                $(this).next().animate(opts[1], time);
            });
        }, function () {
            $(this).find('.info').animate(opts[0], time, function () {
                $(this).hide().prev().show();
                $(this).prev().animate(opts[1], time / 2);
            });
        });
    }

    var lilOpts = [{'width': 0}, {'width': '216px'}];
    turn($("#case li"), 150, lilOpts);


    //2.2 点击div注册事件，放大这张图片  鼠标点击放大图，或者鼠标离开放大图，放大效果消失
    //2.2.1 点击div注册事件，放大这张图片  鼠标点击放大图
    $(".vertical .info").click(function () {
        $(this).parent().next().css("display", "block");
    });
    //2.2.2 鼠标点击放大图，或者鼠标离开放大图，放大效果消失
    $(".vertical li").on("click mouseleave", ".caseImg2", function () {
        $(this).css("display", "none");
    });

    //2.3 ourcase 动画
    //获取case的上面高度
    var caseTop = $("#case").offset().top;
    //当页面滚动到#case,img出现
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop < caseTop) {
            $("#case .ourcase").animate({
                "width": "539px"
            }, 1200);
        }
    });



 


//八版模块
function dongtai(){
    var dv1=my$("dv1");
    var hct1=my$("hct1");
    var a1=my$("a1")
    a1.onmouseover=function(){
        animate(hct1,{"top":-50})
        animate(dv1,{"marginTop":-40})
    };
    a1.onmouseout=function(){
        animate(hct1,{"top":0})
        animate(dv1,{"marginTop":-20})
    };
    var dv2=my$("dv2");
    var hct2=my$("hct2");
    var a2=my$("a2");
    a2.onmouseover=function(){
        animate(hct2,{"top":-50})
        animate(dv2,{"marginTop":-40})
    };
    a2.onmouseout=function(){
        animate(hct2,{"top":0})
        animate(dv2,{"marginTop":-20})
    };
    var dv3=my$("dv3");
    var hct3=my$("hct3");
    var a3=my$("a3");
    a3.onmouseover=function(){
        animate(hct3,{"top":-50})
        animate(dv3,{"marginTop":-40})
    };
    a3.onmouseout=function(){
        animate(hct3,{"top":0})
        animate(dv3,{"marginTop":-20})
    };
    var dv4=my$("dv4");
    var hct4=my$("hct4");
    var a4=my$("a4");
    a4.onmouseover=function(){
        animate(hct4,{"top":-50})
        animate(dv4,{"marginTop":-40})
    };
    a4.onmouseout=function(){
        animate(hct4,{"top":0})
        animate(dv4,{"marginTop":-20})
    };
    var dv5=my$("dv5");
    var hct5=my$("hct5");
    var a5=my$("a5");
    a5.onmouseover=function(){
        animate(hct5,{"top":-50})
        animate(dv5,{"marginTop":-40})
    };
    a5.onmouseout=function(){
        animate(hct5,{"top":0})
        animate(dv5,{"marginTop":-20})
    };
    var dv6=my$("dv6");
    var hct6=my$("hct6");
    var a6=my$("a6");
    a6.onmouseover=function(){
        animate(hct6,{"top":-50})
        animate(dv6,{"marginTop":-40})
    };
    a6.onmouseout=function(){
        animate(hct6,{"top":0})
        animate(dv6,{"marginTop":-20})
    };
    var dv7=my$("dv7");
    var hct7=my$("hct7");
    var a7=my$("a7");
    a7.onmouseover=function(){
        animate(hct7,{"top":-50})
        animate(dv7,{"marginTop":-40})
    };
    a7.onmouseout=function(){
        animate(hct7,{"top":0})
        animate(dv7,{"marginTop":-20})
    };
    var dv8=my$("dv8");
    var hct8=my$("hct8");
    var a8=my$("a8");
    a8.onmouseover=function(){
        animate(hct8,{"top":-50})
        animate(dv8,{"marginTop":-40})
    };
    a8.onmouseout=function(){
        animate(hct8,{"top":0})
        animate(dv8,{"marginTop":-20})
    };
}
dongtai();




  //function setOpacity(){
  //      var discoverObj = my$("case");
  //      discoverObj = setInterval(function() {
  //        animate(discoverObj,{'opacity':0.2},function(){
  //          animate(discoverObj,{"opacity":1});
  //            console.log(discoverObj);
  //        })
  //      },100);
  //    }
  //
  //  setOpacity();






};



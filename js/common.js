/*弹出菜单*/
$(function(){
  $("#top-sf").bind("mouseover",function(){
    $("#sf-app").removeClass("hide");
    $(".gai").addClass("bggai");
  });
  $("#top-sf").bind("mouseout",function(){
    $("#sf-app").addClass("hide");
    $(".gai").removeClass("bggai");
  });
  $("#guide").bind("mouseover",function(){
    $("#guide-pop").removeClass("hide");
    $(".gai").addClass("bggai");
  });
  $("#guide").bind("mouseout",function(){
    $("#guide-pop").addClass("hide");
    $(".gai").removeClass("bggai");
  });
  $("i").css("display","none");
  $("#sc").bind("mouseover",function(){
    $(".pop-sc").removeClass("hide");
    $(".myshop").css("border-bottom-color","transparent");
    $(".i1").css("display","block");
  });
  $("#sc").bind("mouseout",function(){
    $(".pop-sc").addClass("hide");
    $(".myshop").css("border-bottom-color","#e5e5e5");
    $(".i1").css("display","none");
  });
  $("#shop").css("background","none");
  $("#shop").bind("mouseover",function(){
    $(".pop-shop").removeClass("hide");
    $("#sc").addClass("bggai");
    $(".i2").css("display","block");
  });
  $("#shop").bind("mouseout",function(){
    $(".pop-shop").addClass("hide");
    $("#sc").removeClass("bggai");
    $(".i2").css("display","none");
  });
  $(".pop-jcpd").hide();
  $(".navbar-main li:last-child").bind("mouseover",function(){
    $(".pop-jcpd").show();
  });
  $(".navbar-main li:last-child").bind("mouseout",function(){
    $(".pop-jcpd").hide();
  });
  $(".pop-side-item").hide();
  $(".side-item").hover(function(){
    $(this).children().filter(":last-child").show();
  },function(){
    $(this).children().filter(":last-child").hide();
  });
  $(".app-pop").hide();
  $(".app").hover(function(){
    $(".app-pop").show();
  },function(){
    $(".app-pop").hide();
  });

});
/*轮播图*/
$(function(){
  //二维码
  var c=$(".guanzhu .ec-list li").length;//总共有多少图
  $(".guanzhu .ec-list li:not(:first-child)").hide();//隐藏其他元素
  $(".guanzhu .ec-nav span").mouseover(function(){
    var i=$(this).index();//获取.ec-nav中span的索引
    if(i>=c) return 0;
    $(".guanzhu .ec-list li").filter(":visible").fadeOut(500).parent().children().eq(i).fadeIn(1000);
    $(this).toggleClass("current");
    $(this).siblings().removeAttr("class");
  });
});
var timer=n= 0,count;
var timer2=m= 0,count2;
$(function(){
  //主轮播图
  count=$(".carousel-layer ul li").length;//总共有多少图
  $(".carousel-layer ul li:not(:first-child)").hide();//隐藏其他元素
  $(".carousel-index span").bind("mouseover",function(){
    var i=$(this).index();
    n=i;
    if(i>=count) return;
    $(".carousel-layer ul li").filter(":visible").fadeOut(1000).parent().children().eq(i).fadeIn(1000);
    $(this).toggleClass("on");
    $(this).siblings().removeAttr("class");
  });
  timer=setInterval("showAuto()",3000);
  $(".carousel-layer ul li").hover(function(){
   clearInterval(timer);
   }, function(){
   timer = setInterval("showAuto()",3000);
   });

  //中间的轮播广告
  count2=$(".ad-layer ul li").length;
  $(".ad-layer ul li:not(:first-child)").hide();
  $(".ad-index span").mouseover(function(){
    var j=$(this).index();
    m=j;
    if(j>=count2) return;
    $(".ad-layer ul li").filter(":visible").fadeOut(2000).parent().children().eq(j).fadeIn(2000);
    $(this).toggleClass("ad-index-on");
    $(this).siblings().removeAttr("class");
  });
  timer2=setInterval("showAuto2()",3000);
  $(".ad-layer ul li").hover(function(){
    clearInterval(timer2);
  }, function(){
    timer2 = setInterval("showAuto2()",3000);
  });
});
function showAuto(){
  n=n>=(count-1)?0:++n;
  $(".carousel-index span").eq(n).trigger('mouseover');
}
function showAuto2(){
  m=m>=(count2-1)?0:++m;
  $(".ad-index span").eq(m).trigger('mouseover');
}

/*公告&评测*/
$(function(){
  $(".advertise ul li").eq(1).bind("mouseover",function(){
    $(".ad-pop").show();
    $(".ad-pop-advertise").hide();
    $(this).addClass("ad-on");
    $(".advertise ul li").eq(0).removeClass("ad-on");
  });
  $(".advertise ul li").eq(0).bind("mouseover",function(){
    $(".ad-pop").hide();
    $(".ad-pop-advertise").show();
    $(this).addClass("ad-on");
    $(".advertise ul li").eq(1).removeClass("ad-on");
  });
});



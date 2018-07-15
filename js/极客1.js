document.onreadystatechange=function(){
				if(document.readyState=="complete"){
					$(".loading").fadeOut();
				}
			}



$(document).ready(function(){
//	菜单
	$(".nav .list li").hover(function(){
		$(this).find(".down").stop().slideDown(300);
	},function(){
		$(this).find(".down").stop().slideUp(300);
	});
	
	
	
//	轮播图
	//手动控制轮播图
	$(".img li").eq(0).show();
	$(".num li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$(".img li").eq(index).fadeIn().siblings().fadeOut();
	})
	
	//自动控制
	var i=0;
	var t=setInterval(move,4500);
	function move(){
		i++;
//		alert(i);
        if(i==2){
        	i=0;
        }
        $(".num li").eq(i).addClass('active').siblings().removeClass("active");
        $(".img li").eq(i).fadeIn().siblings().fadeOut();
	}
	
	function moveL(){
		i--;
//		alert(i);
        if(i==-1){
        	i=1;
        }
        $(".num li").eq(i).addClass('active').siblings().removeClass("active");
        $(".img li").eq(i).fadeIn().siblings().fadeOut();
	}
	
	$(".content-1").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(move,4500);
	})
     
    //按钮控制
    $(".content-1 .left").click(function(){
    	moveL();
    });
    $(".content-1 .right").click(function(){
    	move();
    })
});

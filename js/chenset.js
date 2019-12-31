$.fn.extend({
    lunBo:function(spanbox,left,right,inth,outth){
        var chanone = outth||"#fff";//改变前颜色
        var chantwo = inth||"#f00";//改变后颜色
        var $i = 0;//设置变量
        var $wid = this.width();//获取第一张宽度
        var $box=this.parent();//获取父级盒子
        var time;//创建定时器名字
        var key = false;//创建锁
        function move(){
            if($i ==  $box.children().length){
                $box.css({left:"0"});
                $i = 1;//如果滚动到最后一张(新的第一张)时,轮播回第二张  并把变量调回第一张
                       //执行动画之后就会有从第一张滚动到二张的感觉
            }
            if($i == -1){//如果是第一张并单击左箭头 那就直接滚动到最后一张
                $i=$box.children().length-2;
                $box.css({left:1+$i*-$wid});
            }
            $box.stop().animate({left:$i*-$wid},400);//动画滚动
            //执行span原点的动画
            spanbox.children().css({backgroundColor:chanone}).eq($i).css({backgroundColor:chantwo});
            console.log($i)
            //如果是最后一张(新的第一张)让第一个原点变色
            if($i == $box.children().length-1){
                spanbox.children().css({backgroundColor:chanone}).eq(0).css({backgroundColor:chantwo});
                console.log($i)
            }
        }
        function timer(){
            time = setInterval(function(){
                $i++;move();//自增并执行动画
            },3000);
        }
        timer();
        right.click(function(){
            $i++;
            move();
            clearInterval(time);//清除定时器
            timer();//重新执行定时器 防止定时器与单击冲突  一次跳转两个图片
        })
        left.click(function(){
            $i--;
            move();
            clearInterval(time);//清除定时器
            timer();//重新执行定时器 防止定时器与单击冲突  一次跳转两个图片
        })
        $box.hover(function(){
            console.log("滑入")
            clearInterval(time);//滑入清除定时器
        },function(){
            console.log("滑出")
            timer();//滑出执行定时器函数
        })
        spanbox.children().click(function(){
            $i=$(this).index();
            move();
            clearInterval(time);
            timer();
        })
        return $(this)
    },
     erji:function(ul){
        this.hover(function(){
            ul.eq($(this).index()).stop(false, false).slideToggle();
        })
    }
})
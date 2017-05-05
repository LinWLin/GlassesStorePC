/****************楼层效果Begin****************/

//楼层指示灯 
$("#floor_nav>ul").delegate("li","mouseover",function(){
  $(this).find(".floor_pcl").addClass("hover");
});
$("#floor_nav>ul").delegate("li","mouseout",function(){
  $(this).find(".floor_pcl").removeClass("hover");
});

// 楼层点击效果
$("a[href*='#']").bind("click", function(e){
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
  }, 1000);
  e.preventDefault();
});

/****************楼层效果End****************/



// 导航栏 移入显示 移出隐藏 首页不可用
/*$(".nav_main div.lf").delegate("div","mouseover",function(){
  $(".g_assortment").css("display","block");
  $(".g_stm_hd>a").attr("class","focus");
});
$(".nav_main div.lf").delegate("div","mouseout",function(){
  $(".g_assortment").css("display","none");
  $(".g_stm_hd>a").removeAttr("class");
});*/

// 导航栏 分类
$(".g_assortment .g_box").delegate("li",'mouseover',function(){
  $(this).children().next().css("display","block");
});
$(".g_assortment .g_box").delegate("li",'mouseout',function(){
  $(this).children().next().css("display","none");
});

$('#s_info_tab li').mouseover(function(){
  $(this).addClass('hover').siblings("li").removeClass();
  $('.s_info_new>.info_ctn_new').css('display','none').eq($(this).index()).css('display','block');
});   




/************************banner动画轮播js代码开始**************************************/

var i=0;
var timer=null;

var bWidth=window.screen.width;
$('#b_imgs li').css({"width":bWidth,"height":"500px"});
for (var j = 0; j < $('#b_imgs li').length; j++) {  //创建圆点
  $('#imgs_index').append('<li></li>')
}
$('#imgs_index li').first().addClass('active'); //给第一个圆点添加样式

var firstimg=$('#b_imgs li').first().clone(); //复制第一张图片
//将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
$('#b_imgs').append(firstimg).width($('#b_imgs li').length*($('#b_imgs li').width()));


// 下一个按钮
/*$('.next').click(function(){
  i++;
  if (i==$('#b_imgs li').length) {
    i=1; //这里不是i=0
    $('#b_imgs').css({left:0}); //保证无缝轮播，设置left值
  };

  $('#b_imgs').stop().animate({left:-i*600},300);
  if (i==$('#b_imgs li').length-1) {   //设置小圆点指示
    $('#imgs_index li').eq(0).addClass('active').siblings().removeClass('active');
  }else{
    $('#imgs_index li').eq(i).addClass('active').siblings().removeClass('active');
  }
    
})*/

// 上一个按钮
/*$('.prev').click(function(){
  i--;
  if (i==-1) {
    i=$('#b_imgs li').length-2;
    $('#b_imgs').css({left:-($('#b_imgs li').length-1)*600});
  }
  $('#b_imgs').stop().animate({left:-i*600},300);
  $('#imgs_index li').eq(i).addClass('active').siblings().removeClass('active');
})*/

//设置按钮的显示和隐藏
/*$('.banner').hover(function(){
  $('.btn').show();
},function(){
  $('.btn').hide();
})*/

//鼠标划入圆点
$('#imgs_index li').mouseover(function(){
  var _index=$(this).index();
  $('#b_imgs').stop().animate({left:-_index*bWidth},1000);
  $('#imgs_index li').eq(_index).addClass('active').siblings().removeClass('active');
})

//定时器自动播放
timer=setInterval(function(){
  i++;
  if (i==$('#b_imgs li').length) {
    i=1;
    $('#b_imgs').css({left:0});
  };

  $('#b_imgs').stop().animate({left:-i*bWidth},1000);
  if (i==$('#b_imgs li').length-1) { 
    $('#imgs_index li').eq(0).addClass('active').siblings().removeClass('active');
  }else{
    $('#imgs_index li').eq(i).addClass('active').siblings().removeClass('active');
  }
},6000)

//鼠标移入，暂停自动播放，移出，开始自动播放
$('.banner').hover(
	function(){ 
  		clearInterval(timer);
	},
	function(){
  		timer=setInterval(function(){
  			i++;
  			if (i==$('#b_imgs').length) {
    			i=1;
    			$('#b_imgs').css({left:0});
  			};

  			$('.img').stop().animate({left:-i*bWidth},1000);
  			if (i==$('#b_imgs li').length-1) { 
    			$('#b_imgs li').eq(0).addClass('active').siblings().removeClass('active');
  			}else{
    			$('#b_imgs li').eq(i).addClass('active').siblings().removeClass('active');
  			}
		},6000)
	}
);

/*****************************banner动画轮播js代码结束*********************************/




/**************************************************详情页放大镜效果*****************************************/

//移入放大镜正常图片显示容器时 滑块显示  放大镜容器显示
$(".detail_img").delegate("a","mouseover",function(){
  $(this).find(".zoomPup").css("display","block");
  $(this).find(".zoomWindow").css("display","block");
});
//移入放大镜正常图片显示容器时 滑块隐藏  放大镜容器隐藏
$(".detail_img").delegate("a","mouseout",function(){
  $(this).find(".zoomPup").removeAttr("style");
  $(this).find(".zoomWindow").removeAttr("style");
});

$(".detail_img").delegate("a","mousemove",function(e){
  //获取正常图片容器
  var $imgCon = $(this).find(".zoomPad");

  //获取正常图片和放大图片的比例
  var multiple = $(this).find(".zoomWindow").width() / $(this).find(".zoomPup").width();

  //滑块的left值=获取鼠标的X坐标值-当前元素距离网页左侧的距离-滑块宽度的一半
  var _left = e.pageX - $(this).offset().left - $(this).find(".zoomPup").width()/2;

  //滑块的top值=获取鼠标的Y坐标值-当前元素距离网页顶部的距离-滑块高度的一半
  var _top = e.pageY - $(this).offset().top - $(this).find(".zoomPup").height()/2;

  //获取滑块最大left值
  var Max_left = $(this).find(".zoomPad").width()-$(this).find(".zoomPup").width();

  //获取滑块最大top值
  var Max_top = $(this).find(".zoomPad").height()-$(this).find(".zoomPup").height();
  
  //如果当前left值大于0，left值不变，否则为0 
  _left = _left > 0 ? _left : 0;

  //如果当前left值小于滑块最大left值，left值不变，否则为最大left值
  _left = _left < Max_left ? _left : Max_left;

  //如果当前top值大于0，top值不变，否则为0 
  _top = _top > 0 ? _top : 0;

  //如果当前top值小于滑块最大top值，top值不变，否则为最大top值
  _top = _top < Max_top ? _top : Max_top; 

  $(this).find(".zoomPup").css({left:_left+'px',top:_top+'px'});        
  $(this).find(".zoomWrapperImage").children().css({position:"absolute",left:-multiple*_left+'px',top:-multiple*_top+'px'});
});

$("#divShowImg ul").delegate("a","click",function(){
  $(this).addClass("zoomThumbActive").parent().siblings('li').children('a').removeClass("zoomThumbActive");
  var imgsrc=$(this).children('img').attr("src");
  var img_color=$(this).parent().attr("data-imgColor");
  console.log(img_color);
  $(".showimg[data-imgColor="+img_color+"] .simg").attr("src",imgsrc);
  $(".showimg[data-imgColor="+img_color+"] .zoomWrapperImage>img").attr("src",imgsrc);
});


// 点击产品颜色，显示相应的内容图片
$(".skuchoose").delegate("li","click",function(){
  $(this).addClass("focus").siblings().removeClass("focus");
  var imgColor=$(this).attr('data-imgColor');
  $(".spec-top-title").html($(this).attr('data-prdInfo'))
  $("#SpancrumbsGodsName").html($(this).attr('data-prdInfo'))
  $(".smallimg li[data-imgColor="+imgColor+"]").removeAttr("style");
  $(".smallimg li[data-imgColor!="+imgColor+"]").css("display","none");
  $(".showimg[data-imgColor="+imgColor+"]").css("display","block").siblings("a").css("display","none");
});

/******************************************************************************************************/



/********************详情页选择优惠套餐模块*******************/

$(".good-ull").delegate("li:not(.lihead)","click",function(){
  var nowSrc=$(this).data("img");
  $(this).addClass("sele").siblings().removeClass("sele");
  $(".deflens img").attr("src",nowSrc);
});

/************************************************************/



/**************************首页门店展示模块最新评论自定义滚动条***********************************/

(function(win, doc, $){
  // 定义的滚动条的构造函数
  function CusScrollBar(options) {
    // 函数的调用
    this._init(options);
  }
  // 对象的合并
  $.extend(CusScrollBar.prototype, {
    _init: function(options){
      // 闭包
      var self = this;
      // 初始化参数
      self.options = {
        scrollDir: 'Y', //滚动的方向
        contentSelector: '', //滚动内容区选择器
        barSelector: '', //滚动条选择器
        sliderSelector: '', //滚动滑块选择器
        wheelStep: 10, //滚动步长（鼠标移动一下，内容滚动的幅度）
        tabItemSelector: '', //标题选择器
        tabActiveClass: '', //选中标签类名,注意这里没有类名的.
        anchorSelector: ''//锚点选择器

        //每一篇内容不足以撑开可视区域的内容的话，那么点击tab的话
        // 那么那就还会定位不对的地方，此时我们可以通过css设置为min-height：100%;来解决这个问题
      }
      // 覆盖参数
      $.extend(true, self.options, options||{});
      self._initDomEvent();
      return self;
    },

    /**
     * 初始化DOM引用
     * @method _initDomEvent
     * @return {CusScrollBar}
     */
     _initDomEvent: function() {
      var opts = this.options;
      // 滚动内容区对象，必填项
      this.$cont = $(opts.contentSelector);
      // 滚动条滑块对象，必须项
      this.$slider = $(opts.sliderSelector);
      // 滚动条对象
      this.$bar = opts.barSelector ? $(opts.barSelector) : self.$slider.parent();
      // 标签项
      this.$tabItem = $(opts.tabItemSelector);
      //锚点项
      this.$anchor = $(opts.anchorSelector);
      // 获取文档对象
      this.$doc = $(doc);
      this._initSliderDragEvent();
      this._bindContentScroll();
      this._bindMousewheel();
      this._initTabEvent();
      this._initSliderHeight();

     },
     // 根据内容来定义滑块的高度
     _initSliderHeight: function() {
      // 滑块的高=（滚动内容的高/滚动内容可显示的高）*滚动条对像的高
      var rate = this.$cont.height()/this.$cont[0].scrollHeight;
      console.log(this.$cont[0].scrollHeight);
      var sliderHeight = rate*this.$bar.height();
      this.$slider.css('height',sliderHeight);
     },
     /**
      * 初始化标签切换功能
      * @return {[Object]} [this]
      */

    _initTabEvent: function() {
      var self = this;
      self.$tabItem.on('click',function(e){
        e.preventDefault();
        var index = $(this).index();
        self.changeTabSelect(index);
      // 点击锚点，滚到对应的内容：已经滚出可视区的内容高度+指定锚点与内容容器的距离
          self.scrollTo(self.$cont[0].scrollTop + self.getAnchorPosition(index));
          //scrollTo是设置$cont的位置的函数

      })
      return self;
    },
    // 切换标签的选中
    changeTabSelect: function(index){
      var self = this,
      active = self.options.tabActiveClass;
      //切换标签选中
      self.$tabItem.eq(index).addClass(active).siblings().removeClass(active);
    },
    // 获取锚点内容与上边界的像素数(锚点h3)
    getAnchorPosition: function(index) {
      return this.$anchor.eq(index).position().top;
    },
    // 获取每个锚点位置信息的数组
    getAllAnchorPosition: function() {
      var self = this,
          allPositonArr = [];
      for (var i = 0; i < self.$anchor.length; i++) {
         allPositonArr.push(self.$cont[0].scrollTop + self.getAnchorPosition(i))
      }
      return allPositonArr;
    },
     /**
      * 初始化滑块拖动功能
      * @return {[Object]} [this]
      */
    _initSliderDragEvent: function() {
      var self = this;
      // 滑块元素
      var slider = this.$slider,
          sliderEl = slider[0];
      // 如果元素存在
      if (sliderEl) {
        var doc = this.$doc,
            dragStartPagePostion,
            dragStartScrollPostion,
            dragContBarRate;
        function mousemoveHandler(e) {
          e.preventDefault();
          if (dragStartPagePostion == null) {
            return;
          }
          //内容开始卷曲的高度+rate*(鼠标释放的位置-开始的位置) == 就是内容滑动的位置
          self.scrollTo(dragStartScrollPostion + (e.pageY - dragStartPagePostion)*dragContBarRate);
        }
        slider.on('mousedown', function(e){
          e.preventDefault();
          // 获取鼠标的点击的开始位置
          dragStartPagePostion = e.pageY;
          // 获取内容区域的向上卷区的高度
          dragStartScrollPostion = self.$cont[0].scrollTop;
          dragContBarRate = self.getMaxScrollPosition()/self.getMaxSliderPosition();
          // 监听的document对象
          doc.on('mousemove.scroll', mousemoveHandler).on('mouseup.scroll',function(){
            doc.off('.scroll');
          });
        });
        return self;
      }
    },
    // 计算滑块的当前位置
    getSliderPosition: function() {
      var self = this,
      // 滑块可以移动的距离
          maxSliderPosition = self.getMaxSliderPosition();
          // 滑块移动的距离
      return Math.min(maxSliderPosition, maxSliderPosition*self.$cont[0].scrollTop/self.getMaxScrollPosition());
    },
    // 内容可滚动的高度
    getMaxScrollPosition: function() {
      var self = this;
      return Math.max(self.$cont.height(), self.$cont[0].scrollHeight) - self.$cont.height();
    
    },
    //滑块可移动的距离
    getMaxSliderPosition: function(){
      var self = this;
      return self.$bar.height() - self.$slider.height();
    },
    // 监听内容的滚动，同步滑块的位置
    _bindContentScroll: function() {
      var self = this;
      self.$cont.on('scroll', function(){
        var sliderEl = self.$slider && self.$slider[0];
        if (sliderEl) {
          // 设置滑块的位置
          sliderEl.style.top = self.getSliderPosition() + 'px';
        }
      });
      return self;
    },
    // 鼠标滚轮事件
    _bindMousewheel: function() {
      var self = this;
      // on监听事件，多个事件利用空格分开
      self.$cont.on('mousewheel DOMMouseScroll',function(e){
        e.preventDefault();
        // 判断原生事件对象的属性
        var oEv = e.originalEvent,
        //原生事件对象,（其他浏览器负数向下，firefox正数向下,所以在wheelDelta前面有负数）
        // 想要达到的效果，鼠标向下滚动，内容向走
            wheelRange = oEv.wheelDelta ? -oEv.wheelDelta/120 : (oEv.detail || 0)/3;
            // 调用scrollTo方法。
            self.scrollTo(self.$cont[0].scrollTop + wheelRange*self.options.wheelStep)
      });
    },
    // 内容的滑动
    scrollTo: function(positonVal) {
      var self = this;
      // 获取锚点的位置的数组
      var posArr = self.getAllAnchorPosition();
        len = posArr.length;
    
      function getIndex(positonVal) {
        // 判滑动到那个锚点的位置
        for (var i = len-1; i >= 0; i--) {
          if (positonVal >= posArr[i]) {
            // 判断条件，当scrolltop的值大于锚点定位的位置，则表示内容在那个锚点范围里面。
            return i;
          }
        }
      }
      // 锚点数与标签数相同
      if (posArr.length === self.$tabItem.length) {
        // 标签选择事件
        self.changeTabSelect(getIndex(positonVal));
      }
      self.$cont.scrollTop(positonVal);
    }
  });

  win.CusScrollBar = CusScrollBar;
})(window,document,jQuery)

new CusScrollBar({
      contentSelector: '.info_md_cnt', //滚动内容区选择器
      barSelector: '.scroll-bar', //滚动条选择器
      sliderSelector: '.scroll-slider' //滚动滑块选择器
});

/*********************************************************************************************/


/**************首页产品大图移入显示模态框效果************/
$(".spike_lf").mouseover(function(){
  $(this).find(".spike-modal").css("display","block");
})
$(".spike_lf").mouseout(function(){
  $(this).find(".spike-modal").css("display","none");
})

$(".spike_rt").mouseover(function(){
  $(this).find(".spike-modal").css("display","block");
})
$(".spike_rt").mouseout(function(){
  $(this).find(".spike-modal").css("display","none");
})

$(".cont_mote").mouseover(function(){
  $(this).find(".spike-modal").css("display","block");
})
$(".cont_mote").mouseout(function(){
  $(this).find(".spike-modal").css("display","none");
})

/******************************************************/


/*********** 门店在展示轮播图 *************/

$(function(){
  var _index=0
  var timer=null;

  function show(a){
    for(var i=0;i<$(".stores-imgs li").length;i++){
      $(".stores-imgs li")[i].className="";
      $(".stores-imgs li")[a].className="stores-showImg";
    }
    for(var i=0;i<$(".stores-minImgs li").length;i++){
      $(".stores-minImgs li")[i].className="";
      $(".stores-minImgs li")[a].className="minImg-hover";
    }
  }

  for(var i=0;i<$(".stores-minImgs li").length;i++){
    $(".stores-minImgs li")[i].index=i;
    $(".stores-minImgs li")[i].onmouseover=function(){
      show(this.index);
    }
  }

  function autoPlay(){
    timer=setInterval(function(){
      _index++;
      _index>=$(".stores-imgs li").length&&(_index=0);
      show(_index);
    },5000);
  }
  autoPlay();

  $(".s_stores_ctn").mouseover(function(){clearInterval(timer)})
  $(".s_stores_ctn").mouseout(function(){autoPlay()})
})

/*****************************************/

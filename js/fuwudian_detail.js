// 百度地图API功能
    var map = new BMap.Map('shopmap');
    var point = new BMap.Point(120.256152,30.315155);
    map.centerAndZoom(point, 5);
    map.addControl(new BMap.NavigationControl());

   
    var content = '<div class="info-detail">' +
                    '<p><span>门店地址：</span>江干区德胜快速路与红普路交叉口处</p>'+
                    '<p><span>工作时间：</span>8:45-17:45</p>'+
                    '<p><span>服务电话：</span><a href="http://www.baidu.com">18305627585</a></p>'+
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "杭州战神科技有限公司",      //标题
			width  : 300,             //宽度
			height : 78,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(point); //创建marker对象
    marker.enableDragging(); //marker可拖拽
	marker.addEventListener("click", function(e){
		searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker


    $(function(){
    	searchInfoWindow.open(marker);
    	$(".BMapLib_sendToPhone").remove();
    })



 $(window).scroll(function() { 
  // 获得网页被卷起的高
  var divTop=document.body.scrollTop||document.documentElement.scrollTop;

  // 获得距离网页顶部的距离offset().top
  

  if(divTop>=$(".findStore").offset().top){
  	$(".findStore .right").css({"position":"fixed","top":"0px","right":"111px"});
  }else{
  	$(".findStore .right").css({"position":"inherit","top":"0px","right":"111px"});
  }
});


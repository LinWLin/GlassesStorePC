$(".filter_products>ul").delegate("li","mouseover",function(){
	$(this).addClass("cell-hover").children('.bookingtoshop').css("display","block");
});
$(".filter_products>ul").delegate("li","mouseout",function(){
	$(this).removeClass("cell-hover").children('.bookingtoshop').css("display","none");
});


$(".gc-switchable").delegate("b","click",function(){
	$(this).addClass("bcolor-select").siblings().removeClass("bcolor-select");
	var $src=$(this).children("img").attr("src");
	$(this).parent().parent().parent().prev().find("img").attr("src",$src);
});

$(".body>dl").delegate("dt","click",function(){
	if($(this).hasClass("current")){
		$(this).removeClass("current").next().slideUp("slow");
	}else{
		$(this).addClass("current")/*.siblings().removeClass("current")*/;
		$(this).next().slideDown("slow");
	};
});

$(".property_value>ul").delegate("li","click",function(){
	var $cont=$(this).text();
	var $prev_cont=$(this).parent().parent().prev().text();
	$(".filter_items>ul").append('<li><span>'+$prev_cont+'</span>：'+$cont+'<i></i></li>');
	$(this).parent().parent().parent().css("display","none");
});


$(".filter_items>ul").delegate("i","click",function(){
	$(this).parent().remove();
	var cont=$(this).prev().text();
	var c_name=$(".property_name");
	for(var i=0;i<c_name.length;i++){
		if(c_name[i].innerHTML==cont){
			c_name[i].parentNode.style.display="block";
			break;
		}
	}
});


$(".attrExtra-more").click(function(){
	var addEnt=$(".filter_property>div.my_filter_property:last-child()");
	var styleDiv=addEnt.css("display");
	console.log(styleDiv);
	if(styleDiv=='block'){
		addEnt.css("display","none");
		$(this).text("更多选项");
	}else{
		addEnt.css("display","block");
		$(this).text("精简选项");
	}
});


$(".gc-next").mouseover(function(){
	// $(".gc-prev").attr('disabled',"true");
	var p_left=$(this).prev().find(".gc-switchable").css("left");
	if(p_left=='0px'){
		$(this).addClass("gc-next-hover");
	}
	
});
$(".gc-next").mouseout(function(){
	
	$(this).removeClass("gc-next-hover");
});

$(".gc-prev").mouseover(function(){
	var n_left=$(this).next().find(".gc-switchable").css("left");
	if(n_left=='-185px'){
		$(this).addClass("gc-prev-hover");
	}
});
$(".gc-prev").mouseout(function(){
	$(this).removeClass("gc-prev-hover");
});

$(".gc-next").click(function(){
	$(this).prev().find(".gc-switchable").animate({left: '-185px'}, "slow");
	$(".gc-prev").attr('disabled',"true");
});
$(".gc-prev").click(function(){
	$(this).next().find(".gc-switchable").animate({left: '0px'}, "slow");
});


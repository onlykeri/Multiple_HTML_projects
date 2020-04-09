// JavaScript Document
//定义object的x、y坐标的最大值和最小值
var y_top = 0;
var y_bottom = 0;
var x_left = 0;
var x_right =0;
//设置object最大和最小宽度
var img_width_max=80;
var img_width_min =10;
function init(){//获取满天星
	
	//设置网页背景色
	document.body.bgColor="#000";
	//获取object在可视区域的最大的宽度和高度
	 x_right = window.innerWidth-img_width_max;
	 y_bottom = window.innerHeight-img_width_max;
	//定时器：每1秒执行1次
	setInterval("start()",3000);
}
function start(){//随机输出object
	//创建img节点
	var node_img = document.createElement("img");
	//在body中增加img标签
	document.body.appendChild(node_img);
	//为img节点增加src属性，并赋值
	node_img.setAttribute("src","image/foot.ico");
	

	//随机获取object的宽度
	var width = getRandom(img_width_max,img_width_min);
	//随机获取星星在可视区域的x和y坐标
	var x = getRandom(x_left,x_right);
	var y = getRandom(y_top,y_bottom);
	//为object设计css样式
	var str = "position:absolute;width:"+width+"px;top:"+y+"px;left:"+x+"px;";
	node_img.setAttribute("style",str);
	node_img.setAttribute("onclick","removeImg(this)");//当点击object时,object消失
}
function getRandom(max1,min1){//随机获取数值
	return Math.floor(Math.random()*(max1 - min1)+min1);
}
function removeImg(obj){//消object
	document.body.removeChild(obj) ;
}


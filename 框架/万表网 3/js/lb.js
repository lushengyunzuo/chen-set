	function startMove(obj,json,fnEnd) {//多物体运动框架
		clearInterval(obj.time);
		obj.time = setInterval(function (){
			var speed = 0,style = 0,stop = true;
			for (attr in json) {
				if (attr == 'opacity') {
					style = parseFloat(getStyle(obj,attr))*100;
					speed = (json[attr] -style)/10;
				}else{
					style = parseInt(getStyle(obj,attr));
					speed = (json[attr] -style)/5
				}
			
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (style != json[attr]) {
					stop = false;//如果有没到终点的样式 stop设为false
				}
				if (attr=='opacity') {
					obj.style.opacity = (style+speed)/100;
					obj.style.filter = "alpha(opacity = "+(style+speed)+")";
				}else{
					obj.style[attr]= style+speed+'px';
				}
			}
			if (stop) {
				clearInterval(obj.time);
				if (fnEnd) fnEnd();
			}
		},50)
	}
	function getStyle(obj,cur){
		if(obj.currentStyle){
			return obj.currentStyle[cur];
		}else{
			return getComputedStyle(obj,false)[cur];
		}
	}
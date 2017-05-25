function bufferMove(obj, json, fnsucc) {

	if(obj.timer) {
		clearInterval(obj.timer)
	}
	obj.timer = setInterval(function() {
		var onoff = true; //开关
		var aint = 0;
		for(var attr in json) {
			var iCur = 0;

			if(attr == "opacity") {

				iCur = parseInt(parseFloat(getStyle(obj, attr)) * 100)
			} else {
				iCur = parseInt(getStyle(obj, attr))
			}

			var speed = (json[attr] - iCur)/8 ;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			
			aint=iCur + speed
			if(iCur != json[attr]) {
				onoff = false;
			}
			if(attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (aint) + ')';
				obj.style.opacity = (aint) / 100;
			} else {
				obj.style[attr] = aint + 'px';
			}

		}

		if(onoff == true) {
			clearInterval(obj.timer);
			
			if(fnsucc) { fnsucc() };
		}

	},30)
}

//只能单一方向的滑动
function flexMove(obj, target, attr) {

	var speed = 0;
	
	var left = 0; //变量可以存储小数
	clearInterval(obj.timer)
	obj.timer = setInterval(function() {
		var iCur = 0;
		iCur = parseInt(getStyle(obj, attr))
		
		speed += ( target-iCur ) / 5;
		speed *= 0.7

		left = iCur+speed
		if(Math.abs(iCur - target) <= 1 && Math.abs(speed) <= 1) {

			clearInterval(obj.timer);
			obj.style.left = target + 'px';
			speed = 0;
			
		} else {
			obj.style.left = left + 'px';
		}

	}, 30)
}
//获取元素的样式
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		return obj.currentStyle[attr]
	} else {
		return getComputedStyle(obj, false)[attr]
	}
}
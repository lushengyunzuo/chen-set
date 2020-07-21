var hc = document.getElementById('hc');
var a = hc.getElementsByTagName('i');
var aSpan = hc.getElementsByTagName('span');



/*tab切换封装*/
tab('box1', 'cont');
function tab(title, cont) {
	var box = document.getElementById('box');
	var tabTitle = document.getElementById(title);
	var tabCont = document.getElementById(cont);
	console.log(tabTitle, tabCont);
	var arr = tabTitle.getElementsByTagName('div');
	var aDiv = tabCont.getElementsByClassName('cont');
	console.log(arr, aDiv);
	for (var i = 0; i < arr.length; i++) {
		arr[i].index = i;
		arr[i].onmouseover = function () {
			for (var x = 0; x < arr.length; x++) {
				arr[x].className = '';
				aDiv[x].style.display = 'none';
			}
			arr[this.index].className = 'act';
			aDiv[this.index].style.display = "block";
		}
		arr[i].onmouseout = function () {
			for (var x = 0; x < arr.length; x++) {
				arr[x].className = '';
				aDiv[x].style.display = 'none';
			}
		}
	}
}

// ------------------------------------

// 大图轮播
window.onload = function () {


	var oDiv = document.getElementById('outer');
	var oBtnlt = document.getElementById('btnL');
	var oBtngt = document.getElementById('btnR');
	var ulImg = document.getElementById('ulImg').getElementsByTagName('li');
	var liSmall = document.getElementById('small').getElementsByTagName('li');

	var time = null;
	var now = 0;

	// 第一步左右按钮透明度切换
	oDiv.onmouseover = function () {
		startMove(oBtnlt, { opacity: 100 });
		startMove(oBtngt, { opacity: 100 });
		clearInterval(time);
	}
	oDiv.onmouseout = function () {
		startMove(oBtnlt, { opacity: 0 });
		startMove(oBtngt, { opacity: 0 });
		time = setInterval(oBtngt.onclick, 2000);
	}
	// 第二步点击小圆按钮使大图切换
	for (var i = 0; i < liSmall.length; i++) {
		liSmall[i].index = i;
		liSmall[i].onclick = function () {
			for (var j = 0; j < liSmall.length; j++) {
				startMove(liSmall[j], { opacity: 50 });
				startMove(ulImg[j], { opacity: 0 });
			}
			startMove(ulImg[this.index], { opacity: 100 });
			startMove(this, { opacity: 100 });
			now = this.index
			// console.log(now);
		}
	}
	// 第三步左右按钮点击切换
	oBtngt.onclick = function () {/*右*/
		tab(1);
	}
	oBtnlt.onclick = function () {/*左 */
		tab(-1)
	}
	function tab(sped) {
		now += sped;
		if (now < 0) {
			now = liSmall.length - 1;
		}
		if (now > liSmall.length - 1) {
			now = 0;
		}
		for (var j = 0; j < liSmall.length; j++) {
			startMove(liSmall[j], { opacity: 50 });
			startMove(ulImg[j], { opacity: 0 });
		}
		startMove(ulImg[now], { opacity: 100 })
		startMove(liSmall[now], { opacity: 100 });
	}
	// 第四步自动轮播
	time = setInterval(oBtngt.onclick, 4000);
}
// -------------------------------------------
// 倒计时
var h1s = document.getElementsByTagName('h4');
var t1 = setInterval(function () {//创建定时器
	var sTime = new Date();//当前时间
	var eTime = new Date("2020-06-19 12:00:00");//结束时间
	var days = parseInt((eTime - sTime) / 86400000);
	var hours = parseInt(((eTime - sTime) % 86400000) / 3600000);
	var mins = parseInt((((eTime - sTime) % 86400000) % 3600000) / 60000)
	var miao = parseInt(((((eTime - sTime) % 86400000) % 3600000) % 60000) / 1000);
	h1s[1].innerHTML = days;
	h1s[2].innerHTML = hours;
	h1s[3].innerHTML = mins;
	h1s[4].innerHTML = miao;
}, 1000);

// 小型轮播图
function getId(ele) {
	return document.getElementById(ele);
}
var pin = getId("pin");
var pp = getId("pp");
var ul = pp.children[0];
var ol = pp.children[1];

var liArr = ul.getElementsByTagName("li");
var liOlArr = ol.getElementsByTagName("li");

// 第一步
var num = 0;
// 1.排序，显示当前图片和小方块
function show(idx) {
	for (var i = 0; i < liArr.length; i++) {
		// 倒叙排列
		liArr[i].style.zIndex = 10 - i;
		// 所有图片的透明度为0；
		liArr[i].style.opacity = 0;
		// 所有小方块去"cur"
		liOlArr[i].className = "";
	}
	// 当前图片的透明度为1；
	liArr[idx].style.opacity = 1;
	// 当前小方块加cur
	liOlArr[idx].className = "cur";


}
// 显示第一张
// 2.鼠标经过pin
pin.onmouseover = function () {
	clearInterval(timer);
}

// 3.鼠标移出pin
pin.onmouseout = function () {
	timer = setInterval(autoStep, 2000);
}
show(num);
// 鼠标经过小方块
for (var i = 0; i < liOlArr.length; i++) {
	liOlArr[i].index = i;
	liOlArr[i].onmouseover = function (event) {
		show(event.target.index);
	}
}




var timer = setInterval(autoStep, 2000)
function autoStep() {
	num++;
	if (num > liArr.length - 1) {
		num = 0;
	}
	show(num);
}


// 下面的第一个tab切换
tab1('dr', 'tab2')
function tab1(title, cont) {
	var box = document.getElementsByClassName('content2');
	var tabTitle = document.getElementById(title);
	var tabCont = document.getElementById(cont);
	console.log(tabTitle, tabCont);
	var arr = tabTitle.getElementsByTagName('span');
	var aDiv = tabCont.getElementsByClassName('tab2');
	console.log(arr, aDiv);
	for (var i = 0; i < arr.length; i++) {
		arr[i].index = i;
		arr[i].onmouseover = function () {
			for (var x = 0; x < arr.length; x++) {
				arr[x].className = '';
				aDiv[x].style.display = 'none';
			}
			arr[this.index].className = 'xx';
			aDiv[this.index].style.display = "block";
		}
	}
}
// 第二个tab切换
tab1('top10', 'tab3');
// 第三个tab切换
tab1('PPG', 'tab4');

// 品牌商标
var box2 = document.getElementById('box2');
var aLis = box2.children[0].children;
var Aspan = box2.getElementsByClassName('span2');
var Aimg = box2.getElementsByClassName('img2');
var orag = document.getElementsByClassName('orag');
console.log(aLis, Aspan, Aimg);
for (var i = 0; i < aLis.length; i++) {
	aLis[i].index = i;
	aLis[i].onmouseover = function () {
		for (var j = 0; j < aLis.length; j++) {
			Aspan[j].style.display = 'none';
			Aimg[j].style.display = 'block';
		}
		Aspan[this.index].style.display = 'block';
		Aimg[this.index].style.display = 'none';
	}
	aLis[i].onmouseout = function () {
		Aspan[this.index].style.display = 'none';
		Aimg[this.index].style.display = 'block';
	}

}
//侧导航
var i4 = document.getElementsByClassName("i4")[0]
i4.addEventListener("mouseover", function () {
	document.getElementById("imgq").style.display = "block"
})
i4.addEventListener("mouseout", function () {
	document.getElementById("imgq").style.display = "none"
})
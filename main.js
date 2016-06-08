var cheapfood=["大李水餃","吉野烤肉飯",
"轉角牛肉麵","師大第一腿",
"紫牛","一極拌",
"義麵麵","咖哩廚房",
"笑嘻嘻","客家粄條",
"泰大爺","坂本屋",
"滇味小廚","好米廚房",
"忠誠山東蔥油餅","泰風小館",
"韓食館","大柱子擔仔麵",
"健安雞肉飯","活大鬆軟麵包",
"宅男便當","發現義大利麵",
"唐老鴨","肯德基",
"大埔","活大滷味",
"四海遊龍","活大自助餐",
"女九滷味","JP",
"女九丼飯","摩斯",
"八方雲集","三顧茅廬",
"小幅雞肉飯","比士多",
"大一女","MR.拉麵"]

function settime(){
	var date=new Date();
	var h=date.getHours();
	var m=date.getMinutes();
　	var s=date.getSeconds();　
	if(h<10) h="0"+h;
	if(m<10) m="0"+m;
	if(s<10) s="0"+s;
	document.getElementById("nowtime").innerHTML=h+":"+m+":"+s;
	setTimeout(settime,1000);
}
function showfood(){
	var html="";
	var str1="<img src=\"food/food",str2=".jpg\" height=\"same-as-width\" width=\"23%\"></img>";
	var arr=[0,0,0,0],photo=19;
	for(var i=0;i<4;i++){
		var tmp=Math.floor(Math.random()*100000000)%photo,flag=1
		for(var j=0;j<i;j++){
			if(arr[j]==tmp){
				flag=0;
				break;
			}
		}
		if(flag) arr[i]=tmp;
		else{
			i--;
			continue;
		}
	}
	for(var i=0;i<4;i++){
		html+=str1+String(arr[i])+str2+"　";
	}
	document.getElementById("showfood").innerHTML=html;
}
function ranfood(){
	document.getElementById("st").setAttribute("onclick","");
	cntdwn(30);

}
function cntdwn(u){
	if(u==0){
		set();
		document.getElementById("st").setAttribute("onclick","ranfood()");
		return;
	}
	//document.getElementById("resultid").innerHTML=String(u);
	set();
	setTimeout(function() {
		cntdwn(u-1);
	}, 50);
}
function set(){
	var tmp=Math.floor(Math.random()*100000000)%cheapfood.length;
	$("#resultid").html(cheapfood[tmp]);
}
function submitf(){
	alert("此功能尚未開放");
}
function scroll_to_anchor(href){
	var fromtop=60;
	$('html, body').animate({ scrollTop: $(href).offset().top - fromtop });
}
function main(){
	settime();
	showfood();
	$(window).scroll(function() {
		var leftScroll = $(document).scrollLeft();
		$('#top-menu').css({'left':-leftScroll});
		
	});	
}
main();

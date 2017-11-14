
	function checkForm(){
			return  checkUser() 
					&& checkPwd() 
					&& checkEmail() 
					&& checkTel()
		}

		//验证用户名 
		function checkUser(n){
			//以字母开头  数字字母下划线组成 6到12位
			var str = n.value;
			var reg = /^[a-zA-Z]\w{5,11}$/;
			var arr = str.match(reg);
			return setStyle(arr,p1);
		}
		
		//验证密码
		function checkPwd(n){
			//要求： 数字 字母 下划线 6-12位
			var str = n.value;
			var reg = /^\w{6,12}$/;
			var arr = str.match(reg);
			return setStyle(arr,p3);
			
		}
		// 再次验证密码
		function checkPwds(k){
			var str=$('.pwd').val();
			var str1=k.value;
				if(str1==str){
					p4.innerHTML="验证成功";
					p4.style.color="green";
				}else{
					p4.innerHTML="验证失败";
					p4.style.color="red";
				}
			}
		//验证邮箱
		function checkEmail(n){
			var str = n.value;
			var reg = /^[\w-]+@[0-9a-zA-Z]+(\.[a-z]+){1,3}$/;
			var arr = str.match(reg);
			return setStyle(arr,p2);
		}
		//验证手机号码
		function checkTel(n){
			//要求：  图片
			var str = n.value;
			var reg = /^1([358][0-9]|[4][57]|[7][0135678])\d{8}$/;
			var arr = str.match(reg);
			return setStyle(arr,p5);
		}
		//设置样式 返回值
		function setStyle(arr,index){
			if(arr){
				index.innerHTML = '验证成功';
				index.style.color='green';
				return true;
			}
			index.innerHTML = '验证失败';
			index.style.color = 'red';
			return false;
		}
var myform=document.myform;
		function deng(){
			myform.action="../../zhuce.html";
		}
		function zhu(){
			myform.action="../../denglu.html";
		}
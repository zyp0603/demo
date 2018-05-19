$(function(){

    $('#loginBtn').click(function(){

        var uname = $('#log_name').val();
        var psw = $('#log_password').val();

        if(uname === '' || psw === ''){
            alert('请完整输入')
        }else{

            //从local storage中取出注册好的值
            var username = localStorage.getItem('uname');
            var sqlpsw = localStorage.getItem('password');

            if(username === uname){

                if(sqlpsw === psw){

                    //window.location.href='https://www.baidu.com';//bom跳转页面 当前页跳转
                    window.open('https://www.baidu.com');//跳转到新的页面

                }else{
                    alert('密码输入不正确')
                }

            }else{
                alert('用户名不存在');
            }
        }




    });












});





















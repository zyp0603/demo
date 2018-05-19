$(function(){

    $('#register').click(function(){

        //注册表单验证
        //取值
        var uname = $('#reg_name').val();
        var pasw1 = $('#reg_password').val();
        var pasw2 = $('#reg_repassword').val();

        //正则表达式
        var reg =  /^[A-Za-z0-9]+$/;//由数字、26个英文字母或者下划线组成的字符串

        if(uname === '' || pasw1 === '' || pasw2 === ''){
            alert('请完整输入三个值');
        }else{

            if(reg.test(uname) && uname.length >= 6){//校验

                if(reg.test(pasw1) && pasw1.length >= 6 && pasw2.length <=12){

                    if(pasw2 === pasw1){

                        //在local storage中储存
                        localStorage.setItem('uname',uname);
                        localStorage.setItem('password',pasw2);

                        //清空值
                        $('#reg_name').val('');
                        $('#reg_password').val('');
                        $('#reg_repassword').val('');

                        alert('注册成功')

                    }else{
                        alert('两次密码输入不一致')
                    }

                }else{
                    alert('输入的密码不规范');
                }

            }else{
                alert('输入的用户名不规范');
            }

        }



    });




















});




















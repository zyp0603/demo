$(function(){

    $('#loginBtn').click(function(){

        var uname = $('#log_name').val();
        var psw = $('#log_password').val();

        if(uname === '' || psw === ''){
            alert('����������')
        }else{

            //��local storage��ȡ��ע��õ�ֵ
            var username = localStorage.getItem('uname');
            var sqlpsw = localStorage.getItem('password');

            if(username === uname){

                if(sqlpsw === psw){

                    //window.location.href='https://www.baidu.com';//bom��תҳ�� ��ǰҳ��ת
                    window.open('https://www.baidu.com');//��ת���µ�ҳ��

                }else{
                    alert('�������벻��ȷ')
                }

            }else{
                alert('�û���������');
            }
        }




    });












});





















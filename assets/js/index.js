window.onload=function(){
    var sms_login=document.getElementById("sms_login");
    var pw_login=document.getElementById("pw_login");
    var switch_login=document.querySelector("div.switch");
    var switch_login_0=document.querySelector("div.switch.switch_0");
    var li =document.querySelectorAll(".register .form .register_method li");
    var formArr=document.getElementsByTagName("form");
    var methodArr=document.getElementsByClassName("form");
    sms_login.onclick=function(){
        addClass(formArr[1],"hidden");
        removeClass(formArr[0],"hidden");
        addClass(li[0],"active");
        removeClass(li[1],"active")
    };
    pw_login.onclick=function(){
        addClass(formArr[0],"hidden");   
        removeClass(formArr[1],"hidden");
        addClass(li[1],"active");
        removeClass(li[0],"active")
    };
    switch_login_0.onclick=function(){
        addClass(methodArr[1],"hidden");   
        removeClass(methodArr[0],"hidden");
    }
    switch_login.onclick=function(){
        addClass(methodArr[0],"hidden");   
        removeClass(methodArr[1],"hidden");
    }
    // 防止重复
    function ifHasClass(obj,cn){
        var reg=new RegExp("\\b"+cn+"\\b");
        return reg.test(obj.className)
    }
    // add className
    function addClass(obj,cn){
        if(!ifHasClass(obj,cn)){
            obj.className+=" "+cn
        }
    }
    // removeClass 移除类名
    function removeClass(obj,cn){
        var reg=new RegExp("\\b"+cn+"\\b");
        obj.className=obj.className.replace(reg,"");
    }
    // toggle  有则删除,无则添加
    function toggleClass(obj,cn){
        ifHasClass(obj,cn)?removeClass(obj,cn):addClass(obj,cn);
    }
}
    
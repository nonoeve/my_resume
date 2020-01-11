<template>
    <div class="p1" id="p1">
        <span>Hello, I'm YuZhaojun</span>
        <span style="font-size: 20px;">Life doesn’t get easier, you just get stronger</span>
        <span style="font-family:Microsoft Yahei;font-size: 20px;font-weight: 500;margin-top: 13px;letter-spacing:3px;">我叫余兆俊</span>
        <span style="font-family:Microsoft Yahei;font-size: 20px;font-weight: 500;margin-top: 7px;letter-spacing:3px;">一名前端工程师</span>
        <div style="width: 100%;text-align: center;margin-top: 23px;">
            <a href="#page2"><div class="tome">关于我</div></a>
            <a href="#page3"><div class="myworks">技能掌握</div></a>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Page1'
}
</script>
<style>
*{
text-decoration: none;
}
.p1 {
width: 80%;
height: 500px;
position: absolute;
left: 50%;
transform: translate(-50%,20%) translateZ(-100px) rotateY(0deg);
transition: all 3s;
}
.active .p1{
transform: translate(-50%,20%) translateZ(50px) rotateY(-360deg);
}
.p1 span{
display: inline-block;
width: 100%;
text-align: center;
font-size: 30px;
color: #2c3e50;
font-family:cursive,Lato,sans-serif;
}
.p1 .tome{
vertical-align: top;
margin: 0 auto;
width: 143px;
height: 50px;
font-size: 16px;
border-radius: 5px;
background-color:rgb(44, 62, 80);
color: #fff;
text-align: center;
line-height: 50px;
margin-bottom: 10px;
}
.p1 .myworks{
vertical-align: top;
margin: 0 auto;
width: 141px;
height: 48px;
font-size: 16px;
border-radius: 5px;
border: 1px solid rgb(44, 62, 80);
background-color: #fff;
color: rgb(44, 62, 80);
text-align: center;
line-height: 48px;
}
</style>

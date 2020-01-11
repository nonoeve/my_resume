<template>
<div>
    <div class="bb">
        <div class="orb1 b">灵感</div>
        <div class="orb2 b">代码</div>
        <div class="orb3 b">梦想</div>
        <div class="orb4 b">未来</div>
    </div>
    <div class="p4">
        <span style="color: #ffd200;">CONTACT </span>FOR ME
        <div class="lian-right"></div>
        <div class="lian-bot"></div>
    </div>
    <div class="t4">
        <p>学习是一个充实愉悦的过程</p>
        <p>喜欢尝试，期待新鲜事物</p>
        <p>学习即兴趣，兴趣即未来</p>
        <p>行路有良友，便是捷径</p>
        <p>期待有机会与您共事！</p>
        <div class="zs4" @click="show"><img src="../imgs/vx.png" alt="vx"></div>
    </div>
    <transition name="fade">
        <img src="../imgs/twoma.jpg" alt="二维码" class="twoma" v-show="flag">
    </transition>
</div>
</template>
<script>
export default {
  name: 'Page4',
  data () {
    return {
      flag: false
    }
  },
  methods: {
    show () {
      this.flag = !this.flag
    }
  }
}
</script>
<style>
.bb{
display: flex;
}
.b{
flex: 1;
border-radius: 50%;
width: 80px;
height: 80px;
text-align: center;
z-index: 3;
line-height: 80px;
animation: turn 6s linear infinite;
}
.orb1{
    color: #e3723c;
    font-size: 22px;
    font-style:normal;
    font-family: "微软雅黑";
    font-weight: 700;
}
.orb2{
    color: #84c800;
    font-size: 22px;
    font-style:normal;
    font-family: "微软雅黑";
    font-weight: 700;
    animation: turn1 6s linear infinite;
}
.orb3{
    color: #33ccff;
    font-size: 22px;
    font-style:normal;
    font-family: "微软雅黑";
    font-weight: 700;
}
.orb4{
    color: #9e966e;
    font-size: 22px;
    font-style:normal;
    font-family: "微软雅黑";
    font-weight: 700;
    animation: turn1 6s linear infinite;
}
@keyframes turn{
form {
transform: rotate(-30deg);
}
to {
transform: rotate(360deg);
}
}
@keyframes turn1{
form {
transform: rotate(30deg);
}
to {
transform: rotate(-360deg);
}
}
.p4{
width: 80%;
height: 500px;
position: absolute;
top: 50%;
left: 150%;
transform: translate(-50%, -50%) translateZ(-100px);
transition: all 1s linear;
font-size: 40px;
font-family: "微软雅黑";
font-weight: 800;
padding: 23px;
background-color: rgba(86, 83, 100, .7);
}
.active .p4{
    left: 50%;
    transform: translate(-50%, -50%);
}
.p4 .lian-right{
float: right;
border-top: 6px solid #ffd200;
border-right: 6px solid #ffd200;
width: 150px;
height: 100px;
}
.p4 .lian-bot{
width: 80%;
height: 30px;
border-bottom: 6px solid #ffd200;
border-left: 6px solid #ffd200;
position: absolute;
bottom: 20px;
}
.t4{
width: 70%;
height: 230px;
position: absolute;
top: 50%;
left: -50%;
transform: translate(-50%, -50%);
transition: all 2s linear;
}
.active .t4{
    left: 50%;
    transform: translate(-50%, -50%);
}
.t4 p{
margin-top: 14px;
font-size: 18px;
color: #fff;
font-family: "微软雅黑";
line-height: 35px;
}
.zs4{
margin: 0 auto;
text-align: center;
}
.twoma{
widows: 250px;
height: 250px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
}
.fade-enter{
opacity: 0;
}
.fade-enter-active{
transition: opacity 3s;
}
.fade-leave-to{
opacity: 0;
}
.fade-leave-active{
transition: opacity 3s;
}
</style>

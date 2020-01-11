<template>
    <div class="box2">
        <div class="p2">
<img src="../imgs/cc.jpeg" alt="#">
</div>
<div class="t2">
<p>幸会，我叫余兆俊，22岁，家住金华，是一名钱端攻城狮，打造一款成功的产品离不开持之以恒的照料，希望能成为你的搭档创造出别具一格的作品，我将倍感荣幸！</p>
<p>我毕业于浙江工贸职业技术学院，曾在宁波中软卓越科技有限公司进行为期4个月的工学与培训，热爱学习，做事认真负责，喜欢打篮球，自学能力强，曾自学php，javaweb，react，微信小程序等等</p>
<p>在校期间获得过四次校级智育单项奖学金和一次省级互联网竞赛团体三等奖</p>
</div>
    </div>
</template>
<script>
export default {
  name: 'Page2'
}
</script>
<style>
.p2 img{
width: 130px;
height: 130px;
border-radius: 50%;
position: absolute;
left: 50%;
transform: translate(-50%,33px);
}
.hover img{
box-shadow: 0px 0px 16px #ccc;
}
.active .p2{
    animation: logo ease 2s forwards;
}
.t2{
width: 80%;
position: absolute;
left: 50%;
transform: translate(-50%,190px);
color: #2c3e50;
font-size: 16px;
}
@keyframes logo{
0% {transform: scale(1);}
50% {transform: scale(1.5) translateY(-33px);}
100% {transform: scale(1) translateY(33px);}
}
</style>

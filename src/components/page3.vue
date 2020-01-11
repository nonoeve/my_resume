<template>
    <div class="box3">
        <h1 class="p3">技能掌握</h1>
        <div class="l3">
            <div class="txt" v-for="(item, index) in skills" :key="index" @click="dian(index)">
                {{item.flag?item.name:item.pro}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Page3',
  data () {
    return {
      skills: [{
        name: 'HTML',
        pro: '90%',
        flag: true
      }, {
        name: 'JavaScript',
        pro: '90%',
        flag: true
      }, {
        name: 'css/css3',
        pro: '90%',
        flag: true
      }, {
        name: 'Jquery',
        pro: '90%',
        flag: true
      }, {
        name: 'Vue.js',
        pro: '75%',
        flag: true
      }, {
        name: 'React',
        pro: '才刚学呢',
        flag: true
      }, {
        name: 'Bootstrap',
        pro: '60%',
        flag: true
      }, {
        name: 'Android',
        pro: '80%',
        flag: true
      }, {
        name: 'PHP',
        pro: '70%',
        flag: true
      }, {
        name: 'java',
        pro: '75%',
        flag: true
      }]
    }
  },
  methods: {
    dian (index) {
      this.skills[index].flag = !this.skills[index].flag
    }
  }
}
</script>
<style>
h1,h2,h3{
color: #2c3e50;
}
.p3{
position: absolute;
left: 50%;
transform: translate(-50%,-100px) translateZ(-300px);
transition: all 3s;
}
.active .p3{
transform: translate(-50%,23px) translateZ(0px) rotateY(720deg);
}
.l3{
position: absolute;
top: 90px;
width: 100%;
}
.txt{
width: 80%;
height: 33px;
text-align: center;
line-height: 33px;
margin: 20px auto;
color: #fff;
font-size: 14px;
background-color: #5cb85c;
transition: all 2s ease;
}
.txt:nth-child(odd){
transform: translateX(-400px);
}
.txt:nth-child(even){
transform: translateX(600px);
}
.active .txt{
transform: translateX(0px);
}
</style>

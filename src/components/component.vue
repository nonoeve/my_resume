<template>
    <div class="bg">
      <img src="../imgs/music.png" alt="music" id="music" @click="start">
      <audio src="../music/good girl.mp3" id="aud" autoplay></audio>
        <full-page :options="options" ref="page">
            <div class="section">
                <Page1/>
            </div>
            <div class="section">
                <Page2/>
            </div>
            <div class="section">
                <Page3/>
            </div>
            <div class="section">
                <Page4/>
            </div>
        </full-page>
    </div>
</template>
<script>
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
export default {
  name: '',
  components: {
    Page1,
    Page2,
    Page3,
    Page4
  },
  data () {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4']
      },
      flag: false,
      flagm: true
    }
  },
  methods: {
    tomy () {
      this.$refs.page.api.moveSectionDown()
    },
    start () {
      var music = document.getElementById('music')
      var aud = document.getElementById('aud')
      if (this.flagm) {
        music.classList.add('turn')
        aud.play()
        this.flagm = false
      } else {
        music.classList.remove('turn')
        aud.pause()
        this.flagm = true
      }
    }
  }
}
</script>
<style>
.bg{
position: relative;
background-color: #F5F5F5;
}
.music{
position: absolute;
right: 10%;
z-index: 3;
top: 23px;
}
.section {
perspective: 500px;
position: relative;
}
.turn{
animation: turn 5s linear infinite;
}
@keyframes turn{
form {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
}
</style>

<template>
    <div class="bg">
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
      flag: false
    }
  },
  methods: {
    tomy () {
      this.$refs.page.api.moveSectionDown()
    }
  }
}
</script>
<style>
.bg{
    background-color: #F5F5F5;
}
.section {
perspective: 500px;
position: relative;
}
</style>

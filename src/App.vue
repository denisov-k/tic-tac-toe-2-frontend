<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view :key="defaultViewKey" class="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<script>

export default {
  computed: {
    defaultViewKey: function() {
      return this.$route.name;
    }
  },
  created: function () {
  },
  mounted() {

  },
  beforeMount() {

  },
  methods: {

  }
}
</script>
<style src="../node_modules/flexboxgrid/dist/flexboxgrid.min.css"></style>
<style>
  @font-face {
    font-family: "HelveticaNeueCyr";
    src: url('~@/assets/fonts/HelveticaNeueCyr-Medium.ttf');
  }

  html, body {
    height: 100%;
    overflow: hidden;
    font-size: clamp(12px, 2.75vw, 1.5vh);
  }
  body {
    margin: auto;
    background-color: #0c0f11;
  }

  #app {
    font-family: "HelveticaNeueCyr",serif;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    /*overflow: auto;*/
    max-width: 450px;
    margin: auto;
    background: #000000;
    height: 100%;
    position: relative;
  }

</style>
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
    font-family: "SF Pro";
    /*src: url('./assets/SFProDisplay-Regular.woff2');*/
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
    font-family: "SF Pro", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-width: 450px;
    margin: auto;
    background: #000000;
    height: 100%;
  }

</style>
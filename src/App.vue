<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view :key="defaultViewKey" class="content" :class="{'is-loading': isLoading }"></router-view>
    <router-view name="footer"></router-view>
    <loading v-show="isLoading"></loading>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";

export default {
  components: {Loading},
  computed: {
    defaultViewKey: function() {
      return this.$route.name;
    },
    isLoading() {
      return this.$store.getters.getLoadingStatus;
    },
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

    /*font-family: "OpenSans";
    src: url('~@/assets/fonts/OpenSans.ttf');*/
    font-family: "Roboto";
    src: url('~@/assets/fonts/Roboto-Medium.ttf');
  }

  html, body {
    height: 100%;
    overflow: hidden;
    /*font-size: clamp(12px, 2.75vw, 1.5vh);*/
  }
  body {
    margin: auto;
    background-color: #0c0f11;
  }

  #app {
    font-family: "Roboto",serif;
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
  .content.is-loading {
    content-visibility: hidden;
  }
</style>
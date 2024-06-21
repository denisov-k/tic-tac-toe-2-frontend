<template>
  <footer class="layouts--footer">
    <div class="footer-content">
      <div class="navigation-button" v-for="(button, key) in navigationButtons" :key="key"
           v-on:click="goTo(button.name, $children[key])" :class="{'selected': isButtonSelected(button)}">
        <lottie class="image" :animation-data="button.image" :auto-play="false" :ref="key" :loop="false"
                @complete="loopComplete"></lottie>
        <span>{{ button.caption }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      navigationButtons: [
        { name: 'home', caption: this.$t('home'), image: require('../assets/images/navigation/home_nav.json') },
        { name: 'changelog', caption: this.$t('changelog'), image: require('../assets/images/navigation/changelog_nav.json') },
        { name: 'tasks', caption: this.$t('tasks'), image: require('../assets/images/navigation/tasks_nav.json') },
        { name: 'frens', caption: this.$t('frens'), image: require('../assets/images/navigation/frens_nav.json') },
      ]
    }
  },
  computed: {

  },
  methods: {
    goTo(route, el) {
      el.anim.goToAndPlay(15, true);
      if (this.$route.name !== route)
        this.$router.push({ name: route });
    },
    isButtonSelected(button) {

      return this.$route.name === button.name
    },
    loopComplete(image) {
      //image.goToAndStop(0);
    }
  },
  mounted: function () {
    Object.values(this.$refs).forEach(([item]) => {
      item.anim.goToAndStop(item.anim.totalFrames, true);
    })
  }
}
</script>

<i18n>
  {
    "en": {
      "home": "Home",
      "changelog": "Changelog",
      "tasks": "Tasks",
      "frens": "Frens"
    },
    "ru": {
      "home": "Главная",
      "changelog": "Changelog",
      "tasks": "Задачи",
      "frens": "Друзья"
    }
  }
</i18n>

<style scoped>
  .layouts--footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 1.5vh 2vw;
  }
  .footer-content {
    flex-direction: row;
    width: 100%;
    height: 9.7vh;
    background-color: #1d2025;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }
  .navigation-button {
    display: flex;
    flex-direction: column;
    /*font-weight: 600;*/
    cursor: pointer;
    color: #A5A5A5;
    align-items: center;
    font-size: 1.35vh;
    -webkit-tap-highlight-color: transparent;
    width: 25%;
    height: 100%;
    justify-content: center;
  }
  .navigation-button:focus {
    outline: 0;
    background: unset;
  }
  .navigation-button.selected {
    color: white;
  }
  .navigation-button .image {
    width: auto;
    height: 3.5vh !important;
    margin-bottom: 0.3vh !important;
    aspect-ratio:1;
  }
  .image >>> path {
    stroke: #A5A5A5;
  }
  .navigation-button.selected >>> path {
    stroke: white;
  }
</style>
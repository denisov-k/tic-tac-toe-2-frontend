<template>
  <footer class="layouts--footer">
    <div class="footer-content">
      <div class="navigation-button" v-for="(button, key) in navigationButtons" :key="key"
           v-on:click="goTo(button.name, $children[key])" :class="{'selected': isButtonSelected(button)}">
        <lottie class="image" :animation-data="button.image" :auto-play="false" :loop="false"
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
        { name: 'tasks', caption: this.$t('tasks'), image: require('../assets/images/navigation/tasks_nav.json') },
        { name: 'frens', caption: this.$t('frens'), image: require('../assets/images/navigation/frens_nav.json') },
      ]
    }
  },
  computed: {

  },
  methods: {
    goTo(route, el) {
      el.play();
      if (this.$route.name !== route)
        this.$router.push({ name: route });
    },
    isButtonSelected(button) {

      return this.$route.name === button.name
    },
    loopComplete(image) {
      image.goToAndStop(0);
    }
  },
  created: function () {

  }
}
</script>

<i18n>
  {
    "en": {
      "home": "Home",
      "tasks": "Tasks",
      "frens": "Frens"
    },
    "ru": {
      "home": "Главная",
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
    border-radius: 13px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 1.5vh 2vw;
  }
  .footer-content {
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 9.7vh;
    background-color: #1212128a;
    border-radius: 13px;
    display: flex;
    align-items: center;
  }
  .navigation-button {
    display: flex;
    flex-direction: column;
    /*font-weight: 600;*/
    cursor: pointer;
    color: #898989;
    align-items: center;
    font-size: 1.35vh;
  }
  .navigation-button.selected {
    color: white;
  }
  .navigation-button .image {
    stroke: #898989;
    width: auto;
    height: 2.75vh !important;
    margin-bottom: 0.5vh !important;
  }
  .navigation-button.selected .image{
    stroke: white;
  }
</style>
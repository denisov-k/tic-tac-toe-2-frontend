<template>
  <footer class="layouts--footer">
    <div class="footer-content">
      <div class="navigation-button" v-for="(button, key) in navigationButtons" :key="key"
           v-on:click="goTo(button.name)" :class="{'selected': isButtonSelected(button)}">
        <inline-svg :src="button.image" class="image" />
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
        { name: 'home', caption: this.$t('home'), image: require('@/assets/images/navigation/home.svg') },
        { name: 'tasks', caption: this.$t('tasks'), image: require('@/assets/images/navigation/tasks.svg') },
        { name: 'frens', caption: this.$t('frens'), image: require('@/assets/images/navigation/frens.svg') },
      ]
    }
  },
  computed: {

  },
  methods: {
    goTo(route) {
      if (this.$route.name !== route)
        this.$router.push({ name: route });
    },
    isButtonSelected(button) {

      return this.$route.name === button.name
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
    width: 100%;
    background-color: #1212128a;
  }
  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .navigation-button {
    display: flex;
    flex-direction: column;
    padding: 15px;
    /*font-weight: 600;*/
    cursor: pointer;
    color: #898989;
    align-items: center;
  }
  .navigation-button.selected {
    color: white;
  }
  .navigation-button .image {
    stroke: #898989;
    width: 20px;
    height: 20px;
    margin-bottom: 5px;
  }
  .navigation-button.selected .image{
    stroke: white;
  }
</style>
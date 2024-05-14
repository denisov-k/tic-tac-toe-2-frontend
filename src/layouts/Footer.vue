<template>
  <footer class="layouts--footer">
    <div class="footer-content">
      <div class="navigation-button" v-for="button in navigationButtons"
           v-on:click="goTo(button.name)" :class="{'selected': isButtonSelected(button)}">
        <span>{{ button.caption }}</span>
        <!--<inline-svg :src="require('@/assets/widget/expand.svg')" />-->
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
        { name: 'home', caption: this.$t('home') },
        { name: 'tasks', caption: this.$t('tasks') },
        { name: 'frens', caption: this.$t('frens') },
      ]
    }
  },
  computed: {

  },
  methods: {
    goTo(route) {
      console.log(this.$route.name, route)
      this.$router.push({ name: route });
      this.$nextTick();
      this.$forceUpdate();

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
    margin-bottom: 5px;
  }
  .footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .navigation-button {
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    color: #898989;
  }
  .navigation-button.selected {
    color: white;
  }
</style>
<template>
  <div id="alert" v-show="isShowing">
    <inline-svg :src="require('@/assets/images/tasks/done.svg')" class="icon"></inline-svg>
    <span>{{ message }}</span>
  </div>
</template>

<script>
  export default {
    name: "Alert",
    data: () => {
      return {
        message: '',
        isShowing: false
      }
    },
    computed: {

    },
    methods: {
      show(message) {
        this.message = message;
        this.isShowing = true;

        setTimeout(() => {
          this.isShowing = false;
        }, 5000)
      }
    }
  }
</script>

<style scoped>
  div#alert {
    display: flex;
    align-items: center;
    background-color: #000000cc;
    position: fixed;
    width: calc(100% - 30px);
    height: 6.8vh;
    z-index: 2;
  }
  .icon {
    height: 6.8vh;
  }
</style>
<template>
  <div id="alert" v-show="isShowing">
    <inline-svg :src="require('@/assets/images/tasks/done.svg')" class="icon"></inline-svg>
    <span>{{ message }}</span>
    <inline-svg :src="require('@/assets/images/tasks/coin.svg')" class="coin"></inline-svg>
    <span>!</span>
  </div>
</template>

<script>
  export default {
    name: "Alert",
    data: () => {
      return {
        message: 'You got + 0',
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
  svg.coin {
    width: auto;
    height: 3vh;
    margin: 0 5px;
  }
</style>
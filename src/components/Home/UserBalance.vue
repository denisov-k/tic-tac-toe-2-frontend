<template>
  <div id="user-balance">
    <div class="icon">
      <inline-svg :src="require('@/assets/images/home/coin.svg')"></inline-svg>
    </div>
    <div class="value">{{ value }}</div>
  </div>
</template>

<script>
  export default {
    name: "UserBalance",
    data: () => {
      return {
        value: (0).toFixed(2)
      }
    },
    computed: {
      /*value() {
        return Number(this.$store.state.session.user.balance).toFixed(2);
      }*/
    },
    methods: {
      animateValue(start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          this.value = (progress * (end - start) + start).toFixed(2);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
    },
    created() {
      this.unsubscribe = this.$store.subscribe((mutation, state) => {
        if (mutation.type === 'setBalance') {
          this.animateValue(Number(this.value), Number(mutation.payload.balance), 1000);


        }
      });
    },
    beforeDestroy() {
      this.unsubscribe();
    },
  }
</script>

<style scoped>
  #user-balance {
    display: flex;
    align-items: center;
    margin: 2.5vh 0;
    text-align: center;
    padding-right: 2.5vw;
  }
  div.icon {
    width: auto;
    height: 4vh;
    margin: 0 2vw;
  }
  div.icon > svg {
    height: 100%;
    width: auto;
  }
  .value {
    display: inline-flex;
    /*background-color: green;*/
    font-size: 3.1vh;
    margin: auto;
    align-items: center;
    text-align: center;
    align-content: center;
    height: auto;
    vertical-align: middle;
  }
</style>
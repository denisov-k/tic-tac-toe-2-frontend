<template>
  <div class="steps">
    <div class="step" v-for="(step, key) in steps" :key="key">
      <span class="name">{{ step.name }}</span>
      <span class="description">{{ step.description }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Steps",
    data() {
      return {
        steps: [
          { name: this.$t('steps.0.name'), description: this.$t('steps.0.description') },
          { name: this.$t('steps.2.name'), description: this.$t('steps.2.description') }
        ]
      }
    },
  }
</script>

<style scoped>
  .steps {
    padding: 0 2vw;
  }
  .step {
    display: flex;
    flex-direction: column;
    padding: 1vh 0;
    font-size: 1.8vh;
  }
  .name {

  }
</style>


<i18n>
  {
    "en": {
      "steps": [
        { "name": "Share your invitation link", "description": "Spread the crypto among friends" },
        { "name": "Your friends join Tic Tac Toe", "description": "And start farming points" },
        { "name": "Earn 10% of the BP farmed by frens", "description": "Plus an extra 2.5% from their referrals" }
      ]
    },
    "ru": {
      "steps": [
        { "name": "Share your invitation link", "description": "Spread the crypto among friends" },
        { "name": "Your friends join Tic Tac Toe", "description": "And start farming points" },
        { "name": "Earn 10% of the BP farmed by frens", "description": "Plus an extra 2.5% from their referrals" }
      ]
    }
  }
</i18n>
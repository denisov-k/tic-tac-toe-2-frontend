<template>
  <div class="list">
    <div class="item" v-for="(transaction, index) in transactionsList" :key="transaction.id">
      <inline-svg :src="icons[transaction.type][transaction.reason]" class="icon" />
      <div class="captions">
        <div>
          <span>{{ $t(transaction.type + '.' + transaction.reason)}}</span>
        </div>
        <div>
          <inline-svg :src="require('@/assets/images/changelog/coin.svg')" class="coin-icon" />
          <span>+ {{transaction.amount.toFixed(3) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";
  import {nextTick} from "vue";

  export default {
    name: "TransactionsList",
    props: {

    },
    data() {
      return {
        transactionsList: [],
        icons: {
          'increase': {
            'blow_up': require('@/assets/images/changelog/increase.svg'),
            'referral_registration': require('@/assets/images/changelog/frens.svg'),
            'task': require('@/assets/images/changelog/task.svg'),
          },
          'decrease': {
            'blow_up': require('@/assets/images/changelog/decrease.svg')
          }
        }
      }
    },
    created() {
      this.service = new Service();
      this.service.getTransactions().then(list => {
        this.transactionsList = list;
      })
    },
    methods: {
      startTask(index) {
        setTimeout(() => this.taskInProgressIndex = index, 1000);

        Telegram.WebApp.openLink(this.tasks[index].link);
      },
      claimTask(index) {
        this.service.claimTask(this.tasksList[index].id).then(() => {
          this.tasksList[index].completed = true;
          this.taskInProgressIndex = -1;
          this.afterComplete(this.tasksList[index]);
        })
      }
    }
  }
</script>

<style scoped>
  .list {
    margin: 2vh auto;
    width: calc(100% - 10px);
    flex: 1;
    overflow: auto;
  }
  .item {
    height: 5vh;
    padding: 1.5vh 3.5vw;
    display: flex;
    flex-direction: row;
    background-color: #00000099;
    margin: 2.5vh 0;
    font-size: 1.5vh;
    border-radius: 9px;
  }
  .item:first-child {
    margin-top: 0;
  }
  .item:last-child {
    margin-bottom: 0;
  }
  .item > svg {
    width: auto;
    height: 3.3vh;
    align-self: center;
  }
  .captions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 3.5vw;
    justify-content: center;
  }
  .captions > div {
    display: flex;
    align-items: center;
    padding: 0.3vh 0;
    text-align: center;
  }
  .coin-icon {
    width: auto;
    height: 1.7vh;
    margin-right: 1.3vw;
  }
</style>

<i18n>
  {
    "en": {
      "increase": {
        "registration": "Registration",
        "blow_up": "Blow up bonus",
        "referral_registration": "Frens bonus",
        "task": "Task bonus"
      },
      "decrease": {
        "blow_up": "Blow up penalty"
      }
    },
    "ru": {
      "increase": {
        "registration": "Registration",
        "blow_up": "Blow up bonus",
        "referral_registration": "Frens bonus",
        "task": "Task bonus"
      },
      "decrease": {
        "blow_up": "Blow up penalty"
      }
    }
  }
</i18n>
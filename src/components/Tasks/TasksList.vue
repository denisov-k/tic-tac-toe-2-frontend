<template>
  <div class="tasks-list">
    <div class="task-item" v-for="(task, index) in tasksList" :key="task.id">
      <inline-svg :src="icons[task.type]" class="icon"></inline-svg>
      <div class="captions">
        <div>
          <div>{{ task.name }}</div>
        </div>
        <div>
          <inline-svg :src="require('@/assets/images/tasks/coin.svg')" class="coin-icon"></inline-svg>
          <div>+ {{ task.reward }}</div>
        </div>
      </div>
      <div class="button completed" v-if="task.completed">
        <inline-svg :src="require('@/assets/images/tasks/completed.svg')" class="completed-icon"></inline-svg>
      </div>
      <div class="button start" v-on:click="startTask(index)" v-else-if="taskInProgressIndex !== index">
        {{ $t('start') }}
      </div>
      <div class="button claim" v-on:click="claimTask(index)" v-else>
        {{ $t('claim') }}
      </div>
    </div>
  </div>
</template>

<script>
  import Service from "@/services/UsersService";
  import {nextTick} from "vue";

  export default {
    name: "TasksList",
    props: {
      tasks: Array,
      afterComplete: Function
    },
    data() {
      return {
        taskInProgressIndex: -1,
        tasksList: [],
        icons: {
          'x': require('@/assets/images/tasks/x.svg'),
          'telegram': require('@/assets/images/tasks/telegram.svg'),
          'instagram': require('@/assets/images/tasks/instagram.svg'),
        }
      }
    },
    created() {
      this.service = new Service();
      this.tasksList = this.tasks;
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
  .tasks-list {
    margin: 1.2vh auto;
    width: calc(100% - 30px);
  }
  .task-item {
    padding: 1.5vh 3.5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #00000099;
    margin: 2.5vh 0;
    font-size: 1.5vh;
    border-radius: 9px;
  }
  .task-item > svg {
    width: auto;
    height: 3.2vh;
    align-self: center;
  }
  .captions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 3.5vw;
  }
  .captions > div {
    display: flex;
    align-items: center;
    padding: 0.3vh 0;
    text-align: center;
  }
  .coin-icon {
    width: auto;
    height: 1.6vh;
    margin-right: 1.3vw;
  }
  .completed-icon {
    width: auto;
    height: 3vh;
  }
  .button {
    align-content: center;
    width: 18.5vw;
    margin-right: 0;
    margin-left: auto;
    height: 3.75vh;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
  }
  .start {
    background-color: #151515;
    cursor: pointer;
  }
  .claim {
    background-color: #19FFFF;
    color: #000;
    box-shadow: 0 0 10px 0 #19FFFF;
    cursor: pointer;
  }
</style>

<i18n>
  {
    "en": {
      "start": "Start",
      "completed": "Completed",
      "claim": "Claim"
    },
    "ru": {
      "start": "Start",
      "completed": "Completed",
      "claim": "Claim"
    }
  }
</i18n>
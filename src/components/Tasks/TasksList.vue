<template>
  <div class="tasks-list">
    <div class="task-item" v-for="(task, index) in tasksList" :key="task.id">
      <inline-svg :src="icons[task.type]" class="icon"></inline-svg>
      <div class="captions">
        <div>
          <span>{{ task.name }}</span>
        </div>
        <div>
          <inline-svg :src="require('@/assets/images/tasks/coin.svg')" class="coin-icon"></inline-svg>
          <span>+ {{ task.reward }}</span>
        </div>
      </div>
      <div class="button completed" v-if="task.completed">
        <inline-svg :src="require('@/assets/images/tasks/completed.svg')" class="completed-icon"></inline-svg>
      </div>
      <div class="button start" v-on:click="completeTask(index)" v-else-if="taskInProgressIndex !== index">
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
      tasks: Array
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
      completeTask(index) {
        setTimeout(() => this.taskInProgressIndex = index, 1000);

        Telegram.WebApp.openLink(this.tasks[index].link);
      },
      claimTask(index) {
        this.service.claimTask(this.tasksList[index].id).then(() => {
          this.tasksList[index].completed = true;
          this.taskInProgressIndex = -1;
        })
      },
      getIcon(type) {
        console.log(type)
      }
    }
  }
</script>

<style scoped>
  .tasks-list {
    margin: 10px auto;
    width: calc(100% - 30px);
  }
  .task-item {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #00000099;
    margin: 10px 0;
    font-size: 14px;
  }
  .task-item > svg {
    align-self: center;
  }
  .captions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 10px;
  }
  .captions > div {
    display: flex;
    align-items: center;
    padding: 2px 0;
  }
  .coin-icon {
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  .completed-icon {
    width: 28px;
    height: 28px;
  }
  .button {
    align-content: center;
    width: 60px;
    margin-right: 0;
    margin-left: auto;
    height: 30px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
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
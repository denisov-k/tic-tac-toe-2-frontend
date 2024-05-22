<template>
  <div class="tasks-list">
    <div class="task-item" v-for="(task, index) in tasksList" :key="task.id">
      <div class="captions">
        <span>{{ task.name }}</span>
        <span>{{ task.reward }}</span>
      </div>
      <div class="button" v-if="task.completed">
        {{ $t('completed') }}
      </div>
      <div class="button" v-on:click="completeTask(index)" v-else-if="taskInProgressIndex !== index">
        {{ $t('complete') }}
      </div>
      <div class="button" v-on:click="claimTask(index)" v-else>
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
        tasksList: []
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
      }
    }
  }
</script>

<style scoped>
  .tasks-list {
    margin: 10px 0;
  }
  .task-item {
    padding: 10px;
    border-bottom: 1px solid #2a2a2a;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .captions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .button {
    align-content: center;
  }
</style>

<i18n>
  {
    "en": {
      "complete": "Complete",
      "completed": "Completed",
      "claim": "Claim"
    },
    "ru": {
      "complete": "Complete",
      "completed": "Completed",
      "claim": "Claim"
    }
  }
</i18n>
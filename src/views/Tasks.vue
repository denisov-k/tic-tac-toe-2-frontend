<template>
  <div>
    <main>
      <inline-svg :src="require('@/assets/images/tasks/icon.svg')" class="icon"></inline-svg>
      <div class="header">
        <span>{{availableTasksCount}} {{$t('header') }}</span>
        <span class="description">{{ $t('description') }}</span>
      </div>
      <tasks-list :tasks="tasks" v-if="tasks.length"></tasks-list>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<script>

  import TasksList from "@/components/Tasks/TasksList.vue";
  import Service from "@/services/UsersService";

  export default {
    name: "Tasks",
    components: {TasksList},
    data() {
      return {
        tasks: []
      }
    },
    mounted() {
      this.service = new Service();

      this.service.getTasks().then((tasks) => {
        this.tasks = tasks;
      })
    },
    computed: {
      availableTasksCount() {
        return this.tasks.filter(task => !task.completed).length
      }
    },
  }
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(210deg,#151515,#7e1363, #007777,#020202,#0d8e8e);
    background-size: 200% 200%;
    animation: gradient-animation 40s ease infinite;
    justify-content: space-between;
    padding: 1.5vh 2vw;
    box-sizing: border-box;
  }
  main {
    display: flex;
    flex-direction: column;
    flex: auto;
    justify-content: space-between;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .icon {
    height: 14.5vh;
    margin: 2.7vh 0;
    align-self: center;
  }
  .header {
    font-size: 2.4vh;
    margin: 2.7vh 0;
    display: flex;
    flex-direction: column;
  }
  .description {
    font-size: 1.6vh;
    color: white;
    padding: 0 10vw;
    margin-top: 1.5vh;
  }
</style>

<i18n>
  {
    "en": {
      "header": "tasks available",
      "description": "We’ll reward you immediately with points after each task completion"
    },
    "ru": {
      "header": "tasks available",
      "description": "We’ll reward you immediately with points after each task completion"
    }
  }
</i18n>
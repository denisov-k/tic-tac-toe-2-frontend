<template>
  <main>
    <inline-svg :src="require('@/assets/images/tasks/icon.svg')" class="icon"></inline-svg>
    <div class="header">
      <span>{{availableTasksCount}} {{$t('header') }}</span>
      <span class="description">{{ $t('description') }}</span>
    </div>
    <tasks-list :tasks="tasks" v-if="tasks.length"></tasks-list>
    <slot name="footer"></slot>
  </main>
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
  main {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5vh 2vw;
    flex: auto;
    justify-content: space-between;
    background: linear-gradient(210deg,#151515,#7e1363, #007777,#020202,#0d8e8e);
    background-size: 200% 200%;
    animation: gradient-animation 40s ease infinite;
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
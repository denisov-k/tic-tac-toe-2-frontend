<template>
  <main>
    <span class="header">{{availableTasksCount}} {{$t('header') }}</span>
    <span class="description">{{ $t('description') }}</span>
    <tasks-list :tasks="tasks" v-if="tasks.length"></tasks-list>
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
    padding: 20px;
    flex: auto;
    justify-content: center;
  }
  .header {
    font-weight: 600;
    font-size: 24px;
    padding: 10px;
  }
  .description {
    font-weight: 600;
    font-size: 16px;
    color: #9c9c9c;
    padding: 10px 0;
  }
</style>

<i18n>
  {
    "en": {
      "header": "tasks available",
      "description": "We’ll reward you immediately with points after each task completion."
    },
    "ru": {
      "header": "tasks available",
      "description": "We’ll reward you immediately with points after each task completion."
    }
  }
</i18n>
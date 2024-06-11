<template>
  <main>
    <alert ref="alert"></alert>
    <inline-svg :src="require('@/assets/images/tasks/icon.svg')" class="icon"></inline-svg>
    <div class="header">
      <span>{{availableTasksCount}} {{$t('header') }}</span>
      <span class="description">{{ $t('description') }}</span>
    </div>
    <tasks-list :tasks="tasks" :after-complete="afterComplete" v-if="tasks.length"></tasks-list>
  </main>
</template>

<script>

  import TasksList from "@/components/Tasks/TasksList.vue";
  import Service from "@/services/UsersService";
  import Alert from "@/components/Tasks/Alert.vue";

  export default {
    name: "Tasks",
    components: {Alert, TasksList},
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
      },

    },
    methods: {
      afterComplete(task) {
        this.$refs.alert.show(this.$t('alert', { award: task.reward }));
      }
    }
  }
</script>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    flex: auto;
    overflow-y: auto;
    box-sizing: border-box;
    width: 100%;
    align-items: center;
    height: 100%;
    background-image: linear-gradient(210deg, #151515, #430534, #013d3d, #000000);
    background-size: 200% 200%;
    animation: gradient-animation 40s ease infinite;
    padding: 1.5vh 2vw 12.5vh;
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
    margin: 1vh 0;
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
      "description": "We’ll reward you immediately with points after each task completion",
      "alert": "You got + {award} XO Points!"
    },
    "ru": {
      "header": "tasks available",
      "description": "We’ll reward you immediately with points after each task completion",
      "alert": "You got + {award} XO Points!"
    }
  }
</i18n>
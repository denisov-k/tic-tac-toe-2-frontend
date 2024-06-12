<template>
  <div id="teaser">
    <inline-svg :src="require('@/assets/images/home/game.svg')" class="game-icon"></inline-svg>
    <span class="caption-1">{{ $t('drop_game') }}</span>
    <span class="caption-2">{{ $t('coming_soon') }}</span>
  </div>
</template>

<script>
  export default {
    name: "Teaser"
  }
</script>

<style scoped>
 #teaser {
   display: flex;
   flex-direction: column;
   align-items: center;
   box-sizing: border-box;
   margin: 2.5vh 0;
 }
 .game-icon {
   fill: #535559;
   margin: 0 0 1vh 0;
   width: auto;
   height: 15vh;
 }
 span {
   color: #989999;
 }
 .caption-1 {
   font-size: 1.5vh;
 }
 .caption-2 {
    font-size: 1.5vh;
 }
</style>

<i18n>
  {
    "en": {
      "drop_game": "Drop game",
      "coming_soon": "Coming soon"
    },
    "ru": {
      "drop_game": "Drop game",
      "coming_soon": "Coming soon"
    }
  }
</i18n>
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
   aspect-ratio: 1;
   align-items: center;
   box-sizing: border-box;
 }
 .game-icon {
   fill: #535559;
   margin: 5px 0;
   width: 100px;
   height: 100px;
 }
 span {
   color: #989999;
 }
 .caption-1 {
   font-size: 13px;
 }
 .caption-2 {
    font-size: 13px;
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
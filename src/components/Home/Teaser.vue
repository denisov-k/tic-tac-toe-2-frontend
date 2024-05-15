<template>
  <div id="teaser">
    <inline-svg :src="require('@/assets/game.svg')" class="game-icon"></inline-svg>
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
   border: 4px solid #1e1e1e;
   border-radius: 10px;
   aspect-ratio: 1;
   align-items: center;
   padding: 10px;
   box-sizing: border-box;
 }
 .game-icon {
   fill: #535559;
 }
 span {
   color: #989999;
   font-weight: 600;
 }
 .caption-1 {
   font-size: 18px;
   margin: 5px 0;
 }
 .caption-2 {
    font-size: 14px;
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
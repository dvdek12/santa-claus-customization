<template>

  <div class="canvas">
        <div class="hands"></div>
        <div class="arms"></div>
        <div class="leg"></div>
        <div class="leg"></div>
        <div class="body" v-custom-suit="suitColor"></div>
        <div class="buttons"></div>
        <div class="belt"></div>
        <div class="beard" v-custom-beard="beardColor"></div>
        <div class="head"></div>
        <div class="eyes"></div>
        <div class="cheeks"></div>
        <div class="mustache" v-custom-mustache="moustacheColor"></div>
        <div class="mustache"></div>
        <div class="hat" v-custom-hat="hatColor"></div>
  </div>
</template>

<script>
export default {
  props: ['hatColor', 'beardColor', 'suitColor', 'moustacheColor'],
}
</script>
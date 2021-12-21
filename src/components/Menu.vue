<template>
    <div class="bg-indigo-300 shadow-xl flex flex-col items-center space-y-4 w-1/4 p-5 rounded-xl m-5">
        <div class="inline-flex space-x-2 items-center">
          <p class="text-xl text-white font-bold">Kolor czapki:</p> <input type="color" v-model="customization.hatColor" @change="passdata">
        </div>

        <div class="inline-flex space-x-2 items-center">
          <p class="text-xl text-white font-bold">Kolor brody:</p> <input type="color" v-model="customization.beardColor" @change="passdata">
        </div>

        <div class="inline-flex space-x-2 items-center">
          <p class="text-xl text-white font-bold">Kolor ubrania:</p> <input type="color" v-model="customization.suitColor" @change="passdata">
        </div>

        <div class="inline-flex space-x-2 items-center">
          <p class="text-xl text-white font-bold">Kolor wąsów:</p> <input type="color" v-model="customization.moustacheColor" @change="passdata">
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
      return {
        customization: [
          {hatColor: ''},
          {beardColor: ''},
          {suitColor: ''},
          {moustacheColor: ''},
      ]

      }
    },

    methods: {
      passdata() {
        this.$emit('customizationEvent', this.customization)
      }
    }
}
</script>
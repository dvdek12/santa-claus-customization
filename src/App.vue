<template>
  <div id="app">

    <Menu @customizationEvent="getdata($event)"></Menu>
    <div class="w-screen h-screen flex flex-row justify-center">
      <!-- santa claus -->
      <SantaClaus :hatColor="customization[0].hatColor"
                  :beardColor="customization[1].beardColor"
                  :suitColor="customization[2].suitColor"
                  :moustacheColor="customization[3].moustacheColor">
      </SantaClaus>
      
    </div>


  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import SantaClaus from './components/SantaClaus.vue'

export default {
  name: 'App',
  components: {
    Menu,
    SantaClaus
  },

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
    getdata(data) {
      // console.log("data => ", data)
      // console.log("data.hatcolor => ", data.hatColor)
      // console.log("local customization.hatcolor => ", this.customization[0].hatColor)
      this.customization[0].hatColor = data.hatColor;
      this.customization[1].beardColor = data.beardColor;
      this.customization[2].suitColor = data.suitColor;
      this.customization[3].moustacheColor = data.moustacheColor;
    }
  }
}
</script>

<style>

</style>

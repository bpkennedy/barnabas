<template>
  <CBox>
    <Btn
      v-if="isOpen"
      variant="ghost"
      label="Close"
      left-icon="times-circle"
      @click.native="toggle"
    />
    <Btn
      v-else
      variant="ghost"
      label="Menu"
      left-icon="bars"
      @click.native="toggle"
    />
  </CBox>
</template>

<script lang="js">
import {
  CBox
} from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    Btn: () => import('../xx-molecules/Btn.vue')
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

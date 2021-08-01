<template>
  <CBox>
    <Btn
      v-if="menuToggled"
      variant="ghost"
      label="Close"
      left-icon="times-circle"
      z-index="tooltip"
      @click.native="toggle"
    />
    <Btn
      v-else
      variant="ghost"
      label="Menu"
      left-icon="bars"
      z-index="tooltip"
      @click.native="toggle"
    />
  </CBox>
</template>

<script lang="js">
import {
  CBox
} from '@chakra-ui/vue'
import { mapState } from 'vuex'
import { MENU_TOGGLED_ACTION } from '~/store'

export default {
  components: {
    CBox,
    Btn: () => import('../xx-molecules/Btn.vue')
  },
  computed: {
    ...mapState(['menuToggled'])
  },
  methods: {
    toggle () {
      this.$store.dispatch(MENU_TOGGLED_ACTION)
    }
  }
}
</script>

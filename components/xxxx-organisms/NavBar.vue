<template>
  <CFlex p="4" align="center" justify="space-between">
    <Logo />
    <ShowDesktop>
      <Menu />
    </ShowDesktop>
    <ShowMobile>
      <MenuToggle class="tg" />
      <CBox
        v-if="menuToggled"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        pt="16"
        background="white"
        z-index="toast"
        class="cb"
      >
        <MenuAccordion />
      </CBox>
    </ShowMobile>
  </CFlex>
</template>

<script lang="js">
import { mapState } from 'vuex'
import {
  CFlex
} from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    Logo: () => import('../x-atoms/Logo.vue'),
    Menu: () => import('../xxx-compounds/Menu.vue'),
    MenuToggle: () => import('../xxx-compounds/MenuToggle.vue'),
    MenuAccordion: () => import('../xxx-compounds/MenuAccordion.vue'),
    ShowMobile: () => import('../x-atoms/ShowMobile.vue'),
    ShowDesktop: () => import('../x-atoms/ShowDesktop.vue')
  },
  computed: {
    ...mapState(['menuToggled'])
  }
}
</script>

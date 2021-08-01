<template>
  <CFlex p="4" align="center" justify="space-between">
    <Logo />
    <ShowDesktop>
      <Menu />
    </ShowDesktop>
    <ShowMobile>
      <MenuToggle />
    </ShowMobile>
  </CFlex>
</template>

<script lang="js">
import {
  CFlex
} from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    Logo: () => import('../x-atoms/Logo.vue'),
    Menu: () => import('../xxx-compounds/Menu.vue'),
    MenuToggle: () => import('../xxx-compounds/MenuToggle.vue'),
    ShowMobile: () => import('../x-atoms/ShowMobile.vue'),
    ShowDesktop: () => import('../x-atoms/ShowDesktop.vue')
  }
}
</script>

<template>
  <CFlex p="4" align="center" justify="space-between">
    <Logo />
    <MenuToggle />
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
    MenuToggle: () => import('../xxx-compounds/MenuToggle.vue')
  }
}
</script>

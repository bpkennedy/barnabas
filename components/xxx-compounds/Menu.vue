<template>
  <CFlex align="center" justify="center">
    <MenuBtn
      v-for="item in navigationItems"
      :key="item.name"
      :links="item.links"
      :title="item.display"
    />
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
    MenuBtn: () => import('../xx-molecules/MenuBtn.vue')
  },
  computed: {
    ...mapState(['navigationItems'])
  }
}
</script>

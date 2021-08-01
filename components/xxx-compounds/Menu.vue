<template>
  <CFlex align="center" justify="center">
    <MenuBtn
      v-for="topLink in topLinks"
      :key="topLink.id"
      :links="topLink.links"
      :title="topLink.title"
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
    ...mapState(['topLinks'])
  }
}
</script>

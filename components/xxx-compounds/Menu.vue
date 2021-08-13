<template>
  <CFlex align="center" justify="center">
    <CBox
      v-for="item in navigationItems"
      :key="item.name"
    >
      <MenuBtn
        v-if="item.links.length"
        :links="item.links"
        :title="item.display"
      />
      <Btn
        v-else
        v-chakra="{
          ':hover': {
            bg: 'var(--bnb-color-blue-100)',
            color: 'var(--bnb-color-blackalpha-800)'
          },
        }"
        :title="item.display"
        variant="ghost"
        variant-color="primary"
        font-size="sm"
        @click.native="$router.push(item.to)"
      />
    </CBox>
  </CFlex>
</template>

<script lang="js">
import { mapState } from 'vuex'
import {
  CFlex,
  CBox
} from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    CBox,
    Btn: () => import('../xx-molecules/Btn.vue'),
    MenuBtn: () => import('../xx-molecules/MenuBtn.vue')
  },
  computed: {
    ...mapState(['navigationItems'])
  }
}
</script>

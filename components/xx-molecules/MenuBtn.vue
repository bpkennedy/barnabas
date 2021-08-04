<template>
  <CMenu v-slot="{ isOpen }">
    <CMenuButton
      :is-active="isOpen"
      variant="ghost"
      variant-color="default"
      right-icon="chevron-down"
      :_hover="{
        bg: 'var(--bnb-color-blue-100)',
        color: 'var(--bnb-color-blackalpha-800)'
      }"
      :_expanded="{ shadow: 'outline' }"
    >
      <Txt
        as="div"
        :is-truncated="true"
        max-width="10rem"
        font-size="sm"
      >
        {{ title }}
      </Txt>
    </CMenuButton>
    <CMenuList>
      <CMenuItem
        v-for="link in links"
        :key="link.title"
        :_hover="{ cursor: 'initial' }"
      >
        <Link
          :title="link.title"
          :to="link.to"
          as="nuxt-link"
        />
      </CMenuItem>
    </CMenuList>
  </CMenu>
</template>

<script lang="js">
import {
  CMenu,
  CMenuButton,
  CMenuList,
  CMenuItem
} from '@chakra-ui/vue'

export default {
  components: {
    CMenu,
    CMenuButton,
    CMenuList,
    CMenuItem,
    Txt: () => import('../x-atoms/Txt.vue'),
    Link: () => import('../xx-molecules/Link.vue')
  },
  props: {
    links: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

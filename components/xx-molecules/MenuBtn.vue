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
        :value="title"
        as="div"
        :is-truncated="true"
        max-width="10rem"
        font-size="sm"
      />
    </CMenuButton>
    <CMenuList>
      <CMenuItem
        v-for="link in links"
        :key="link.id"
        :_hover="{ cursor: 'initial' }"
      >
        <Link
          :label="link.label"
          :href="link.href"
          :to="link.to"
          :is-external="link.isExternal"
        />
      </CMenuItem>
    </CMenuList>
  </CMenu>
</template>

<script lang="js">
import {
  CMenu,
  CMenuList,
  CMenuItem,
  CMenuButton
} from '@chakra-ui/vue'

export default {
  components: {
    CMenu,
    CMenuList,
    CMenuItem,
    CMenuButton,
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

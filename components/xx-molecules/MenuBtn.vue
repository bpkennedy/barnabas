<template>
  <c-menu v-slot="{ isOpen }">
    <c-menu-button
      :is-active="isOpen"
      variant="ghost"
      variant-color="default"
      right-icon="chevron-down"
      :_hover="{ bg: 'blue.500', color: 'white' }"
      :_expanded="{ shadow: 'outline' }"
    >
      <Txt
        :value="title"
        as="div"
        :is-truncated="true"
        max-width="10rem"
        font-size="sm"
      />
    </c-menu-button>
    <c-menu-list>
      <c-menu-item
        v-for="link in links"
        :key="link.id"
      >
        <Link
          :label="link.label"
          :href="link.href"
          :to="link.to"
          :is-external="link.isExternal"
        />
      </c-menu-item>
    </c-menu-list>
  </c-menu>
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

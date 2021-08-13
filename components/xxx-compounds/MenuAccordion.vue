<template>
  <CAccordion :allow-multiple="true">
    <CAccordionItem
      v-for="item in navigationItems"
      :key="item.name"
      :is-open="false"
    >
      <CAccordionHeader
        padding="var(--bnb-spacing-md)"
        background="var(--bnb-color-whitealpha-900)"
        :_expanded="{ shadow: 'none' }"
        :_focus="{ shadow: 'none' }"
      >
        <Txt>
          {{ item.display }}
        </Txt>
        <CAccordionIcon v-if="item.links.length > 0" />
      </CAccordionHeader>
      <CAccordionPanel
        v-if="item.links.length > 0"
        padding="var(--bnb-spacing-md)"
        background="var(--bnb-color-blue-100)"
        color="var(--bnb-color-blackalpha-800)"
      >
        <CStack align="flex-start">
          <CBox
            v-for="link in item.links"
            :key="link.title"
            padding="var(--bnb-spacing-2xs)"
          >
            <Link
              :title="link.title"
              :to="link.to"
            />
          </CBox>
        </CStack>
      </CAccordionPanel>
    </CAccordionItem>
  </CAccordion>
</template>

<script lang="js">
import { mapState } from 'vuex'
import {
  CStack,
  CBox,
  CAccordion,
  CAccordionPanel,
  CAccordionItem,
  CAccordionIcon,
  CAccordionHeader
} from '@chakra-ui/vue'

export default {
  components: {
    CStack,
    CBox,
    CAccordion,
    CAccordionPanel,
    CAccordionItem,
    CAccordionIcon,
    CAccordionHeader,
    Link: () => import('../xx-molecules/Link.vue'),
    Txt: () => import('../x-atoms/Txt.vue')
  },
  computed: {
    ...mapState(['navigationItems'])
  }
}
</script>

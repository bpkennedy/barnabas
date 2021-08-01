<template>
  <CAccordion :allow-multiple="true">
    <CAccordionItem
      v-for="topLink in topLinks"
      :key="topLink.id"
      :is-open="false"
    >
      <CAccordionHeader
        padding="var(--bnb-spacing-md)"
        background="var(--bnb-color-whitealpha-900)"
        :_expanded="{ shadow: 'none' }"
        :_focus="{ shadow: 'none' }"
      >
        <Txt :value="topLink.title" />
        <CAccordionIcon />
      </CAccordionHeader>
      <CAccordionPanel
        padding="var(--bnb-spacing-md)"
        background="var(--bnb-color-blue-100)"
        color="var(--bnb-color-blackalpha-800)"
      >
        <CStack align="flex-start">
          <CBox
            v-for="link in topLink.links"
            :key="link.id"
            padding="var(--bnb-spacing-2xs)"
          >
            <Link
              :label="link.label"
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
    ...mapState(['topLinks'])
  }
}
</script>

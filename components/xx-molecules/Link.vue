<template>
  <CLink
    :as="as"
    :to="to"
    :href="href"
  >
    <CFlex align="center" justify="center">
      <Txt
        as="div"
        :is-truncated="true"
        max-width="var(--bnb-sizing-xl)"
        :font-size="fontSize"
      >
        {{ title }}
      </Txt>
      <CBox
        v-if="isExternal"
        mx="var(--bnb-spacing-3xs)"
        mb="var(--bnb-spacing-3xs)"
      >
        <Icon name="external-link-alt" />
      </CBox>
    </CFlex>
  </CLink>
</template>

<script lang="js">
import {
  CLink,
  CFlex,
  CBox
} from '@chakra-ui/vue'

export default {
  components: {
    CLink,
    CFlex,
    CBox,
    Txt: () => import('../x-atoms/Txt.vue'),
    Icon: () => import('../x-atoms/Icon.vue')
  },
  props: {
    title: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: '',
      required: false
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    as: {
      type: String,
      default: 'a',
      validator: val => ['a', 'router-link', 'nuxt-link'].includes(val)
    },
    to: {
      type: [String, Object],
      default: '',
      required: false
    },
    fontSize: {
      type: String,
      default: 'md',
      validator: val => [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl'
      ].includes(val)
    }
  }
}
</script>

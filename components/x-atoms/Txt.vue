<template>
  <CText
    :is-truncated="isTruncated"
    :as="as"
    :font-size="fontSize"
    :color="color"
    :max-width="maxWidth"
  >
    <slot />
  </CText>
</template>

<script lang="js">
import {
  CText
} from '@chakra-ui/vue'

export default {
  components: {
    CText
  },
  props: {
    as: {
      type: String,
      default: 'p',
      validator: val => [
        'p',
        'span',
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'label'
      ].includes(val)
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
    },
    isTruncated: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'default'
    },
    maxWidth: {
      type: String,
      default: '100%'
    }
  }
}
</script>

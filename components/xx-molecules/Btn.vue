<template>
  <CButton
    :variant-color="variantColor"
    :variant="variant"
    :z-index="zIndex"
  >
    <CBox
      v-if="leftIcon"
      mr="var(--bnb-spacing-3xs)"
    >
      <Icon :name="leftIcon" />
    </CBox>
    <Txt
      as="div"
      :font-size="fontSize"
    >
      {{ title }}
    </Txt>
    <CBox
      v-if="rightIcon"
      ml="var(--bnb-spacing-3xs)"
    >
      <Icon :name="rightIcon" />
    </CBox>
  </CButton>
</template>

<script lang="js">
import {
  CButton,
  CBox
} from '@chakra-ui/vue'

export default {
  components: {
    CButton,
    CBox,
    Icon: () => import('../x-atoms/Icon.vue'),
    Txt: () => import('../x-atoms/Txt.vue')
  },
  props: {
    title: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      default: 'solid',
      validator: val => ['solid', 'outline', 'ghost', 'link'].includes(val)
    },
    variantColor: {
      type: String,
      default: 'primary'
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
    leftIcon: {
      type: [String, null],
      default: null
    },
    rightIcon: {
      type: [String, null],
      default: null
    },
    zIndex: {
      type: [String, null],
      default: null
    }
  }
}
</script>

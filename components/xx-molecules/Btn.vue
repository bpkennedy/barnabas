<template>
  <CButton
    :variant-color="variantColor"
    :variant="variant"
  >
    <CBox
      v-if="leftIcon"
      mr="1"
    >
      <Icon :name="leftIcon" />
    </CBox>
    <Txt :value="label" as="div" />
    <CBox
      v-if="rightIcon"
      ml="1"
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
    label: {
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
    leftIcon: {
      type: String || null,
      default: null
    },
    rightIcon: {
      type: String || null,
      default: null
    }
  }
}
</script>

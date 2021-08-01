<template>
  <CIcon
    :name="name"
    :size="size"
    :color="color"
    :focusable="focusable"
  />
</template>

<script lang="js">
import {
  CIcon
} from '@chakra-ui/vue'

export default {
  components: {
    CIcon
  },
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '1em'
    },
    color: {
      type: String,
      default: 'currentColor'
    },
    focusable: {
      type: Boolean,
      default: false
    }
  }
}
</script>

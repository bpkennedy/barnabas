<template>
  <CBox :display="['initial', 'initial', 'none', 'none']">
    <slot />
  </CBox>
</template>

<script lang="js">
import {
  CBox
} from '@chakra-ui/vue'

export default {
  components: {
    CBox
  }
}
</script>

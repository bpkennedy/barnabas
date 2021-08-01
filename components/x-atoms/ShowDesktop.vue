<template>
  <CBox :display="['none', 'none', 'initial', 'initial']">
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

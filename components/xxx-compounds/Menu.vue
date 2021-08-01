<template>
  <CFlex align="center" justify="center">
    <Link href="https://www.google.com" label="Google" :is-external="true" />
    <Link href="https://www.google.com" label="Google" :is-external="true" />
    <Link href="https://www.google.com" label="Google" :is-external="true" />
  </CFlex>
</template>

<script lang="js">
import {
  CFlex
} from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    Link: () => import('../xx-molecules/Link.vue')
  }
}
</script>

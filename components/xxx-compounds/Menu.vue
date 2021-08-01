<template>
  <CFlex align="center" justify="center">
    <MenuBtn
      v-for="topLink in topLinks"
      :key="topLink.id"
      :links="topLink.links"
      :title="topLink.title"
    />
  </CFlex>
</template>

<script lang="js">
import {
  CFlex
} from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    MenuBtn: () => import('../xx-molecules/MenuBtn.vue')
  },
  data () {
    return {
      topLinks: [{
        id: 1,
        title: 'I\'m New',
        links: [{
          id: 1,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 2,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 3,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 4,
          label: 'Google',
          to: 'https://www.google.com'
        }]
      }, {
        id: 2,
        title: 'Get Involved',
        links: [{
          id: 1,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 2,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 3,
          label: 'Google',
          to: 'https://www.google.com'
        }]
      }, {
        id: 3,
        title: 'Events',
        links: [{
          id: 1,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 2,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 3,
          label: 'Google',
          to: 'https://www.google.com'
        }]
      }, {
        id: 4,
        title: 'Resources',
        links: [{
          id: 1,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 2,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 3,
          label: 'Google',
          to: 'https://www.google.com'
        }]
      }, {
        id: 5,
        title: 'About',
        links: [{
          id: 1,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 2,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 3,
          label: 'Google',
          to: 'https://www.google.com'
        }]
      }, {
        id: 6,
        title: 'Sundays',
        links: [{
          id: 1,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 2,
          label: 'Google',
          to: 'https://www.google.com'
        }, {
          id: 3,
          label: 'Google',
          to: 'https://www.google.com'
        }]
      }]
    }
  }
}
</script>

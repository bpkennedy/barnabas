<template>
  <CBox v-if="!loading" d="flex">
    <Txt as="div">
      This is the events overview page, no slug
    </Txt>
  </CBox>
</template>

<script>
import { mapState } from 'vuex'
// import { DATA_IS_LOADING_ACTION, DATA_DONE_LOADING_ACTION } from '@/store'
// import { EVENTS } from '~/constants'

export default {
  components: {
    Txt: () => import('../components/x-atoms/Txt.vue')
  },
  asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  },
  data () {
    return {
      loadedItem: {}
    }
  },
  computed: {
    ...mapState(['selectedItem', 'loading'])
  },
  created () {
    this.shortLoadSelectedItem()
  },
  methods: {
    async shortLoadSelectedItem () {
      // if (!this.selectedItem.title) {
      //   this.$store.dispatch(DATA_IS_LOADING_ACTION)
      //   this.loadedItem = await this.$content(`/${EVENTS}/${this.slug}`).fetch()
      //   this.$store.dispatch(DATA_DONE_LOADING_ACTION)
      // } else {
      //   this.loadedItem = this.selectedItem
      // }
    }
  }
}
</script>

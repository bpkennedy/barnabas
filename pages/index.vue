<template>
  <div class="container">
    <CBox v-bind="mainStyles[colorMode]">
      <CHeading text-align="center" mb="4">
        ⚡️
        <Txt as="h1" font-size="4xl">
          {{ title }}
        </Txt>
      </CHeading>
      <div @click="selectItem">
        test this
      </div>
      <CFlex justify="center" direction="column" align="center">
        <CBox mb="3">
          <CIconButton
            mr="3"
            :icon="colorMode === 'light' ? 'moon' : 'sun'"
            :aria-label="`Switch to ${
              colorMode === 'light' ? 'dark' : 'light'
            } mode`"
            @click="toggleColorMode"
          />
          <CButton
            left-icon="info"
            variant-color="blue"
            @click="showToast"
          >
            Show Toast
          </CButton>
        </CBox>
        <CAvatarGroup>
          <CAvatar
            name="Evan You"
            alt="Evan You"
            src="https://pbs.twimg.com/profile_images/1206997998900850688/cTXTQiHm_400x400.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar
            name="Jonathan Bakebwa"
            alt="Jonathan Bakebwa"
            src="https://res.cloudinary.com/xtellar/image/upload/v1572857445/me_zqos4e.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar
            name="Segun Adebayo"
            alt="Segun Adebayo"
            src="https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg"
          >
            <CAvatarBadge size="1.0em" bg="green.500" />
          </CAvatar>
          <CAvatar src="pop">
            <CAvatarBadge size="1.0em" border-color="papayawhip" bg="tomato" />
          </CAvatar>
        </CAvatarGroup>
        <CButton
          left-icon="close"
          variant-color="red"
          mt="3"
          @click="showModal = true"
        >
          Delete Account
        </CButton>
        <CModal :is-open="showModal">
          <CModalOverlay />
          <CModalContent>
            <CModalHeader>Are you sure?</CModalHeader>
            <CModalBody>Deleting user cannot be undone</CModalBody>
            <CModalFooter>
              <CButton @click="showModal = false">
                Cancel
              </CButton>
              <CButton
                margin-left="3"
                variant-color="red"
                @click="showModal = false"
              >
                Delete User
              </CButton>
            </CModalFooter>
            <CModalCloseButton @click="showModal = false" />
          </CModalContent>
        </CModal>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CAvatarGroup,
  CAvatar,
  CAvatarBadge,
  CModal,
  CModalContent,
  CModalOverlay,
  CModalHeader,
  CModalFooter,
  CModalBody,
  CModalCloseButton,
  CIconButton,
  CFlex,
  CHeading
} from '@chakra-ui/vue'
import { SELECTED_ITEM_ACTION } from '~/store'

export default {
  name: 'App',
  components: {
    CBox,
    CButton,
    CAvatarGroup,
    CAvatar,
    CAvatarBadge,
    CModal,
    CModalContent,
    CModalOverlay,
    CModalHeader,
    CModalFooter,
    CModalBody,
    CModalCloseButton,
    CIconButton,
    CFlex,
    CHeading,
    Txt: () => import('../components/x-atoms/Txt.vue')
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data () {
    return {
      title: 'St. Barnabas\' Episcopal Church',
      showModal: false,
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      }
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'St. Barnabas\' Episcopal Church, Florissant, Missouri - Home Page. St. Barnabas\' Episcopal Church is a welcoming, energized, loving, multi-cultural parish serving North St. Louis County and many surrounding areas. Worship style is traditional but the congregation is informal. Come join us in worshipping our Lord and Savior.'
        }
      ]
    }
  },
  computed: {
    colorMode () {
      return this.$chakraColorMode()
    },
    theme () {
      return this.$chakraTheme()
    },
    toggleColorMode () {
      return this.$toggleColorMode
    }
  },
  methods: {
    showToast () {
      this.$toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 10000,
        isClosable: true
      })
    },
    selectItem () {
      this.$store.dispatch(SELECTED_ITEM_ACTION, {
        item: 'Welcome',
        itemType: 'messages',
        router: this.$nuxt.$router
      })
    }
  }
}
</script>

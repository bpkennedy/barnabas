<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox
          font-family="body"
          as="main"
          d="flex"
          w="100vw"
          h="100vh"
          flex-dir="column"
        >
          <CReset />
          <NavBar />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>
<script>
import {
  CThemeProvider,
  CColorModeProvider,
  CReset,
  CBox
} from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    NavBar: () => import('../components/xxxx-organisms/NavBar.vue')
  }
}
</script>

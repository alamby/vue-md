<template>
  <div id="app">

  <appbar></appbar>
  <drawer></drawer>
  <container></container>
  <appfooter></appfooter>
  <themeDialog></themeDialog>

  </div>

</template>

<script>

import appbar from './components/Appbar'
import drawer from './components/Drawer'
import container from './components/Container'
import appfooter from './components/Footer'
import themeDialog from './components/ThemeDialog'

export default {
  name: 'app',
  components: {
    appbar,
    drawer,
    container,
    appfooter,
    themeDialog
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
</style>

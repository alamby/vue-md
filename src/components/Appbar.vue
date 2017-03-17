<template>
  <header class="mdui-appbar mdui-appbar-fixed">
    <div class="mdui-toolbar mdui-color-theme">
      <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-drawer="{target: '#main-drawer'}"><i class="mdui-icon material-icons"></i></span>
      <a href="./" class="mdui-typo-headline mdui-hidden-xs">CHAOFAN</a>
            <a href="" class="mdui-typo-title">Material Design</a>
          <div class="mdui-toolbar-spacer"></div>
      <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-dialog="{target: '#dialog-docs-theme'}"><i class="mdui-icon material-icons"></i></span>
      <span class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-menu="{target: '#header-menu', fixed: true}"><i class="mdui-icon material-icons"></i></span>
      <ul class="mdui-menu" id="header-menu">
        <li class="mdui-menu-item">
          <a href="../" class="mdui-ripple">网站首页</a>
        </li>
        <li class="mdui-menu-item">
          <a href="https://github.com/alamby/" target="_blank" class="mdui-ripple">Github</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'appbar',
  data () {
    return {
      msg: 'Welcome to My Vue.js appbar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

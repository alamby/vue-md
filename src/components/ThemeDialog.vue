<template>
  <div class="doc-footer-nav mdui-color-theme">
    <div class="mdui-container">
      <div class="mdui-row">
              <div class="mdui-col-xs-2 mdui-col-sm-6 doc-footer-nav-left"></div>

              <a href="./" class="mdui-ripple mdui-color-theme mdui-col-xs-10 mdui-col-sm-6 doc-footer-nav-right">
          <div class="doc-footer-nav-text">
            <i class="mdui-icon material-icons"></i>
            <span class="doc-footer-nav-direction">Next</span>
            <div class="doc-footer-nav-chapter">Go</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'themeDialog',
  data () {
    return {
        msg: 'Welcome to My Vue.js themeDialog'
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

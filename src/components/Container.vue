<template>
  <div class="mdui-container doc-container doc-no-cover">
    <h1 class="doc-title mdui-text-color-theme">Welcome</h1>
    <div class="doc-intro mdui-typo">
      <p>This is a Material Design demo page!</p>
      <a href="http://www.fanc.win" class="mdui-btn mdui-btn-raised mdui-color-theme-accent mdui-ripple">Home</a>
    </div>

    <nav class="doc-toc mdui-text-color-theme">
      <ul>
        <li><a data-scroll="" href="/">首页</a></li>
        <!--<li><a data-scroll href="#cdn">CDN</a></li>-->
        <li><a data-scroll="" href="https://github.com/alamby/">Github</a></li>
      </ul>
    </nav>

    <div class="doc-chapter">
      <div class="mdui-typo">
        <h4 class="doc-article-title">Just scratch from here <a class="doc-anchor" id="build"></a></h4>
        <p>Catch me at <a href="https://github.com/alamby/" target="_blank">Github</a> ,if you can</p>
        <div class="mdui-table-fluid">
          <table class="mdui-table">
            <thead>
              <tr>
                <th style="min-width: 180px;">命令</th>
                <th>说明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>导航</code></td>
                <td><a href="http://nav.fanc.win" target="_blank">Go</a></td>
              </tr>
              <tr>
                <td><code>Blog</code></td>
                <td><a href="http://blog.fanc.win" target="_blank">Go</a></td>
              </tr>
              <tr>
                <td><code>Twitter</code></td>
                <td><a href="http://twitter.com/coolrender" target="_blank">Go</a></td>
              </tr>
              <tr>
                <td><code>知乎</code></td>
                <td><a href="https://www.zhihu.com/people/uestcs" target="_blank">Go</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
      msg: 'Welcome to My Vue.js container'
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

<template>
  <div id="app">
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

  <div class="mdui-drawer mdui-drawer-scrollbar" id="main-drawer" style="overflow-y: hidden;">
    <div class="mdui-list" mdui-collapse="{accordion: true}" style="margin-bottom: 76px;">
      <div class="mdui-collapse-item mdui-collapse-item-open">
        <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue"></i>
          <div class="mdui-list-item-content">开始使用</div>
          <i class="mdui-collapse-item-arrow mdui-icon material-icons"></i>
        </div>
        <div class="mdui-collapse-item-body mdui-list">
          <a href="./download" class="mdui-list-item mdui-ripple ">获取 MDUI</a>
          <a href="./compatibility" class="mdui-list-item mdui-rupple ">兼容性</a>
          <a href="./specs" class="mdui-list-item mdui-ripple ">规范</a>
        </div>
      </div>

      <div class="mdui-collapse-item">
        <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-deep-orange"></i>
          <div class="mdui-list-item-content">样式</div>
          <i class="mdui-collapse-item-arrow mdui-icon material-icons"></i>
        </div>
        <div class="mdui-collapse-item-body mdui-list">
          <a href="./color" class="mdui-list-item mdui-ripple mdui-list-item-active">颜色与主题</a>
          <a href="./font" class="mdui-list-item mdui-ripple ">字体</a>
          <a href="./grid" class="mdui-list-item mdui-ripple ">网格布局</a>
          <a href="./typo" class="mdui-list-item mdui-ripple ">排版</a>
          <a href="./icon" class="mdui-list-item mdui-ripple ">图标</a>
          <a href="./media" class="mdui-list-item mdui-ripple ">媒体</a>
          <a href="./helper" class="mdui-list-item mdui-ripple ">辅助类</a>
          <a href="./shadow" class="mdui-list-item mdui-ripple ">阴影</a>
        </div>
      </div>

      <div class="mdui-collapse-item ">
        <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-green"></i>
          <div class="mdui-list-item-content">组件</div>
          <i class="mdui-collapse-item-arrow mdui-icon material-icons"></i>
        </div>
        <div class="mdui-collapse-item-body mdui-list">
          <a href="./ripple" class="mdui-list-item mdui-ripple ">涟漪动画效果</a>
          <a href="./button" class="mdui-list-item mdui-ripple ">按钮</a>
          <a href="./fab" class="mdui-list-item mdui-ripple ">浮动操作按钮</a>
          <a href="./divider" class="mdui-list-item mdui-ripple ">分隔线</a>
          <a href="./panel" class="mdui-list-item mdui-ripple ">可扩展面板</a>
          <a href="./textfield" class="mdui-list-item mdui-ripple ">文本框</a>
          <a href="./selection_control" class="mdui-list-item mdui-ripple ">选择控制器</a>
          <a href="./slider" class="mdui-list-item mdui-ripple ">滑块</a>
          <a href="./list" class="mdui-list-item mdui-ripple ">列表</a>
          <a href="./list_control" class="mdui-list-item mdui-ripple ">列表控制</a>
          <a href="./grid_list" class="mdui-list-item mdui-ripple ">网格列表</a>
          <a href="./tab" class="mdui-list-item mdui-ripple ">Tab 选项卡</a>
          <a href="./toolbar" class="mdui-list-item mdui-ripple ">工具栏</a>
          <a href="./appbar" class="mdui-list-item mdui-ripple ">应用栏</a>
          <a href="./drawer" class="mdui-list-item mdui-ripple ">抽屉式导航</a>
          <a href="./bottom_nav" class="mdui-list-item mdui-ripple ">底部导航栏</a>
          <a href="./card" class="mdui-list-item mdui-ripple ">卡片</a>
          <a href="./chip" class="mdui-list-item mdui-ripple ">纸片</a>
          <a href="./tooltip" class="mdui-list-item mdui-ripple ">工具提示</a>
          <a href="./snackbar" class="mdui-list-item mdui-ripple ">Snackbar</a>
          <a href="./table" class="mdui-list-item mdui-ripple ">表格</a>
          <a href="./dialog" class="mdui-list-item mdui-ripple ">提示框</a>
          <a href="./menu" class="mdui-list-item mdui-ripple ">菜单</a>
          <a href="./progress" class="mdui-list-item mdui-ripple ">进度指示器</a>
        </div>
      </div>

      <div class="mdui-collapse-item ">
        <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-brown"></i>
          <div class="mdui-list-item-content">JavaScript 插件</div>
          <i class="mdui-collapse-item-arrow mdui-icon material-icons"></i>
        </div>
        <div class="mdui-collapse-item-body mdui-list">
          <a href="./collapse" class="mdui-list-item mdui-ripple ">Collapse</a>
          <a href="./headroom" class="mdui-list-item mdui-ripple ">Headroom</a>
        </div>
      </div>

      <div class="mdui-collapse-item ">
        <div class="mdui-collapse-item-header mdui-list-item mdui-ripple">
          <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-purple"></i>
          <div class="mdui-list-item-content">资源</div>
          <i class="mdui-collapse-item-arrow mdui-icon material-icons"></i>
        </div>
        <div class="mdui-collapse-item-body mdui-list">
          <a href="./material_icon" class="mdui-list-item mdui-ripple ">Material 图标</a>
        </div>
      </div>
    </div>
  </div>

  <div class="mdui-container doc-container doc-no-cover">
    <h1 class="doc-title mdui-text-color-theme">TITLE</h1>
    <div class="doc-intro mdui-typo">
      <p>This is sub title!</p>
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
                <td><code>lscpu</code></td>
                <td>输出当前系统硬件信息</td>
              </tr>
              <tr>
                <td><code>top</code></td>
                <td>实时显示系统中各个进程的资源占用状况</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>

  <div class="doc-footer-nav mdui-color-theme">
    <div class="mdui-container">
      <div class="mdui-row">
              <div class="mdui-col-xs-2 mdui-col-sm-6 doc-footer-nav-left"></div>

              <a href="./compatibility" class="mdui-ripple mdui-color-theme mdui-col-xs-10 mdui-col-sm-6 doc-footer-nav-right">
          <div class="doc-footer-nav-text">
            <i class="mdui-icon material-icons"></i>
            <span class="doc-footer-nav-direction">Next</span>
            <div class="doc-footer-nav-chapter">兼容性</div>
          </div>
        </a>
      </div>
    </div>
  </div>  

  </div>

</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

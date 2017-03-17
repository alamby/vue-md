<template>
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
</template>

<script>
export default {
  name: 'Drawer',
  data () {
    return {
        msg: 'Welcome to My Vue.js drawer'
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

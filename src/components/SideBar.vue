<template id = "SideBar">
    <div class="menu">
    <el-row class="tac">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="2">
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">导航四</span>
        </el-menu-item>
        </el-menu>
    </el-row>
    </div>
</template>

<script>
export default {
    name: "SideBar",
    data: function() {
        return {};
    }
}
</script>

<style>
.app {
  height: 100%;
  overflow: hidden;
  position: relative;
}
.menu {
  height: 100% !important;
  width: 10%;
  float: left;
  background: rgb(84, 92, 100);
}
.tac > ul{
  border-right: none !important;
}
</style>
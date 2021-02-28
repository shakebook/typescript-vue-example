<template>
  <!-- <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/menu">菜单</router-link>
      </li>
      <li>
        <router-link to="/account">用户列表</router-link>
      </li>
    </ul> -->
  <!-- active-text-color="#0D90FC" -->
  <div class="sidebar">
    <el-row class="tac">
      <el-col>
        <el-menu
          :uniqueOpened="true"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#071529"
          text-color="#ddd"
          :default-openeds="['1']"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <router-link to="/"> 首页 </router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/menu"> 菜单 </router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                <router-link to="/account">用户列表</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link to="/role">角色列表</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <template #title>导航二</template>
          </el-menu-item>
          <el-submenu index="5">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { SidebarMenu } from "vue-sidebar-menu";
export default {
  name: "Sidebar",
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
};
</script>
<style scoped>
.sidebar ul li a.link-exact-active-class {
  color: rgb(6, 116, 250);
  font-weight: bold;
  text-decoration: underline;
}

.sidebar {
  width: 300px;
  height: 100%;
  background-color: #051c36;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
}
</style>
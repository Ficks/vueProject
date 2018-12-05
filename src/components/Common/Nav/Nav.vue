<template>
  <!-- <div class="slideNav" :style="{width:isLeftNavHidden?'64px':'220px'}">
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isLeftNavHidden"
    >
      <div class="back" @click="onMenuSlide">
        <i :class="{'el-icon-arrow-left':!isLeftNavHidden,'el-icon-arrow-right':isLeftNavHidden}"></i>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>-->
  <div class="slideNav" :style="{width:isLeftNavHidden?'64px':'220px'}">
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isLeftNavHidden"
      :router="true"
    >
      <div class="back" @click="onMenuSlide">
        <i :class="{'el-icon-arrow-left':!isLeftNavHidden,'el-icon-arrow-right':isLeftNavHidden}"></i>
      </div>

      <template v-for="(oneItem,oneIndex) in listArr">
        <template v-if="!oneItem.children">
          <el-menu-item :index="oneItem.path">
            <i :class="oneItem.icon"></i>
            <span slot="title">{{oneItem.name}}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-submenu :index="oneItem.path">
            <template slot="title">
              <i :class="oneItem.icon"></i>
              <span>{{oneItem.name}}</span>
            </template>
            <template v-for="(twoItem,twoIndex) in oneItem.children">
              <el-menu-item :index="twoItem.path">
                <i :class="twoItem.icon"></i>
                {{twoItem.name}}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>

      <!-- 多级导航用这个 -->
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>-->
      <!-- 一级导航用这个 -->
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
import Nav from "./Nav.js";
export default Nav;
</script>

<style scoped lang="less">
@import url("./Nav.less");
</style>


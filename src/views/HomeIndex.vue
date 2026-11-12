<template>
<div class="page-wrap">
  <header class="top-header">
    <div class="header-left">
      <span>重庆理工大学(学生)</span>
    </div>
    <div class="header-right">
      <span>输入邀请码</span>
      <div class="user-info" @click="$router.push('/account')">
        <img :src="avatarSrc" alt="李思颖" class="header-avatar">
        <span>李思颖</span>
      </div>
    </div>
  </header>
  <div class="container">
    <aside class="sidebar">
      <div class="sidebar-user">
        <img :src="avatarSrc" alt="李思颖" class="user-avatar-img">
        <div class="username">李思颖</div>
      </div>
      <nav class="sidebar-menu">
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-home'}" data-page="page-home" @click.prevent="switchPage('page-home')">
          <img src="@/assets/images/shouye.png" alt="首页" class="menu-icon">
          <span>首页</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-common'}" @click.prevent="switchPage('page-common')">
          <img src="@/assets/images/changyong.png" alt="常用" class="menu-icon">
          <span>常用</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-app'}" @click.prevent="switchPage('page-app')">
          <img src="@/assets/images/yingyong.png" alt="应用中心" class="menu-icon">
          <span>应用中心</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-course'}" @click.prevent="switchPage('page-course')">
          <img src="@/assets/images/kecheng.png" alt="课程" class="menu-icon">
          <span>课程</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-sign'}" @click.prevent="switchPage('page-sign')">
          <img src="@/assets/images/shu.png" alt="微专业报名" class="menu-icon">
          <span>微专业报名</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-note'}" @click.prevent="switchPage('page-note')">
          <img src="@/assets/images/jibiji.png" alt="笔记" class="menu-icon">
          <span>笔记</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-msg'}" @click.prevent="switchPage('page-msg')">
          <img src="@/assets/images/a-xiaoxixianxing.png" alt="消息" class="menu-icon">
          <span>消息</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-group'}" @click.prevent="switchPage('page-group')">
          <img src="@/assets/images/xiaozuyanxiu.png" alt="小组" class="menu-icon">
          <span>小组</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-cloud'}" @click.prevent="switchPage('page-cloud')">
          <img src="@/assets/images/yunpan.png" alt="云盘" class="menu-icon">
          <span>云盘</span>
        </a>
        <a href="#" class="menu-item" :class="{active:activeMenu==='page-contact'}" @click.prevent="switchPage('page-contact')">
          <img src="@/assets/images/tongxunlu.png" alt="通讯录" class="menu-icon">
          <span>通讯录</span>
        </a>
      </nav>
    </aside>
    <main class="main-content">
      <div v-if="activeMenu==='page-home'" class="page-content">
        <h2>首页</h2>
        <p>首页内容区域</p>
      </div>
      <div v-if="activeMenu==='page-common'" class="page-content">
        <h2>常用</h2>
        <p>常用页面</p>
      </div>
      <div v-if="activeMenu==='page-app'" class="page-content">
        <h2>应用中心</h2>
        <p>应用中心页面</p>
      </div>
      <div v-if="activeMenu==='page-course'" class="page-content">
        <h2>课程</h2>
        <p>课程页面</p>
      </div>
      <div v-if="activeMenu==='page-sign'" class="page-content">
        <h2>微专业报名</h2>
        <p>微专业报名页面</p>
      </div>
      <div v-if="activeMenu==='page-note'" class="page-content">
        <h2>笔记</h2>
        <p>笔记页面</p>
      </div>
      <div v-if="activeMenu==='page-msg'" class="page-content">
        <h2>消息</h2>
        <p>消息页面</p>
      </div>
      <div v-if="activeMenu==='page-group'" class="page-content">
        <h2>小组</h2>
        <p>小组页面</p>
      </div>
      <div v-if="activeMenu==='page-cloud'" class="page-content">
        <h2>云盘</h2>
        <p>云盘页面</p>
      </div>
      <div v-if="activeMenu==='page-contact'" class="page-content">
        <h2>通讯录</h2>
        <p>通讯录页面</p>
      </div>
    </main>
  </div>
</div>
</template>

<script setup>
import {ref,onMounted} from 'vue'
// 导入默认头像
import defaultAvatar from '@/assets/images/renyuan.png'

const activeMenu = ref('page-home')
const avatarSrc = ref(defaultAvatar)

function switchPage(pageId){
  activeMenu.value = pageId
}

onMounted(()=>{
  const cacheImg = localStorage.getItem('img')
  if(cacheImg){
    avatarSrc.value = cacheImg
  }
})
</script>


<style scoped>
@import "@/assets/css/layout.css";
</style>

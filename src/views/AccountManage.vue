<template>
<div class="account-wrap">
  <div class="account-title">
    <img src="@/assets/images/zhanghaoguanli.png" alt="账号管理" class="acc-icon">
    <span>{{ currentLang === 'cn' ? textList[0].cn : textList[0].en }}</span>
  </div>
  <div class="account-tab">
    <div
      v-for="(item, idx) in tabItems"
      :key="idx"
      class="tab-item"
      :class="{ active: activeTabIndex === idx }"
      @click="handleTabClick(idx)"
    >
      {{ currentLang === 'cn' ? item.cn : item.en }}
    </div>
  </div>

  <!--基本资料-->
  <div v-if="currentShowId === 'info'" class="account-content">
    <div class="form-row">
      <label>姓名</label>
      <span class="form-value">李思颖</span>
    </div>
    <div class="form-row">
      <label>id</label>
      <span class="form-value">418661496</span>
    </div>
    <div class="form-row">
      <label>性别</label>
      <div class="radio-group">
        <label class="radio-item">
          <input type="radio" name="gender" value="male">
          <span>男</span>
        </label>
        <label class="radio-item">
          <input type="radio" name="gender" value="female" checked>
          <span>女</span>
        </label>
      </div>
    </div>
    <div class="form-row">
      <label>手机号</label>
      <span class="form-value">
        13389623403
        <a href="#" class="link-edit">修改</a>
      </span>
    </div>
    <div class="form-row">
      <label>单位</label>
      <a href="#" class="link-add">+ 添加单位</a>
    </div>
    <div class="form-row unit-row">
      <div class="unit-box">
        <div class="unit-name">重庆理工大学</div>
        <div class="unit-sub">学号/工号:12523040221</div>
      </div>
    </div>
    <div class="form-row unit-row">
      <div class="unit-box">
        <div class="unit-name">重庆理工大学图书馆</div>
        <div class="unit-sub">学号/工号:12523040221</div>
      </div>
    </div>
  </div>

  <!--修改头像-->
  <div v-if="currentShowId === 'avatar'" class="account-content">
    <div class="form-row">
      <label>头像</label>
      <div class="form-value">
        <img v-if="showImg" :src="showImg" width="100" alt="头像预览">
        <input ref="fileIn" type="file" accept="image/*" @change="fileInOnChange">
        <button ref="saveBtn" @click="saveBtnClick">保存头像</button>
      </div>
    </div>
  </div>

  <!--密码管理-->
<div v-if="currentShowId === 'pwd'" class="account-content">
  <div class="form-row">
    <label>旧密码</label>
    <input v-model="oldPwdInput" type="password">
  </div>
  <div class="form-row">
    <label>新密码</label>
    <input v-model="newPwdInput" type="password">
  </div>
  <div class="form-row">
    <label>确认密码</label>
    <input v-model="surePwdInput" type="password">
  </div>
  <div class="form-row">
    <label></label>
    <button @click="pwdSubmitBtnClick">提交修改</button>
    <button @click="goForgetBtnClick">忘记密码</button>
  </div>
  <el-dialog v-model="forgetPop" title="忘记密码页面">
    <p>忘记密码页面</p>
    <template #footer>
      <el-button @click="backPwdBtnClick">返回密码管理</el-button>
    </template>
  </el-dialog>
</div>


  <!--注销账号-->
  <div v-if="currentShowId === 'cancel'" class="account-content">
    <div class="form-row">
      <label></label>
      <button ref="openBtn" @click="openBtnClick">申请注销账号</button>
    </div>
    <el-dialog v-model="pop" title="提示">
      <p>确定要注销账号吗？</p>
      <template #footer>
        <el-button @click="closeBtnClick">取消</el-button>
        <el-button type="danger" @click="okBtnClick">确认注销</el-button>
      </template>
    </el-dialog>
  </div>

  <!--语言-->
  <div v-if="currentShowId === 'lang'" class="account-content">
    <div class="form-row">
      <label>语言选择</label>
      <button ref="btnCn" @click="handleCn">中文</button>
      <button ref="btnEn" @click="handleEn">English</button>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useAvatar } from '@/composables/avatar'
import { usePwd } from '@/composables/pwd'
import { useCancel } from '@/composables/cancel'
import { useLang } from '@/composables/lang'

const { fileIn, showImg, saveBtn, fileInOnChange, saveBtnClick } = useAvatar()
const {
  oldPwdInput, newPwdInput, surePwdInput, pwdSubmitBtn, goForgetBtn, forgetPop,
  pwdSubmitBtnClick, goForgetBtnClick, backPwdBtnClick
} = usePwd()
const { openBtn, pop, okBtn, closeBtn, openBtnClick, closeBtnClick, okBtnClick } = useCancel()
const {
  btnCn, btnEn, tabItems, contentBox, textList,
  activeTabIndex, currentShowId, backInfoTab, btnCnClick, btnEnClick
} = useLang()

const currentLang = ref('cn')

function handleTabClick(idx) {
  activeTabIndex.value = idx
  currentShowId.value = contentBox.value[idx]
}

function handleCn() {
  currentLang.value = 'cn'
  btnCnClick()
}
function handleEn() {
  currentLang.value = 'en'
  btnEnClick()
}
</script>

<style scoped>
@import "@/assets/css/account.css";
</style>

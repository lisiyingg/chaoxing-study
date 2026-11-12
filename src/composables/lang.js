import { ref } from 'vue'

export function useLang() {
  const btnCn = ref(null)
  const btnEn = ref(null)
  const tabItems = ref([
    { cn: "基本资料", en: "Profile" },
    { cn: "修改头像", en: "Change Avatar" },
    { cn: "密码管理", en: "Password" },
    { cn: "注销账号", en: "Cancel Account" },
    { cn: "语言", en: "Language" }
  ])
  const contentBox = ref(['info', 'avatar', 'pwd', 'cancel', 'lang'])
  const activeTabIndex = ref(0)
  const currentShowId = ref('info')

  const textList = ref([
    { label: "账号管理", cn: "账号管理", en: "Account Manage" },
    { label: "tab0", cn: "基本资料", en: "Profile" },
    { label: "tab1", cn: "修改头像", en: "Change Avatar" },
    { label: "tab2", cn: "密码管理", en: "Password" },
    { label: "tab3", cn: "注销账号", en: "Cancel Account" },
    { label: "tab4", cn: "语言", en: "Language" }
  ])

  function backInfoTab() {
    activeTabIndex.value = 0
    currentShowId.value = 'info'
  }

  function btnCnClick() {
    backInfoTab();
  }
  function btnEnClick() {
    backInfoTab();
  }

  return {
    btnCn,
    btnEn,
    tabItems,
    contentBox,
    textList,
    activeTabIndex,
    currentShowId,
    backInfoTab,
    btnCnClick,
    btnEnClick
  }
}

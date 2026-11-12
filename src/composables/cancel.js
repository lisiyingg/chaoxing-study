import { ElMessage } from 'element-plus'
import { ref } from 'vue'

export function useCancel() {
  const openBtn = ref(null)
  const pop = ref(false)
  const okBtn = ref(null)
  const closeBtn = ref(null)

  function openBtnClick() {
    pop.value = true;
  }
  function closeBtnClick() {
    pop.value = false;
  }
  function okBtnClick() {
    ElMessage.success('账号注销成功！');
    pop.value = false;
  }

  return {
    openBtn,
    pop,
    okBtn,
    closeBtn,
    openBtnClick,
    closeBtnClick,
    okBtnClick
  }
}

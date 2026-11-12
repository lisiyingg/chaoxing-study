import { ElMessage } from 'element-plus'
import { ref, onMounted } from 'vue'

export function useAvatar() {
  const fileIn = ref(null)
  const showImg = ref('')
  const saveBtn = ref(null)

  function fileInOnChange(e) {
    let f = e.target.files[0];
    if (!f) return;
    let r = new FileReader();
    r.onload = function () {
      showImg.value = r.result;
    };
    r.readAsDataURL(f);
  }

  function saveBtnClick() {
    if (!showImg.value) {
      ElMessage.warning('先选图片');
      return;
    }
    localStorage.setItem('img', showImg.value);
    ElMessage.success('保存成功');
  }

  onMounted(() => {
    let old = localStorage.getItem('img');
    if (old) {
      showImg.value = old;
    }
  })

  return {
    fileIn,
    showImg,
    saveBtn,
    fileInOnChange,
    saveBtnClick
  }
}

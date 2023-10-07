<templates>
  <div>
    <t-page-header>index.vue示例</t-page-header>
  </div>
</templates>
<script setup>
import { ref, onMounted } from "vue";

// 定义变量
const count = ref(0);

// 定义方法
function increment() {
  count.value++;
}

// 生命周期钩子
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>
<style lang="less">
// 如果需要导入样式
@import "./index.less";

//...
</style>
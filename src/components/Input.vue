<script setup lang="tsx">
import { ref } from 'vue';
const props = withDefaults(
  defineProps<{
    defaultValue: string;
  }>(),
  {
    defaultValue: ''
  }
);
const { defaultValue } = props;
const handleInput = (e) => {
  console.info(e.target.value);
  value.value = e.target.value;
};
const value = ref(defaultValue);

defineRender(() => {
  return (
    <div>
      <input
        onInput={handleInput}
        value={value.value}
      />
    </div>
  );
});
</script>
<style lang="scss" scoped></style>

<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  color: {
    type: String,
    default: "#F76B8A",
  },
  hoverColor: {
    type: String,
    default: "#f5849c",
  },
});

const emits = defineEmits(["click"]);

const handleClick = (event) => {
  emits("click", event);
};

const buttonClass = computed(() => {
  return `styled-button ${props.type}`;
});

const buttonColor = computed(() => props.color);
const buttonHoverColor = computed(() => props.hoverColor);

document.documentElement.style.setProperty("--button-color", buttonColor.value);
document.documentElement.style.setProperty(
  "--button-hover-color",
  buttonHoverColor.value
);
</script>

<style scoped>
.styled-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--button-color);
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.styled-button:hover {
  background-color: var(--button-hover-color);
  transform: scale(1.05);
}

.styled-button:active {
  transform: scale(0.95);
}
</style>

<template>
    <button :style="{ color }" @click="$emit('click', $attrs)">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      color: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
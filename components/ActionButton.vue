<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <button class="neu-button">{{ title }}</button>

</template>

<style scoped>
button {
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: .25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 30px;
  font-family: Calistoga, serif;
  background-color: var(--btn-color);
  border-radius: 60px;
  outline: none;
  box-shadow: 0 0 1em .25em var(--glow-color),
  0 0 4em 1em var(--glow-spread-color),
  inset 0 0 .75em .25em var(--glow-color);
  text-shadow: 0 0 .5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
}

button::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: .7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
}

button:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em .25em var(--glow-color),
  0 0 4em 2em var(--glow-spread-color),
  inset 0 0 .75em .25em var(--glow-color);
}

button:active {
  box-shadow: 0 0 0.6em .25em var(--glow-color),
  0 0 2.5em 2em var(--glow-spread-color),
  inset 0 0 .5em .25em var(--glow-color);
}
</style>
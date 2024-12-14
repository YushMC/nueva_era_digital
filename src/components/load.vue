<template>
  <div class="container_spinner">
    <div class="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../styles/prefabs" as *;
@use "../styles/variables" as *;
.container_spinner {
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100 !important;
  backdrop-filter: blur($blur / 4);
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  .spinner {
    position: relative;
    width: 52.8px;
    height: 52.8px;
    perspective: 105.6px;

    div {
      width: 100%;
      height: 100%;
      background: #474bff;
      position: absolute;
      left: 50%;
      transform-origin: left;
      animation: spinner-16s03x 2s infinite;

      &:nth-child(1) {
        animation-delay: 0.15s;
      }
      &:nth-child(2) {
        animation-delay: 0.3s;
      }
      &:nth-child(3) {
        animation-delay: 0.45s;
      }

      &:nth-child(4) {
        animation-delay: 0.6s;
      }

      &:nth-child(5) {
        animation-delay: 0.75s;
      }
    }
  }
}

@keyframes spinner-16s03x {
  0% {
    transform: rotateY(0deg);
  }

  50%,
  80% {
    transform: rotateY(-180deg);
  }

  90%,
  100% {
    opacity: 0;
    transform: rotateY(-180deg);
  }
}
</style>

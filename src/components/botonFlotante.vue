<template>
  <div class="float_button">
    <a href="" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-whatsapp"></i>
      <div class="div_info">
        <h6>¡Envianos un WhatsApp!</h6>
      </div>
    </a>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;
.float_button {
  position: fixed;
  bottom: 10%;
  right: 0;
  z-index: 100;
  width: 10%;
  a {
    width: 100%;
    color: #000;
    border-radius: 100%;
    padding: 18% 20%;
    background: #02a102;
    text-align: center;
    line-height: 1.5;
    filter: drop-shadow(5px 5px 10px #00000054);

    transition: all 0.3s linear;

    i {
      color: #fff;
      transform: scale(3);
      transition: all 0.3s linear;
    }
    .div_info {
      width: 200px;
      position: absolute;
      left: -210px;
      top: 20%;
      opacity: 0;
      visibility: hidden;
      padding: 10% 2%;
      background: #fff;
      border-radius: $border_radius;
      border: 2px solid $color_principal;
      transition: all 0.3s linear;
      h6 {
        font-size: 1rem;
      }
    }
    &:hover {
      background-color: #025a02;
      i {
        transform: scale(3.2);
      }
      .div_info {
        opacity: 1;
        visibility: visible;
      }
    }
  }
}
</style>

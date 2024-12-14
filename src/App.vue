<script setup>
import BotonFlotante from "./components/botonFlotante.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

// componente de carga y

// import Load from "./components/load.vue";
</script>

<template>
  <Header></Header>
  <main class="container_router_view">
    <router-view v-slot="{ Component }">
      <transition name="blur" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <BotonFlotante></BotonFlotante>
    <section class="action_div">
      <h5>Contáctanos</h5>
      <h3>¿Estás listo para tu siguiente proyecto?</h3>
      <div class="text_action_div">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quasi.
        </p>
        <div class="container_buttons">
          <a href="">Boton</a>
        </div>
      </div>
    </section>
  </main>
  <Footer></Footer>
</template>

<style lang="scss" scoped>
// Transición de desenfoque
.blur {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s, filter 0.5s;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    filter: blur(10px); // Desenfoque inicial o final
  }

  &-leave-from,
  &-enter-to {
    opacity: 1;
    filter: blur(0); // Sin desenfoque
  }
}
.container_router_view {
  position: relative;
}
</style>

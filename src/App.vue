<script setup>
import { computed } from "vue";
import BotonFlotante from "./components/botonFlotante.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import { useRoute } from "vue-router";

// Accede a la información de la ruta actual
const route = useRoute();

// Detecta si estás en la ruta específica
const isContactPage = computed(() => route.path === "/contact");
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

    <section class="action_div" v-if="!isContactPage">
      <h5>Contáctanos</h5>
      <h3>¿Estás listo para tu siguiente proyecto?</h3>
      <div class="text_action_div">
        <p>
          ¡Estamos aquí para ayudarte! Contáctanos y juntos impulsaremos el
          crecimiento de tu negocio con nuestras soluciones tecnológicas
          innovadoras..
        </p>
        <div class="container_buttons">
          <router-link to="/contact">Contactar</router-link>
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
    transition: opacity 0.3s, filter 0.3s;
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
  user-select: none;
}
</style>

<template>
  <div class="container_front_page" ref="containerRef">
    <div class="container_text">
      <h1>{{ titulo_portada }}</h1>
      <p>{{ parrafo_portada }}</p>
      <div class="container_buttons">
        <a href="">{{ texto_boton_portada }}</a>
      </div>
    </div>
    <div class="container_imgs">
      <img :src="img_portada" alt="" />
      <div class="arriba" v-if="pagina_de_inicio">
        <img src="../../public/Mockup MobileSite UI design.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const titulo_portada = ref("");
const parrafo_portada = ref("");
const texto_boton_portada = ref("");
const img_portada = ref("");
const containerRef = ref(null); // Referencia al contenedor principal
const pagina_de_inicio = ref(false);

const props = defineProps({
  titulo_portada_frontpage: {
    type: String,
    required: true,
  },
  url_img_front_page: {
    type: String,
    required: true,
  },
  parrafo_front_page: {
    type: String,
    required: true,
  },
  texto_boton_portada_front: {
    type: String,
    required: true,
  },
  pagina_inicio: {
    type: Boolean,
    required: true,
  },
});

titulo_portada.value = props.titulo_portada_frontpage;
parrafo_portada.value = props.parrafo_front_page;
texto_boton_portada.value = props.texto_boton_portada_front;
img_portada.value = props.url_img_front_page;
pagina_de_inicio.value = props.pagina_inicio;

const handleMouseMove = (event) => {
  const container = containerRef.value;
  if (!container) return;

  // Calcular la posición relativa dentro del contenedor
  const rect = container.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Crear un elemento de tinta
  const ink = document.createElement("div");
  ink.classList.add("ink");

  // Establecer la posición del elemento dentro del contenedor
  ink.style.left = `${x - 25}px`; // Centrar la tinta en el cursor
  ink.style.top = `${y - 25}px`;

  // Añadir el elemento al contenedor
  container.appendChild(ink);

  // Eliminar el elemento después de que la animación termine
  setTimeout(() => {
    ink.remove();
  }, 600); // Tiempo de duración de la animación
};

// Configurar el listener al montar el componente y eliminarlo al desmontarlo
onMounted(() => {
  const container = containerRef.value;
  if (container) {
    container.addEventListener("mousemove", handleMouseMove);
  }
});

onUnmounted(() => {
  const container = containerRef.value;
  if (container) {
    container.removeEventListener("mousemove", handleMouseMove);
  }
});
</script>

--- #### CSS ```scss
<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;

.container_front_page {
  position: relative; /* Esto asegura que los elementos 'ink' se posicionen correctamente */
  width: 100%;
  padding: 5% 10%;
  margin: auto;
  @include contendor_doble_rejilla();
  background: $negro_transparente;
  background-attachment: fixed;
  overflow: hidden; /* Ocultar cualquier contenido que sobresalga */

  .container_text {
    width: 100%;
    @include columnas_flexibles_izquierda();

    h1 {
      color: $color_principal;
    }
  }

  .container_imgs {
    width: 100%;
    @include centrar_elementos();
    img {
      width: 100%;
      filter: drop-shadow(1px 5px 5px #000000a9);
    }

    .arriba {
      position: absolute;
      width: 25%;
      margin-top: 15%;
      margin-right: -25%;
    }
  }

  .container_buttons {
    width: 100%;
    justify-content: start;
    a {
      padding: 1%;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 30% 10%;
    @include columnas_flexibles_izquierda();
  }
}
</style>

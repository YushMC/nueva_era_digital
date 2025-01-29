<template>
  <div class="container_front_page" ref="containerRef">
    <div class="container_text">
      <h1>{{ titulo_portada }}</h1>
      <p>{{ parrafo_portada }}</p>
      <div class="container_buttons">
        <a :href="url_boton_portada">{{ texto_boton_portada }}</a>
      </div>
    </div>
    <div class="container_imgs" v-if="!pagina_de_nosotros">
      <img :src="img_portada" alt="" />
      <div class="arriba" v-if="pagina_de_inicio">
        <img src="/Mockup MobileSite UI design.png" alt="" />
      </div>
    </div>
    <div class="container_imgs_swiper" v-else>
      <Swiper
        :modules="[EffectCoverflow, Autoplay, Pagination]"
        effect="coverflow"
        :grabCursor="true"
        :centeredSlides="true"
        :loop="true"
        :slidesPerView="3"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="true"
        class="mySwiper"
      >
        <swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-1.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-2.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-3.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-4.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-5.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-6.jpg" /></swiper-slide
        ><swiper-slide
          ><img
            src="https://swiperjs.com/demos/images/nature-7.jpg" /></swiper-slide
        ><swiper-slide
          ><img src="https://swiperjs.com/demos/images/nature-8.jpg"
        /></swiper-slide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const titulo_portada = ref("");
const parrafo_portada = ref("");
const texto_boton_portada = ref("");
const url_boton_portada = ref("");
const img_portada = ref("");
const containerRef = ref(null); // Referencia al contenedor principal
const pagina_de_inicio = ref(false);
const pagina_de_nosotros = ref(false);

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

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
  url_boton_portada_id: {
    type: String,
    required: true,
  },
  pagina_inicio: {
    type: Boolean,
    required: true,
  },
  pagina_nosotros: {
    type: Boolean,
    required: true,
  },
});
pagina_de_nosotros.value = props.pagina_nosotros;
if (pagina_de_nosotros.value) {
  // Usamos los datos directamente
  const frontPage = frontPagesData.frontPages.find((t) => t.id === 6);
  titulo_portada.value = frontPage.tittle;
  parrafo_portada.value = frontPage.desc;
  texto_boton_portada.value = frontPage.text_button;
  url_boton_portada.value = frontPage.url_boton;
} else {
  titulo_portada.value = props.titulo_portada_frontpage;
  parrafo_portada.value = props.parrafo_front_page;
  texto_boton_portada.value = props.texto_boton_portada_front;
  img_portada.value = props.url_img_front_page;
  pagina_de_inicio.value = props.pagina_inicio;
  url_boton_portada.value = props.url_boton_portada_id;
}
const handleMouseMove = (event) => {
  /*
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
  */
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
  padding: 8% 10%;
  margin: auto;
  user-select: none;
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
    position: relative;
    @include centrar_elementos();

    img {
      width: 30rem;
      filter: drop-shadow(1px 5px 5px #000000a9);
    }

    .arriba {
      position: absolute;
      width: fit-content;
      height: fit-content;
      bottom: 5%;
      right: 20%;
      padding: 0;
      margin: 0;

      img {
        width: 5rem;
        height: 12rem;
        overflow: hidden;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
    }
  }
  .container_imgs_swiper {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 100%;
    .swiper {
      width: 50rem;
      height: 100%;
      margin: auto;
      padding-top: 50px;
      padding-bottom: 50px;

      .swiper-slide {
        background-position: center;
        background-size: cover;

        img {
          display: block;
          width: 100%;
        }
      }

      @media screen and (max-width: 900px) {
        width: 40rem;
        margin-left: -50%;
      }
    }
    .container_buttons {
      width: 100%;
      justify-content: start;
      a {
        padding: 1%;
      }
    }
  }

  @media screen and (max-width: 900px) {
    padding-top: 30%;
    padding-left: 10%;
    padding-right: 10%;
    @include columnas_flexibles_izquierda();
  }
}
</style>

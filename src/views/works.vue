<template>
  <div class="estructura">
    <section>
      <h5 class="subtitulos">Nuestro trabajo</h5>
      <h3 class="titulos">Soluciones digitales para problemas reales</h3>
      <p>
        Potenciamos empresas con soluciones innovadoras que resuelven problemas
        de la vida diaria
      </p>
    </section>
    <div class="container_cards_horizontal">
      <div
        class="card_horizontal"
        v-for="work in works"
        :key="work.id"
        :style="{ backgroundImage: `url(${work.images[0].url})` }"
      >
        <div class="container_info">
          <div class="container_images">
            <Swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }"
              :pagination="true"
              :modules="[EffectCube, Navigation, Pagination]"
              class="mySwiper"
            >
              <SwiperSlide
                v-for="scerenshots in work.images"
                :key="scerenshots.id"
              >
                <img :src="scerenshots.url" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div class="container_text">
            <div class="content_logo">
              <h3>{{ work.name }}</h3>
              <img :src="work.url_logo" />
            </div>
            <p>
              {{ work.desc }}
            </p>
            <h6>Con las tecnologías:</h6>
            <div class="tecnologias">
              <img
                v-for="tecnologies in work.tecnologiasUsadas"
                :key="tecnologies.id"
                :src="tecnologies.icon"
                :title="tecnologies.name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@unhead/vue";

useHead({
  title: "Nueva Era Digital - Nuestro Trabajo",
  meta: [
    {
      name: "description",
      content:
        "Contamos con un amplio cátalogo de proyectos y transformaciones realizadas. Nostros te ayudamos a conviertir tu idea o negocio al mundo digital.",
    },
    {
      property: "og:title",
      content: "Nueva Era Digital - Nuestro Trabajo",
    },
    {
      property: "og:description",
      content:
        "Contamos con un amplio cátalogo de proyectos y transformaciones realizadas. Nostros te ayudamos a conviertir tu idea o negocio al mundo digital.",
    },
    { property: "og:url", content: "https://nuevaeradigital.mx/our-work" },
  ],
});
import { onMounted, computed } from "vue";

import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Navigation, Pagination } from "swiper/modules";

// Importa directamente el archivo JSON
import worksData from "@/json/trabajos.json";

const works = computed(() =>
  worksData.works.map((work) => ({
    ...work,
    tecnologiasUsadas: work.used.map((used) =>
      worksData.tecnologias.find((tec) => tec.id === used.id_tec)
    ),
  }))
);

// Usamos los datos directamente
const tecnoInfo = worksData.tecnologias;

onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped>
@use "../styles/prefabs" as *;
@use "../styles/variables" as *;

section {
  margin-top: 140px;
}

.container_cards_horizontal {
  @include contendor_doble_rejilla();
  width: 80%;
  margin: 2% auto;

  .card_horizontal {
    width: 100%;
    position: relative;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    height: 400px;
    border-radius: $border_radius;
    display: flex;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.4906163148853291) 0%,
        rgb(131, 216, 233) 30%,
        rgb(40, 59, 151) 100%
      ) !important;
      z-index: -1;
      opacity: 0.7;
    }
    .container_info {
      width: 100%;
      padding: 2%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur($blur);
      opacity: 0;
      visibility: hidden;
      transform: translateY(300px);
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
      display: grid;
      grid-template-columns: 3fr 2fr;
      transition: all 0.5s linear;

      .container_images {
        position: relative;
        width: 100%;
        visibility: hidden;
        opacity: 0;
        @include centrar_elementos();
        transition: all 0.5s linear;

        .swiper {
          width: 400px;
          height: 360px;
          .swiper-slide {
            margin: auto;
            height: fit-content !important;
            background-position: center;
            background-size: cover;

            img {
              display: block;
              width: 100%;
              aspect-ratio: 4/3;
              object-fit: contain;
              object-position: center;
              border-radius: 10px;
            }
          }

          @media screen and (max-width: 900px) {
            height: 15rem;
          }
        }
      }
      .container_text {
        opacity: 0;
        visibility: hidden;
        width: 100%;
        height: 100%;
        margin: auto;
        padding: 2%;
        overflow: hidden;
        background: #ffffff9a;
        border-radius: $border_radius;
        backdrop-filter: blur($blur);
        transition: all 0.5s linear;
        .content_logo {
          width: 100%;
          margin: 2% 0;
          padding: 2%;
          position: sticky;
          top: 10px;
          @include contendor_doble_rejilla();
          gap: 3rem !important;
          h3 {
            width: 100%;
            text-align: center;
            text-wrap: nowrap;
          }
          img {
            width: 100%;
          }
        }
        p {
          height: 12rem;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .container_links {
          width: 100%;
          padding: 2%;
          @include centrar_elementos();

          a {
            padding: 2% 2rem;
            background: $color_principal;
            color: #fff;
            border-radius: $border_radius;
          }
        }
        .tecnologias {
          width: 100%;
          display: flex;
          justify-content: start;
          gap: 1rem;
          align-items: center;
          padding: 2%;
          img {
            width: 2rem;
          }
        }

        @media screen and (max-width: 900px) {
          overflow: hidden;
          height: 100%;
          margin-top: 5%;
        }
      }

      @media screen and (max-width: 900px) {
        padding: 2%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 0;
      }
    }

    &:hover .container_info {
      visibility: visible;
      opacity: 1;
      transform: translateY(0px);

      .container_images {
        @include mostrar_elemento();
      }
      .container_text {
        @include mostrar_elemento();
      }
    }

    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      height: 10rem;

      &:hover {
        background-size: contain;
        background-repeat: no-repeat;
        background-color: $color_principal;
        height: 40rem;
      }
    }
  }

  @media screen and (max-width: 900px) {
    @include columnas_flexibles();
  }
}
</style>

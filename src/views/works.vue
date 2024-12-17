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
      <div class="card_horizontal" v-for="work in works" :key="work.id">
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
              <SwiperSlide>
                <img src="../../public/prueba.jpeg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="../../public/prueba.jpeg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div class="container_text">
            <h3>{{ work.name }}</h3>
            <p>
              {{ work.desc }}
            </p>
            <div class="container_links">
              <a :href="work.link">Visitar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
document.title = "Nuestro Trabajo - Nueva Era Digital";
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

// Usamos los datos directamente
const works = worksData.works;
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
    background-image: url("../../public/prueba.jpeg");
    background-position: center;
    background-size: cover;
    height: 400px;
    border-radius: $border_radius;
    display: flex;
    overflow: hidden;

    .container_info {
      width: 100%;
      padding: 2%;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur($blur);
      opacity: 0;
      visibility: hidden;
      transform: translateY(300px);
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
      @include contendor_doble_rejilla();
      transition: all 0.5s linear;

      .container_images {
        position: relative;
        width: 100%;
        visibility: hidden;
        opacity: 0;
        @include centrar_elementos();
        transition: all 0.5s linear;

        .swiper {
          width: 300px;
          height: 300px;
          .swiper-slide {
            margin: auto;
            height: fit-content !important;
            background-position: center;
            background-size: cover;

            img {
              display: block;
              width: 100%;
            }
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
        overflow: auto;
        background: #ffffff9a;
        border-radius: $border_radius;
        backdrop-filter: blur($blur);
        transition: all 0.5s linear;

        h3 {
          margin: 2% 0;
          position: sticky;
          top: 10px;
        }

        @media screen and (max-width: 800px) {
          overflow: hidden;
          height: 100%;
          margin-top: 5%;
        }
      }

      @media screen and (max-width: 800px) {
        padding: 5%;
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

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 800px) {
    @include columnas_flexibles();
  }
}
</style>

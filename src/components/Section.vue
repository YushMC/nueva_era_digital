<template>
  <section class="sections">
    <div class="content_text">
      <h5 class="subtitulos">{{ subtitulo_seccion }}</h5>
      <h3 class="titulos">{{ titulo_seccion }}</h3>
      <p>
        {{ parrafo_seccion }}
      </p>
    </div>
    <div class="content_media">
      <img :src="url_img_seccion" alt="" />
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const subtitulo_seccion = ref("");
const titulo_seccion = ref("");
const parrafo_seccion = ref("");
const url_img_seccion = ref("");

const props = defineProps({
  titulo_section: {
    type: String,
    required: true,
  },
  subtitulo_section: {
    type: String,
    required: true,
  },
  url_img: {
    type: String,
    required: true,
  },
  parrafo_section: {
    type: String,
    required: true,
  },
});

subtitulo_seccion.value = props.subtitulo_section;
titulo_seccion.value = props.titulo_section;
url_img_seccion.value = props.url_img;
parrafo_seccion.value = props.parrafo_section;
</script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;

.sections {
  width: 80%;
  margin: 2% auto;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2%;
  .content_text {
    width: 48%;
    @include columnas_flexibles_izquierda();
    @media (max-width: 900px) {
      width: 100%;
      margin: 4% 0;
    }
  }
  .content_media {
    width: 48%;
    @include centrar_elementos();
    img {
      width: 50%;
      border-radius: $border_radius_img;
      aspect-ratio: 16/9;
      object-fit: contain;
      object-position: center;
    }
    @media (max-width: 900px) {
      width: 100%;
      padding: 0;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column !important;
  }

  &:nth-child(2n + 1) {
    flex-direction: row-reverse !important;
    background: $negro_transparente;

    @media screen and (max-width: 900px) {
      flex-direction: column !important;
    }
  }
}
</style>

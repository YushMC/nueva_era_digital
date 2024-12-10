<template>
  <div class="card">
    <div class="content_icon">
      <img :src="img_carta" alt="" />
    </div>
    <h4>{{ titulo_carta }}</h4>
    <p>
      {{ parrafo_carta }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const titulo_carta = ref("");
const parrafo_carta = ref("");
const img_carta = ref("");

const props = defineProps({
  titulo: {
    type: String,
    required: true,
  },
  icono: {
    type: String,
    required: true,
  },
  parrafo: {
    type: String,
    required: true,
  },
});

titulo_carta.value = props.titulo;
parrafo_carta.value = props.parrafo;
img_carta.value = props.icono;
</script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;

.card {
  width: 100%;
  border-radius: $border_radius;
  background: $negro_transparente;
  padding: 2%;
  transition: all 0.2s linear;
  @include columnas_flexibles_izquierda();

  .content_icon {
    width: 100%;
    margin: 3%;
    img {
      width: 100px;
      aspect-ratio: 1/1;
      object-fit: cover;
    }
  }
  h4 {
    color: $color_principal;
    font-size: 1.5rem;
  }

  &:hover {
    transform: translateX(12px) translateY(-12px);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  }
}
</style>

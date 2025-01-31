<template>
  <div class="card" @click="routePush">
    <div class="content_icon">
      <img :src="img_carta" alt="" />
    </div>
    <h4>{{ titulo_carta }}</h4>
    <p>
      {{ parrafo_carta }}
    </p>
    <hr style="opacity: 0.2" />
    <h3>
      Desde: <span>{{ precio }} *</span>
    </h3>
    <label
      >* precio base, el valor final dependerá de los requerimientos o
      necesidades del cliente.</label
    >
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const titulo_carta = ref("");
const parrafo_carta = ref("");
const img_carta = ref("");
const precio = ref("");
const ruta = ref("");
const routePush = () => {
  window.open(
    `https://wa.me/52${footerInfo.tel_1}?text=Hola! Me interesaría saber más de: ${titulo_carta.value}`
  );
};

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
  routePush: {
    type: String,
    required: true,
  },
  precio: {
    type: String,
    required: true,
  },
});

titulo_carta.value = props.titulo;
parrafo_carta.value = props.parrafo;
img_carta.value = props.icono;
precio.value = props.precio;
ruta.value = props.routePush;

import footerData from "@/json/infoEmpresa.json";

// Usamos los datos directamente
const footerInfo = footerData.footer.find((t) => t.id === 1);
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
  display: grid;
  grid-template-rows: 2fr 1fr 2.5fr 1fr 1fr 1fr;
  gap: 0.01rem;
  align-items: center;
  cursor: pointer;
  .content_icon {
    width: 100%;
    margin: 0 1%;
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
  p {
    margin: 0 !important;
    line-height: 1.5;
    text-align: justify;
  }
  h3 {
    margin: 0 2%;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
    span {
      color: $color_principal;
      font-weight: 600;
    }
  }
  label {
    cursor: pointer;
    margin: 0 2%;
    width: 100%;
    font-size: 0.7rem;
    font-weight: 300;
  }
  &:hover {
    transform: translateX(12px) translateY(-12px);
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  }
  @media screen and (max-width: 600px) {
    height: 400px;
  }
}
</style>

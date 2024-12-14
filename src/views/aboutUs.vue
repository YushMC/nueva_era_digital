<template>
  <div class="estructura">
    <FrontPage
      :titulo_portada_frontpage="frontPage.tittle"
      :parrafo_front_page="frontPage.desc"
      :texto_boton_portada_front="frontPage.text_button"
      :url_img_front_page="frontPage.url_img"
      :pagina_inicio="false"
      :pagina_nosotros="true"
    ></FrontPage>
  </div>
</template>

<script setup>
document.title = "Nosotros - Nueva Era Digital";
import Card from "../components/Card.vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";

// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 6);
</script>

<style lang="scss" scoped></style>

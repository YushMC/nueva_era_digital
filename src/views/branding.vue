<template>
  <div class="estructura">
    <FrontPage
      :titulo_portada_frontpage="frontPage.tittle"
      :parrafo_front_page="frontPage.desc"
      :texto_boton_portada_front="frontPage.text_button"
      :url_img_front_page="frontPage.url_img"
      :url_boton_portada_id="frontPage.url_boton"
      :pagina_inicio="false"
      :pagina_nosotros="false"
    ></FrontPage>

    <Section
      titulo_section="HOLA"
      subtitulo_section="esto es un subtitulo"
      parrafo_section="Esto es un parrafo"
      url_img="/prueba.jpeg"
    ></Section>
    <Section
      titulo_section="HOLA"
      subtitulo_section="esto es un subtitulo"
      parrafo_section="Esto es un parrafo"
      url_img="/prueba.jpeg"
    ></Section>
    <Section
      titulo_section="HOLA"
      subtitulo_section="esto es un subtitulo"
      parrafo_section="Esto es un parrafo"
      url_img="/prueba.jpeg"
    ></Section>
  </div>
</template>

<script setup>
document.title = "Branding - Nueva Era Digital";
import Card from "../components/Card.vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 4);
</script>

<style lang="scss" scoped></style>

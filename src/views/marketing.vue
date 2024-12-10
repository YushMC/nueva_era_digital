<template>
  <div class="estructura">
    <FrontPage
      titulo_portada_frontpage="Hola"
      parrafo_front_page="esto es un parrafo "
      texto_boton_portada_front="Iniciemos"
      url_img_front_page="../../public/card_icons/IconMarkD.svg"
    ></FrontPage>

    <Section
      titulo_section="HOLA"
      subtitulo_section="esto es un subtitulo"
      parrafo_section="Esto es un parrafo"
      url_img="../../public/prueba.jpeg"
    ></Section>
    <Section
      titulo_section="HOLA"
      subtitulo_section="esto es un subtitulo"
      parrafo_section="Esto es un parrafo"
      url_img="../../public/prueba.jpeg"
    ></Section>
    <Section
      titulo_section="HOLA"
      subtitulo_section="esto es un subtitulo"
      parrafo_section="Esto es un parrafo"
      url_img="../../public/prueba.jpeg"
    ></Section>
    <section>
      <h5 class="subtitulos">Servicios</h5>
      <h3 class="titulos">Lo que ofrecemos</h3>
    </section>
    <div class="content_cards">
      <Card
        titulo="Desarrollo Movil"
        icono="../../public/card_icons/MD.svg"
        parrafo="hola a todos"
      ></Card>
      <Card
        titulo="Desarrollo Web"
        icono="../../public/card_icons/iconDeWb.svg"
        parrafo="hola a todos"
      ></Card>
      <Card
        titulo="Branding"
        icono="../../public/card_icons/BrandingIc.svg"
        parrafo="hola a todos"
      ></Card>
      <Card
        titulo="Desarrollo Movil"
        icono="../../public/card_icons/MD.svg"
        parrafo="hola a todos"
      ></Card>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
</script>

<style lang="scss" scoped></style>

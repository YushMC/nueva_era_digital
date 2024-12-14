<template>
  <div class="estructura">
    <FrontPage
      :titulo_portada_frontpage="frontPage.tittle"
      :parrafo_front_page="frontPage.desc"
      :texto_boton_portada_front="frontPage.text_button"
      :url_img_front_page="frontPage.url_img"
      :pagina_inicio="false"
      :pagina_nosotros="false"
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
    <section class="action_div">
      <h5>Contáctanos</h5>
      <h3>¿Estás listo para tu siguiente proyecto?</h3>
      <div class="text_action_div">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque,
          quasi.
        </p>
        <div class="container_buttons">
          <a href="">Boton</a>
        </div>
      </div>
    </section>
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

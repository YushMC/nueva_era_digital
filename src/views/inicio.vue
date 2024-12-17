<template>
  <div class="estructura">
    <FrontPage
      :titulo_portada_frontpage="frontPage.tittle"
      :parrafo_front_page="frontPage.desc"
      :texto_boton_portada_front="frontPage.text_button"
      :url_img_front_page="frontPage.url_img"
      :url_boton_portada_id="frontPage.url_boton"
      :pagina_inicio="true"
      :pagina_nosotros="false"
    ></FrontPage>
    <section id="servicios">
      <h5 class="subtitulos">Servicios</h5>
      <h3 class="titulos">Lo que ofrecemos</h3>
    </section>
    <div class="content_cards">
      <Card
        v-for="service in services"
        :key="service.id"
        :titulo="service.name"
        :icono="service.url_icon"
        :parrafo="service.desc"
      ></Card>
    </div>
    <Section
      v-for="infoCards in cards"
      :key="infoCards.id"
      :titulo_section="infoCards.tittle"
      :subtitulo_section="infoCards.subtittle"
      :parrafo_section="infoCards.desc"
      :url_img="infoCards.url_img"
    ></Section>

    <section class="works">
      <h5 class="subtitulos">Nuestro Trabajo</h5>
      <h3 class="titulos">Soluciones digitales para problemas reales</h3>
      <p>
        Potenciamos empresas con soluciones innovadoras que resuelven problemas
        de la vida diaria
      </p>
      <div class="container_buttons">
        <a href="">Trabajos recientes</a>
      </div>

      <div class="container_cards_works">
        <div class="card_img">
          <div class="text_work">
            <h4>Trabajo 1</h4>
          </div>
        </div>
        <div class="card_img">
          <div class="text_work">
            <h4>Trabajo 1</h4>
          </div>
        </div>
        <div class="card_img">
          <div class="text_work">
            <h4>Trabajo 1</h4>
          </div>
        </div>
        <div class="card_img">
          <div class="text_work">
            <h4>Trabajo 1</h4>
          </div>
        </div>
      </div>
    </section>
    <!-- 
  <section class="blog">
    <h5 class="subtitulos">Blog</h5>
    <h3 class="titulos">Todo lo que necesitas saber y más</h3>
    <p>
      Brindamos consejos prácticos, estrategias y técnicas para hacer crecer tu
      negocio.
    </p>
    <div class="content_cards">
      <Card
        titulo="Desarrollo Movil"
        icono="../../public/prueba.jpeg"
        parrafo="hola a todos"
      ></Card>
      <Card
        titulo="Desarrollo Web"
        icono=".../../public/prueba.jpeg"
        parrafo="hola a todos"
      ></Card>
    </div>
  </section>
  --></div>
</template>

<script setup>
document.title = "Inicio - Nueva Era Digital";
import Card from "../components/Card.vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";

// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 1);

// Importa directamente el archivo JSON
import servicesData from "@/json/servicios.json";

// Usamos los datos directamente
const services = servicesData.services;

// Importa directamente el archivo JSON
import cardsData from "@/json/infoCartas.json";

// Usamos los datos directamente
const cards = cardsData.home;
</script>

<style lang="scss" scoped></style>

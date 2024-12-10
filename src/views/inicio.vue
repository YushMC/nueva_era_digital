<template>
  <div class="estructura">
    <FrontPage
      :titulo_portada_frontpage="portadas.titulo"
      :parrafo_front_page="portadas.parrafo"
      :texto_boton_portada_front="portadas.texto_enlace"
      :url_img_front_page="portadas.url_img"
      pagina_inicio
    ></FrontPage>
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
        titulo="Marketing Digital"
        icono="../../public/card_icons/IconMarkD.svg"
        parrafo="hola a todos"
      ></Card>
    </div>
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
import Card from "../components/Card.vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";

// Importa directamente el archivo JSON
import portadasData from "@/json/portadas.json";

// Usamos los datos directamente
const portadas = portadasData.portadas.find((t) => t.id === 1);
</script>

<style lang="scss" scoped></style>

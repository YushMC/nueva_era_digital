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
      v-for="infoMovil in movil"
      :titulo_section="infoMovil.title"
      :subtitulo_section="infoMovil.desc"
      :parrafo_section="infoMovil.desc"
      :url_img="infoMovil.url_img"
    ></Section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import Card from "../components/Card.vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();

// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 3);

// Importa directamente el archivo JSON
import movilData from "@/json/movil.json";

// Usamos los datos directamente
const movil = movilData.info;

onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped></style>

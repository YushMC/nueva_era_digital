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
      v-for="infoWeb in web"
      :titulo_section="infoWeb.title"
      :subtitulo_section="infoWeb.desc"
      :parrafo_section="infoWeb.desc"
      :url_img="infoWeb.url_img"
    ></Section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();

// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 2);

// Importa directamente el archivo JSON
import webData from "@/json/web.json";

// Usamos los datos directamente
const web = webData.info;
//etiquetas seo
import { useHead } from "@vueuse/head";

useHead({
  title: "Desarrollo Web - Nueva Era Digital",
  meta: [
    { name: "description", content: "Descripción optimizada para SEO" },
    { property: "og:title", content: "Desarrollo Web que funciona!" },
    { property: "og:description", content: "Descripción optimizada" },
  ],
});

onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped></style>

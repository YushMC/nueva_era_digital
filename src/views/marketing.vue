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
      v-for="infoMarketing in marketing"
      :titulo_section="infoMarketing.title"
      :subtitulo_section="infoMarketing.desc"
      :parrafo_section="infoMarketing.desc"
      :url_img="infoMarketing.url_img"
    ></Section>
  </div>
</template>

<script setup>
document.title = "Marketing - Nueva Era Digital";
import { onMounted } from "vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();

// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 5);

// Importa directamente el archivo JSON
import marketingData from "@/json/marketing.json";

// Usamos los datos directamente
const marketing = marketingData.info;

onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped></style>

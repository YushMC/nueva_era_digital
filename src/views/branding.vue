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
      v-for="infoBranding in branding"
      :titulo_section="infoBranding.title"
      :subtitulo_section="infoBranding.desc"
      :parrafo_section="infoBranding.desc"
      :url_img="infoBranding.url_img"
    ></Section>
  </div>
</template>

<script setup>
document.title = "Branding - Nueva Era Digital";
import { onMounted } from "vue";
import FrontPage from "../components/FrontPage.vue";
import Section from "../components/Section.vue";
import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();
// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";

// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 4);

// Importa directamente el archivo JSON
import brandingData from "@/json/branding.json";

// Usamos los datos directamente
const branding = brandingData.info;

onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped></style>

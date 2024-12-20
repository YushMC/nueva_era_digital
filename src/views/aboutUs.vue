<template>
  <div class="estructura">
    <FrontPage
      :titulo_portada_frontpage="frontPage.tittle"
      :parrafo_front_page="frontPage.desc"
      :texto_boton_portada_front="frontPage.text_button"
      :url_img_front_page="frontPage.url_img"
      :url_boton_portada_id="frontPage.url_boton"
      :pagina_inicio="false"
      :pagina_nosotros="true"
    ></FrontPage>
    <Section
      :titulo_section="cardInfo.tittle"
      :subtitulo_section="cardInfo.subtittle"
      :parrafo_section="cardInfo.desc"
      :url_img="cardInfo.url_img"
    ></Section>
    <article class="cards_empresa">
      <div class="card_empresa" v-for="cardInfo2 in cards" :key="cardInfo2.id">
        <div class="icono">
          <img :src="cardInfo2.url_icon" alt="" />
        </div>
        <h3>{{ cardInfo2.tittle }}</h3>
        <p>
          {{ cardInfo2.desc }}
        </p>
      </div>
    </article>
    <Section
      :titulo_section="cardInfo3.tittle"
      :subtitulo_section="cardInfo3.subtittle"
      :parrafo_section="cardInfo3.desc"
      :url_img="cardInfo3.url_img"
    ></Section>
  </div>
</template>

<script setup>
document.title = "Nosotros - Nueva Era Digital";
import Section from "../components/Section.vue";
import FrontPage from "../components/FrontPage.vue";
// Importa directamente el archivo JSON
import cardsData from "@/json/infoCartas.json";

// Usamos los datos directamente
const cardInfo = cardsData.aboutUs.find((t) => t.id === 1);

// Usamos los datos directamente
const cards = cardsData.skills;

// Usamos los datos directamente
const cardInfo3 = cardsData.aboutUs.find((t) => t.id === 2);

// Importa directamente el archivo JSON
import frontPagesData from "@/json/portadas.json";
import { onMounted } from "vue";

import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();
// Usamos los datos directamente
const frontPage = frontPagesData.frontPages.find((t) => t.id === 1);
onMounted(() => {
  isSubMenuVisible.value = false;
  isOpen.value = false;
});
</script>

<style lang="scss" scoped>
@use "../styles/prefabs" as *;
@use "../styles/variables" as *;

.cards_empresa {
  background: $negro_transparente;
  width: 80%;
  margin: auto;
  padding: 5%;
  @include contenedores_rejilla();
  align-items: center;
  overflow: hidden;
  position: relative;

  .card_empresa {
    position: relative;
    width: 100%;
    height: 300px;
    display: grid;
    padding: 2%;
    grid-template-rows: repeat(3, 1fr);
    //border: solid $color_principal 2px;
    .icono {
      width: 100%;
      margin: 2% 0;

      img {
        width: 50%;
      }
    }

    h3 {
      font-size: 2rem;
    }
  }
}
</style>

<template>
  <footer>
    <div class="container_footer">
      <div class="container_info">
        <div class="content_logo">
          <img src="/Logo(white)v.2.0.png" alt="" />
        </div>
        <hr />
        <div class="container_contacto">
          <div>
            <h5>Contacto</h5>
            <ul>
              <li>
                <a :href="'mailto:' + footerInfo.email">{{
                  footerInfo.email
                }}</a>
              </li>
              <li>+52 {{ footerInfo.tel_1 }}</li>
              <!-- 
              <li>+52 {{ footerInfo.tel_2 }}</li>
              -->
            </ul>
          </div>
          <div>
            <h5>Nuestras Redes</h5>
            <ul>
              <!-- <li><i class="fab fa-tiktok"></i> {{ footerInfo.tiktok }}</li> -->
              <!-- 
              <li>
                <i class="fab fa-facebook-square"></i>
                <a
                  :href="footerInfo.facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="margin-left: 5px"
                  >{{ footerInfo.facebook }}</a
                >
              </li>
              -->
              <li>
                <i class="fab fa-instagram"></i>
                <a
                  :href="'https://www.instagram.com/' + footerInfo.instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="margin-left: 5px"
                  >@{{ footerInfo.instagram }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 
      <div class="container_info">
        <h5>Nosotros</h5>
        <ul>
          <li>Politica de Privacidad</li>
          <li>Terminos y condiciones</li>
          <li>EULA</li>
        </ul>
      </div>
    -->
      <div class="container_info">
        <h5>Enlaces</h5>
        <ul>
          <li><router-link to="/#servicios">Desarrollo Web</router-link></li>
          <li><router-link to="/#servicios">Desarrollo Móvil</router-link></li>
          <li><router-link to="/#servicios">Branding</router-link></li>
          <li><router-link to="/#servicios">Marketing</router-link></li>
        </ul>
      </div>
    </div>
    <div class="container_copyright">
      <h2>©​ {{ year }} {{ footerInfo.copyright }}</h2>
    </div>
  </footer>
</template>

<script setup>
// Importa directamente el archivo JSON
import footerData from "@/json/infoEmpresa.json";

// Usamos los datos directamente
const footerInfo = footerData.footer.find((t) => t.id === 1);

const d = new Date();
let year = d.getFullYear();
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as *;
@use "@/styles/prefabs" as *;
footer {
  user-select: none;
  width: 100%;
  position: relative;
  @include columnas_flexibles();
  background: $color_principal;
  padding-top: 1%;
  text-wrap: nowrap;
  .container_footer {
    width: 80%;
    margin: auto;
    padding-bottom: 3%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20rem;
    .container_info {
      display: flex;
      flex-direction: column;
      h5 {
        color: $color_secundario;
        text-transform: uppercase;
        font-size: 1rem;
        margin-bottom: 2%;
        opacity: 0.7;
        transition: all 0.3s linear;

        &:hover {
          filter: drop-shadow(5px -3px 10px #ffffff94);
        }
      }

      .container_contacto {
        width: 100%;
        margin-top: 3%;
        @include contendor_doble_rejilla();
        align-items: start !important;
        div {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: start;
          margin-left: -10px !important;
          li {
            color: #fff;
            width: 100%;
          }
        }
        @media screen and (max-width: 900px) {
          @include columnas_flexibles_izquierda;
        }
      }
      @media screen and (max-width: 900px) {
        width: 100%;

        li {
          width: 100%;
        }

        &:last-child {
          display: none;
        }
      }
    }
    .content_logo {
      width: 100%;
      margin-bottom: 3%;
      img {
        width: 100%;
      }

      &:hover + hr {
        box-shadow: 0px -10px 60px 8px rgba(253, 253, 253, 0.192);
        width: 100%;
      }
    }
    hr {
      width: 0%;
      transition: all 0.5s linear;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
      li {
        width: 100%;
        margin: 2% 0;
        transition: all 0.5s linear;
        color: #fff;

        padding: 3%;

        &:hover {
          transform: skewY(-0.1deg) scale(1) translateX(5px);
          color: #000 !important;
          cursor: pointer;
          background: linear-gradient(
            162deg,
            rgb(250, 250, 250) 54%,
            rgba(73, 73, 73, 0.401) 100%
          );
          background-repeat: no-repeat;
          border-radius: $border_radius;
          background-size: 100%;
          a {
            width: 100%;
            color: #000;
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      @include columnas_flexibles_izquierda();
      gap: 1rem;
      padding-bottom: 10%;
    }
  }
  .container_copyright {
    user-select: none;
    position: fixed;
    bottom: 0;
    height: 20px;
    background: $blanco_transparente;
    backdrop-filter: blur($blur);
    width: 100%;
    padding: 1% 0;
    box-shadow: -1px -1px 10px $color_principal_transparente;
    z-index: 90;
    @include centrar_elementos();
    h2 {
      color: $color_principal;
      text-transform: uppercase;
      font-size: 1rem;

      @media screen and (max-width: 900px) {
        font-size: 0.65rem;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 900px) {
    padding-top: 20px;
  }
}
</style>

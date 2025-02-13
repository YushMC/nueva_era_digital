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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="0.9rem"
                  style="line-height: 1.5"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    fill="white"
                  />
                </svg>
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
  bottom: 0;
  left: 0;
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

<template>
  <footer>
    <div class="container_footer">
      <div class="container_info">
        <div class="content_logo">
          <img src="../../public/logo_header.png" alt="" />
        </div>
        <div class="container_contacto">
          <div>
            <h5>Contacto</h5>
            <ul>
              <li>{{ footerInfo.email }}</li>
              <li>+52 {{ footerInfo.tel_1 }}</li>
              <li>+52 {{ footerInfo.tel_2 }}</li>
            </ul>
          </div>
          <div>
            <h5>Nuestras Redes</h5>
            <ul>
              <li><i class="fab fa-tiktok"></i> {{ footerInfo.tiktok }}</li>
              <li>
                <i class="fab fa-facebook-square"></i> {{ footerInfo.facebook }}
              </li>
              <li>
                <i class="fab fa-instagram"></i> {{ footerInfo.instagram }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container_info">
        <h5>Nosotros</h5>
        <ul>
          <li>Politica de Privacidad</li>
          <li>...</li>
          <li>...</li>
        </ul>
      </div>
      <div class="container_info">
        <h5>Enlaces</h5>
        <ul>
          <li><router-link to="/web">Desarrollo Web</router-link></li>
          <li><router-link to="/movil">Desarrollo Móvil</router-link></li>
          <li><router-link to="/brandig">Branding</router-link></li>
          <li><router-link to="/marketing">Marketing</router-link></li>
        </ul>
      </div>
    </div>
    <div class="container_copyright">
      <h2>{{ footerInfo.copyright }}</h2>
    </div>
  </footer>
</template>

<script setup>
// Importa directamente el archivo JSON
import footerData from "@/json/infoEmpresa.json";

// Usamos los datos directamente
const footerInfo = footerData.footer.find((t) => t.id === 1);
</script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;

footer {
  width: 100%;
  position: relative;
  @include columnas_flexibles();
  .container_footer {
    width: 80%;
    margin: auto;
    padding-bottom: 3%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rem;
    .container_info {
      display: flex;
      flex-direction: column;
      h5 {
        color: $color_principal;
        text-transform: uppercase;
        font-size: 1rem;
        margin-bottom: 2%;
      }

      .container_contacto {
        width: 100%;
        @include contendor_doble_rejilla();
        div {
          display: flex;
          flex-direction: column;
          li {
            width: 100%;
          }
        }
      }
    }
    .content_logo {
      width: 100%;
      margin-bottom: 3%;
      img {
        width: 100%;
      }
    }
    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      list-style: none;
      li {
        width: 50%;
        margin: 2% 0;
        transition: all 0.3s linear;
        padding: 2%;
        a {
          display: flex;
          width: 100%;
          color: #4e4d4d;
          padding: 2%;
          transition: all 0.3s linear;
          background-size: 0%;
          &:hover {
            // transform-origin: bottom left;
            color: #ffffff;
          }
        }
        &:hover {
          transform: skewY(-1deg) scale(1.1) translateX(20px);
          color: #fff;
          cursor: pointer;
          background: linear-gradient(
            162deg,
            rgba(20, 30, 79, 1) 54%,
            rgba(20, 30, 79, 0.4009804605435925) 100%
          );
          background-repeat: no-repeat;
          border-radius: $border_radius;
          background-size: 100%;
        }
      }
    }

    @media screen and (max-width: 600px) {
      @include columnas_flexibles_izquierda();
      padding-bottom: 10%;
    }
  }
  .container_copyright {
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

      @media screen and (max-width: 600px) {
        font-size: 0.5rem;
      }
    }
  }
}
</style>

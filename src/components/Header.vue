<template>
  <header>
    <div class="container_header">
      <div class="container_logo">
        <router-link to="/"
          ><img src="./../../public/logo_header.png" alt=""
        /></router-link>
      </div>
      <nav>
        <div class="menu">
          <router-link to="/">Inicio</router-link>
          <hr />
        </div>
        <div class="menu">
          <a>Servicios ˅</a>
          <hr />
          <div class="sub_menu">
            <div class="enlaces">
              <div>
                <h5>Productos</h5>
                <router-link to="/web">Desarrollo Web</router-link>
                <router-link to="/movil">Desarrollo Móvil</router-link>
              </div>
              <div>
                <h5>Servicios</h5>
                <router-link to="/branding">Branding</router-link>
                <router-link to="/marketing">Marketing</router-link>
              </div>
            </div>
            <h5>Tecnologías</h5>
            <div class="tecnologias">
              <img src="../../public/icons/html.svg" alt="" />
              <img src="../../public/icons/js.svg" alt="" />
              <img src="../../public/icons/angular.svg" alt="" />
              <img src="../../public/icons/vue.svg" alt="" />
              <img src="../../public/icons/laravel.svg" alt="" />
              <img src="../../public/icons/flutter.svg" alt="" />
              <img src="../../public/icons/react.svg" alt="" />
              <img src="../../public/icons/python.svg" alt="" />
              <img src="../../public/icons/wordpress.svg" alt="" />
              <img src="../../public/icons/inkscape.svg" alt="" />
            </div>
          </div>
        </div>

        <div class="menu">
          <router-link to="/our-work">Nuestro Trabajo</router-link>
          <hr />
        </div>
        <div class="menu">
          <router-link to="/about-us">Nosotros</router-link>
          <hr />
        </div>
        <!--  <div class="menu">
          <a href="">Blog</a>
          <hr />
        </div> -->
      </nav>
      <div class="container_buttons">
        <a href="">Contáctanos</a>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "@/styles/_variables.scss" as *;
@use "@/styles/_prefabs.scss" as *;

header {
  width: 100dvw;
  height: 100px;
  position: fixed;
  z-index: 100;
  background: $blanco_transparente;
  //background: $color_principal_transparente;
  display: flex;
  backdrop-filter: blur($blur);
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.089);
  //contenedor de los elementos
  .container_header {
    position: relative;
    width: 80%;
    height: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 2fr 3fr 1fr;
    gap: 2rem;
    align-items: center;
    //contenedor del logo
    .container_logo {
      position: relative;
      width: 100%;
      @include contenedores_flexibles();

      img {
        width: 60%;
        @media screen and (max-width: 600px) {
          width: 100%;
        }
      }
    }
    //enlaces o navegacion
    nav {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;
      .menu {
        width: 100%;
        @include columnas_flexibles();
        hr {
          width: 0%;
          transition: all 0.3s linear;
        }
        a {
          text-align: center;
          width: 100%;
          color: $color_principal;
        }
        .sub_menu {
          position: absolute;
          top: 70px;
          padding: 2%;
          width: 60%;
          z-index: 100;
          background: $blanco_transparente;
          border-radius: $border_radius;
          backdrop-filter: blur($blur) !important;
          @include ocultar_elemento();
          @include columnas_flexibles();
          h5 {
            margin: 2% 0;
            color: $color_principal;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
          }
          .enlaces {
            position: relative;
            width: 100%;
            @include contendor_doble_rejilla();
            margin: 0;

            div {
              display: flex;
              flex-direction: column;
              height: 180px;

              a {
                width: 100%;
                padding: 2%;
                margin: 1% 0;
                color: rgba(0, 0, 0, 0.568);
                transition: all 0.3s linear;
                border-radius: $border_radius;
                border: 2px solid transparent;
                @include contenedores_flexibles();

                &:hover {
                  border-color: $color_principal_transparente;
                  color: $color_principal;
                  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
                  transform: scale(1.01);
                }
              }
              @media screen and (max-width: 600px) {
                height: fit-content;
                z-index: 100;
              }
            }
          }

          .tecnologias {
            background: $negro_transparente;
            padding: 5%;
            width: 100%;
            @include contenedores_flexibles();
            border-radius: $border_radius;
            //flex-wrap: wrap;
            img {
              aspect-ratio: 1/1;
              object-fit: cover;
              width: 20px;
              opacity: 0.6;
            }
            @media screen and (max-width: 600px) {
              flex-wrap: wrap;

              backdrop-filter: blur($blur * 2) !important;
            }
          }

          @media screen and (max-width: 600px) {
            top: 23% !important;
            width: 80%;
          }
        }
        &:hover .sub_menu {
          @include mostrar_elemento();
          box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
        }
        &:hover hr {
          width: 100%;
        }
        @media screen and (max-width: 600px) {
          gap: 0;
          padding: 2%;
        }
      }
      @media screen and (max-width: 600px) {
        opacity: 0;
        visibility: hidden;
        @include columnas_flexibles_izquierda();
        position: fixed;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 2%;
        background: rgba(240, 240, 240, 0.74);
        backdrop-filter: blur($blur);

        // Fallback para navegadores sin soporte
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit; // Copia el fondo del contenedor
          filter: blur(10px); // Aplica blur como alternativa
          z-index: -1;
        }
        z-index: 90;
        gap: 0rem;
      }
    }

    //botones de contacto

    @media screen and (max-width: 600px) {
      position: initial;
      @include contenedores_flexibles();
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    background: rgba(240, 240, 240, 0.63);
  }
}
</style>

<template>
  <header>
    <div class="container_header">
      <div class="container_logo">
        <router-link to="/"
          ><img src=".//logo_header.png" alt=""
        /></router-link>
      </div>
      <nav :class="{ mostrar_menu: isOpen }">
        <div class="content_logo_menu">
          <img src=".//logo_header.png" alt="" />
        </div>
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
              <img src="/icons/html.svg" alt="" />
              <img src="/icons/js.svg" alt="" />
              <img src="/icons/angular.svg" alt="" />
              <img src="/icons/vue.svg" alt="" />
              <img src="/icons/laravel.svg" alt="" />
              <img src="/icons/flutter.svg" alt="" />
              <img src="/icons/react.svg" alt="" />
              <img src="/icons/python.svg" alt="" />
              <img src="/icons/wordpress.svg" alt="" />
              <img src="/icons/inkscape.svg" alt="" />
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
        <div class="container_buttons">
          <router-link to="/contact">Contáctanos</router-link>
        </div>
      </nav>

      <div
        class="menu-toggle"
        id="menu-toggle"
        :class="{ open: isOpen }"
        @click="toggleMenu"
      >
        <div class="bar bar1"></div>
        <div class="bar bar2"></div>
        <div class="bar bar3"></div>
      </div>
    </div>
  </header>
  <div
    class="jaja"
    @click="toggleMenu"
    :class="{ activar_desactivador: isOpen }"
  ></div>
</template>

<script setup>
import { ref } from "vue";

// Estado para controlar si el menú está abierto o cerrado
const isOpen = ref(false);

// Función para alternar el estado de abierto/cerrado
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

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
  user-select: none;
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
        width: 300px;
      }
      @media screen and (max-width: 900px) {
        img {
          width: 200px;
        }
      }
    }
    //enlaces o navegacion
    nav {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
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

          @media screen and (max-width: 900px) {
            text-align: left;
            margin: 4% 0;
          }
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
          transition: all 0.3s linear;
          @include ocultar_elemento();
          @include columnas_flexibles();
          h5 {
            margin: 2% 0;
            color: $color_principal;
            text-transform: uppercase;
            letter-spacing: 0.1rem;

            @media screen and (max-width: 900px) {
              text-align: center;
            }
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
                @media screen and (max-width: 900px) {
                  width: 100%;
                }
              }
              @media screen and (max-width: 900px) {
                width: 100%;
                height: min-content !important;
                z-index: 100;
                padding: 2%;
                margin: 0;
                align-items: center;
                justify-content: center;

                h5 {
                  margin: 1%;
                }
                &:last-child {
                  margin-top: -15% !important;
                }
              }
            }

            @media screen and (max-width: 900px) {
              width: 100%;
              @include columnas_flexibles_izquierda();
              margin: 0;
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
            @media screen and (max-width: 900px) {
              flex-wrap: wrap;
            }
          }

          @media screen and (max-width: 900px) {
            display: none;
            position: relative;
            top: 0%;
            left: 0;
            margin: 0;
            width: 100%;
          }
        }
        &:hover .sub_menu {
          @include mostrar_elemento();
          box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);

          @media screen and (max-width: 900px) {
            display: block;
            transition: all 0.3s linear;
          }
        }
        &:hover hr {
          width: 100%;
        }
        @media screen and (max-width: 900px) {
          gap: 0;
          padding: 2%;
        }
      }
      @media screen and (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        position: fixed;
        height: 120dvh;
        top: 0%;
        left: 0;
        width: 70%;
        padding: 2%;
        background: rgb(240, 240, 240);
        z-index: 90;
        box-shadow: 0px 30px 40px 10px rgba(0, 0, 0, 0.774) !important;
        overflow: auto;
        transition: all 0.5s linear;
        transform: translateX(-650px);
        &.mostrar_menu {
          transform: translateX(0px);
        }
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

      .container_buttons a {
        padding: 10%;
      }
    }

    //botones de contacto

    @media screen and (max-width: 900px) {
      position: initial;

      @include contenedores_flexibles();
    }
  }
  @media screen and (max-width: 900px) {
    position: fixed;
    width: 100%;
    z-index: 100;
    background: rgba(240, 240, 240, 0.63);
  }
}

/* Estilo base del icono de barras */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40px;
  height: 25px;
  cursor: pointer;

  .bar {
    width: 100%;
    height: 5px;
    background-color: #333;
    transition: all 0.3s ease;
  }

  /* Animación para cambiar a la "X" cuando se hace clic */
  &.open {
    .bar1 {
      transform: rotate(45deg) translateY(14px);
    }

    .bar2 {
      opacity: 0;
    }

    .bar3 {
      transform: rotate(-45deg) translateY(-14px);
    }
  }

  @media screen and (min-width: 901px) {
    display: none;
  }
}
.jaja {
  display: none;
  position: fixed;
  width: 100dvh;
  left: 0;
  top: 0;
  height: 100dvh;
  z-index: 50 !important;

  @media screen and (min-width: 901px) {
    display: none;
  }

  &.activar_desactivador {
    display: block;
  }
}

.content_logo_menu {
  width: 100%;
  @include columnas_flexibles();
  padding: 5%;

  img {
    width: 100%;
  }

  @media screen and (min-width: 901px) {
    display: none;
  }
}
</style>

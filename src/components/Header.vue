<template>
  <header>
    <div class="container_header">
      <div class="container_logo">
        <router-link to="/"><img src="/logo_header.png" alt="" /></router-link>
      </div>
      <nav :class="{ mostrar_menu: isOpen }">
        <div class="content_logo_menu">
          <img src="/logo_header.png" alt="" />
        </div>
        <div class="menu">
          <router-link to="/">Inicio</router-link>
          <hr />
        </div>
        <div class="menu" @click="">
          <a href="#servicios"
            >Servicios
            <span :class="{ rotarCarret: isSubMenuVisible }"
              ><i class="fas fa-caret-down" v-if="false"></i></span
          ></a>
          <hr />
          <div class="sub_menu" v-if="isSubMenuVisible">
            <div class="enlaces">
              <div>
                <h5>Productos</h5>
                <router-link to="/web">Desarrollo Web</router-link>
                <router-link to="/movil">Desarrollo Móvil</router-link>
                <!-- 
                <router-link to="/desktop"
                  > Desarrollo de Escritorio </router-link
                >
                -->
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
    :class="{ activar_desactivador: isOpen || isSubMenuVisible }"
  ></div>
</template>

<script setup>
// Estado para controlar si el menú está abierto o cerrado

import { useMenu } from "../composables/useMenu";
const { isSubMenuVisible, isOpen } = useMenu();

// Función para alternar el estado de abierto/cerrado
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  isSubMenuVisible.value = false;
};

const togleSubMenu = () => {
  isSubMenuVisible.value = !isSubMenuVisible.value;
};
</script>

<style lang="scss" scoped>
@use "@/styles/variables.scss" as *;
@use "@/styles/prefabs.scss" as *;
header {
  width: 100dvw;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
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
        .rotarCarret {
          i {
            transform: rotate(180deg);
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
          background: $color_secundario;
          box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
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
                cursor: pointer !important;
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
              display: none;
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
        .sub_menu {
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
        padding: 5% 2%;
        background: rgb(240, 240, 240);
        z-index: 90;
        box-shadow: 0px 30px 40px 10px rgba(0, 0, 0, 0.774) !important;
        overflow: scroll;
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
span {
  i {
    transition: all 0.3s linear;
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
    background-color: #1735bb;
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
  width: 100dvw;
  left: 0;
  top: 0;
  height: 100dvh;
  z-index: 50 !important;

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

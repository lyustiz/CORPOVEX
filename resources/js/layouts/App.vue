<template>
  <v-app>

    <!--navegacion lateral-->
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
        <!--menu-->
        <layout-menu :items=items></layout-menu>

    </v-navigation-drawer>

    <!--NavBar-->
    <v-toolbar
    :clipped-left="$vuetify.breakpoint.mdAndUp" 
    :color="$App.theme.headPpal" 
    dark 
    fixed 
    app 
    >
        <!--Titulo-->
        <v-toolbar-title :class="$App.theme.textPpal" v-text="$App.title"></v-toolbar-title>

        <!--Toggle Menu Lateral-->
        <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

        <!--Toggle iconos/texto-->
        <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn> 

        <v-spacer></v-spacer>

        <!--Ayuda-->
        <v-btn icon >
            <v-icon>help</v-icon>
        </v-btn>

        <!--Notificaciones-->
        <v-btn icon >
            <v-icon>notification_important</v-icon>
        </v-btn>

        <!--Form User Logot/Password-->
        <v-form @submit.prevent="logout()">
            <v-btn icon type="submit">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-form>

    </v-toolbar>

    <!--Contenido-->
    <v-content>

            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>

    </v-content>
    
    <!--Footer-->
    <v-footer :fixed="fixed" app>
        <span>&copy; {{$App.title}}  {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <span>AppInnovaSystem</span>
    </v-footer>

  </v-app>

</template>

<script>
  import LayoutMenu from  '~/components/layout/Menu';

  export default {
      components: { 'layout-menu': LayoutMenu },
     data () {
        return {
            clipped: true,
            drawer: true,
            fixed: false,
            items: [
                { icon: 'insert_chart', title: 'Inicio', to: '/' },
                { icon: 'account_balance', title: 'Banco', to: '/banco' },
                { icon: 'assignment', title: 'Oferta Comercial', to: '/ofertaComercial' }
            ],
            miniVariant: true,
        }
    },
    computed:
    {
        menuItems()
        {
            return 1//this.$router.options.routes
        }

    }
  }

</script>
<style>

    /* Item Activo del Menu */
    .v-list__tile--active{
        color:#f44336 !important; 
    }

    /* Ajuste Icons */
    .v-icon {
        display: inherit !important;
    }

    /* Transicion Contenido */
    .fade-enter-active, .fade-leave-active {
        transition:  opacity 0.4s ease;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }

</style>

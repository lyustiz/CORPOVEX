<template>

<v-dialog v-model="modal" width="98%" hide-overlay transition="dialog-bottom-transition">
    <v-card>

        <v-toolbar dark :color="HeadColor">
           
            <v-btn icon dark @click.native="cerrarModal">
                <v-icon>close</v-icon>
            </v-btn>

            <v-toolbar-title>
                {{ nbAccion }}
            </v-toolbar-title>

        </v-toolbar>

        <v-card-text> 

              <slot></slot>

        </v-card-text>

    </v-card>

</v-dialog>

    
</template>

<script>
export default {
    name: 'form-container',
    props:['nbAccion', 'modal', 'HeadColor', 'TextColor'],
    methods:{
        cerrarModal(){
            this.$emit('cerrarModal');
        }
    }
}
</script>

<style>

</style>

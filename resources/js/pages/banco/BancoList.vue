<template>

    <list-container titulo="Banco" :head-color="$App.theme.headList">

        <template slot="HeadTools">
            <v-btn fab small color="success" @click="insItem()"><v-icon>add</v-icon></v-btn>
        </template>


            <v-flex xs12 xs6>
            <v-text-field
                v-model="search"
                append-icon="search"
                label="Buscar"
                single-line
                hide-details
                clearable
            ></v-text-field>
            </v-flex>
            
            <v-data-table
            :headers="headers"
            :items  ="items"
            :search ="search"
            v-model ="selected"
            item-key="id_banco"
            :loading="isLoading"
            rows-per-page-text="Res. x Pag"
            disable-initial-sort
            >

            <template slot="items" slot-scope="item">
                
                <td class="text-xs-left">{{ item.item.nb_banco }}</td>
                <td class="text-xs-left">{{ item.item.id_tipo_banco }}</td>
                <td class="text-xs-left">{{ item.item.id_grupo_banco }}</td>
                <td class="text-xs-center"> 
                    {{ item.item.id_status }}
                     <!-- status -->
                    <v-switch v-model="item.item.id_status"></v-switch> 
                   
                </td>
                <!--acciones -->
                <td class="text-xs-left">
                    <list-btn @editar="updItem(item.item)" :del="false">
                    </list-btn>
                </td>

            </template>

            <v-alert slot="no-results" :value="true" color="info" icon="info">
                La busqueda "{{ search }}" Sin resultados
            </v-alert>

            <template slot="pageText" slot-scope="item">
                {{item.pageStart}} - {{item.pageStop}} de {{item.itemsLength}}
            </template>

            </v-data-table>

            <form-container :nb-accion="nbAccion" :modal="modal" @modalClose="modalClose" :head-color="$App.theme.headForm">
                <banco-form :accion="accion" :item="item" @cerrarModal="cerrarModal"></banco-form>
            </form-container>

            <app-mensaje></app-mensaje>

    </list-container>
  
</template>

<script>
import listHelper from '~/minxins/listHelper';
import BancoForm  from './BancoForm';

export default {
    mixins:     [ listHelper],
    components: { 'banco-form': BancoForm },
    data () {
    return {
        headers: [
        { text: 'Nombre',   value: 'nb_banco' },
        { text: 'Tipo',     value: 'id_tipo_banco' },
        { text: 'Grupo',    value: 'id_grupo_banco' },
        { text: 'Status',   value: 'id_status'  },
        { text: 'Acciones', value: 'id_status'  },
        ],
    }
    },
    methods:
    {
        list () {
           axios.get('api/banco')
            .then(respuesta => {
                this.items = respuesta.data;
                this.isLoading = false
            })
            .catch(error => {
                this.verError(error)
                this.isLoading = false
            })
        },
        delItem(){
            axios.delete('/api/v1/banco/'+this.item.id_banco)
            .then(respuesta => {

                this.verMsj(respuesta.data.msj)
                this.list();
                this.item = '';
                this.dialogo = false;
                
            })
            .catch(error => {
                this.verError(error)    
            })

        }
    }
}

</script>

<style>

</style>
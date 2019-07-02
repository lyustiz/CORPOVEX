<template>

<!--forklift-->

    <list-container :titulo="titulo" :head-color="$App.theme.headList">

        <template slot="HeadTools">
            <add-button @insItem="insItem()"></add-button>
        </template>

            <v-flex xs12 xs6>
                <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Buscar"
                    hide-details
                    clearable
                ></v-text-field>
            </v-flex>

            
            <v-data-table
                :headers="headers"
                :items  ="items"
                :search ="search"
                v-model ="selected"
                item-key="id_oferta_comercial"
                :loading="isLoading"
                rows-per-page-text="Res. x Pag"
                disable-initial-sort
            >

                <template slot="items" slot-scope="item">

                    <td class="text-xs-left"  @click="item.expanded = !item.expanded">
                    <v-btn flat icon color="primary">
                        <v-icon>touch_app</v-icon>
                    </v-btn>
                    {{ item.item.nu_oferta_comercial }}
                    </td>
                    
                    <td class="text-xs-left">{{ item.item.fe_oferta_comercial }}</td>
                    <td class="text-xs-left">{{ item.item.fe_validez }}</td>
                    <td class="text-xs-center"> {{ item.item.nu_doc_condiciones }} </td>
                    
                    <td class="text-xs-center">
                        <list-buttons @editar="updItem(item.item)" @eliminar="delForm(item.item)" ></list-buttons>
                    </td>

                </template>

                <template slot="expand" slot-scope="item">
                    <v-card flat>
                        <v-card-text>
                            <oferta-comercial-detail :item="item"></oferta-comercial-detail>
                        </v-card-text>
                    </v-card>
                </template>

                <v-alert slot="no-results" :value="true" color="info" icon="info">
                    La busqueda "{{ search }}" No Obtuvo resultados
                </v-alert>

                <template slot="pageText" slot-scope="pages">
                    {{pages.pageStart}} - {{pages.pageStop}} de {{pages.itemsLength}}
                </template>

            </v-data-table>

            <app-modal
                :nb-action="nbAction" 
                :modal="modal" 
                @modalClose="modalClose()" 
                :head-color="$App.theme.headModal"
            >
                <oferta-comercial-form 
                    :accion="accion" 
                    :item="item"
                    :titulo="titulo" 
                    @modalClose="modalClose()"
                ></oferta-comercial-form>

            </app-modal>

            <app-dialogo 
                :dialog="dialog"
                mensaje="Desea eliminar el Item Seleccionado?"
                @delItem="delItem()"
                @delCancel="delCancel()"
            ></app-dialogo>

            <app-mensaje></app-mensaje>

            <pre v-if="$App.debug">{{ $data }}</pre>

    </list-container>
  
</template>

<script>
import listHelper from '~/mixins/listHelper';
import OfertaComercialForm  from './OfertaComercialForm';
import OfertaComercialDetail  from './OfertaComercialDetail';

export default {
    mixins:     [ listHelper],
    components: { 'oferta-comercial-form': OfertaComercialForm, 
                  'oferta-comercial-detail': OfertaComercialDetail 
                },
    data () {
    return {
        titulo: 'Oferta Comercial',
        headers: [
            { text: 'Nro OC',   value: 'nu_oferta_comercial' },
            { text: 'Fecha',     value: 'fe_oferta_comercial' },
            { text: 'Validez',    value: 'fe_validez' },
            { text: 'Doc. Condiciones',   value: 'nu_doc_condiciones'  },
            { text: 'Acciones', value: 'id_oferta_comercial'  },
        ],

        
    }
    },
    methods:
    {
        list () {

           this.items = [
                    {
                        'id_oferta_comercial': '1', 
                        'nu_oferta_comercial': 'OC-001', 
                        'fe_oferta_comercial': '2019-01-01', 
                        'fe_validez': '2019-01-01', 
                        'nu_doc_condiciones': 'DC-001'
                    },
                    {
                        'id_oferta_comercial': '2', 
                        'nu_oferta_comercial': 'OC-002', 
                        'fe_oferta_comercial': '2019-02-02', 
                        'fe_validez': '2029-02-02', 
                        'nu_doc_condiciones': 'DC-002'
                    }
               ]
           this.isLoading = false
           console.table(JSON.stringify(this.items, null, 2))

           /*
           axios.get('api/ofertaComercial')
            .then(respuesta => {
                this.items = respuesta.data;
            })
            .catch(error => {
                this.showError(error)
            })
            .then(respuesta => {
                this.isLoading = false
            })
            */
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
                this.showError(error)    
            })

        }
    }
}

</script>

<style>

</style>
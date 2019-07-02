<template>

    <form-container :titulo="titulo" :head-color="$App.theme.headForm">

        <v-form ref="form" v-model="valido" lazy-validation>

            <v-layout wrap>
            
                <v-flex xs12 sm4>  
                   <v-text-field
                       label="Numero Oferta Comercial"
                       prepend-icon="mdi-notebook"
                   ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-menu
                    ref="picker"
                    v-model="picker"
                    full-width
                    min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="dates.fe_oferta_comercial"
                        :rules="rules.fecha"
                        label="Fecha Oferta Comercial"
                        prepend-icon="event"
                        readonly
                        required
                        ></v-text-field>
                        <v-date-picker v-model="form.fe_oferta_comercial" locale="es" @input="dates.fe_oferta_comercial = formatDate(form.fe_oferta_comercial)"></v-date-picker>
                    </v-menu>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-text-field
                       label="Factura Proforma"
                       prepend-icon="mdi-file-document-outline"
                   ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-text-field
                       label="Identificacion Tributaria"
                       prepend-icon="mdi-home-currency-usd"
                   ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-text-field
                       label="Nro. Documento de Condiciones"
                       prepend-icon="mdi-clipboard-text-outline"
                   ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>
                    <v-menu
                    ref="picker"
                    v-model="picker"
                    full-width
                    min-width="290px"
                    >
                        <v-text-field
                        slot="activator"
                        v-model="dates.fe_oferta_comercial"
                        :rules="rules.fecha"
                        label="Fecha de Validez"
                        prepend-icon="mdi-calendar-check"
                        readonly
                        required
                        ></v-text-field>
                        <v-date-picker v-model="form.fe_oferta_comercial" locale="es" @input="dates.fe_oferta_comercial = formatDate(form.fe_oferta_comercial)"></v-date-picker>
                    </v-menu>
                </v-flex>
 
                 <v-flex sm4>
                    <v-radio-group v-model="form.id_transporte" row label="Medio de Transporte " :rules="rules.requerido">
                        <v-icon>directions_boat</v-icon>
                        <v-radio :value="1" ></v-radio>
                        <v-icon>local_shipping</v-icon>
                        <v-radio :value="2"></v-radio>
                        <v-icon>flight</v-icon>
                        <v-radio :value="3"></v-radio>
                    </v-radio-group>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-text-field
                       label="Cant. Contenedores"
                       prepend-icon="mdi-buffer"
                   ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-text-field
                       label="Peso (Tns.)"
                       prepend-icon="mdi-weight-kilogram"
                   ></v-text-field>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-select
                        label="Tipo de Contenedor"
                        v-model="form.id_tipo_banco"
                        :items="['Open top', '12' ]"
                        :rules="rules.requerido"
                        prepend-icon="mdi-package-variant"
                    ></v-select>
                </v-flex>
                
                <v-flex xs12 sm4>  
                   <v-select
                        label="Puerto Origen"
                        v-model="form.id_tipo_banco"
                        :items="['Open top', '12' ]"
                        :rules="rules.requerido"
                        prepend-icon="mdi-airplane-takeoff"
                    ></v-select>
                </v-flex>

                <v-flex xs12 sm4>  
                   <v-select
                        label="Puerto Destino"
                        v-model="form.id_tipo_banco"
                        :items="['Open top', '12' ]"
                        :rules="rules.requerido"
                        prepend-icon="mdi-airplane-landing"
                    ></v-select>
                </v-flex>


            </v-layout>

     </v-form>

    <template slot="buttons">
        <form-buttons
            @update="update()"
            @store="store()"
            @clear="clear()"
            @cancel="cancel()"
            :btnAccion="btnAccion"
            :valido="valido"
        ></form-buttons>
    </template>

    </form-container>
</template>

<script>

import formHelper from '~/mixins/formHelper';

export default {
    mixins: [formHelper],
    data(){
        return{
            tabla: 'pago',
            tabs: 'tab1',
            form:{
                id_oferta_comercial: '',
                nu_oferta_comercial: '',
                fe_oferta_comercial: '',
                fe_validez:          '',
                nu_doc_condiciones:  '',
                tx_observaciones:    '',
                id_usuario:          '',
            },
            dates:{
                fe_oferta_comercial: '',
                fe_validez:          '',
            },
            listas:{
                grupoBanco: ['/grupo/1'],
                tipoBanco:  ['/tipo/1'],
                status:     ['/grupo/3'],
            },
        }
    },
    methods:
    {
        update()
        {

        },
        store()
        {

        }

    }            
}
</script>
</script>

<style>

</style>

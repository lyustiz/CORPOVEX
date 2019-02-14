<template>
<div>   

    <!--<v-form ref="form" v-model="valido" lazy-validation>
        <v-card>
            
            <v-card-title class="light-blue darken-3 white--text">
                <h2>Pago</h2>
            </v-card-title>
            
            <v-card-text>
            <v-layout wrap>
            
            <v-flex xs12 sm6>  
                <v-select
                :items="listas.tipoPago"
                item-text="nb_tipo_pago"
                item-value="id_tipo_pago"
                v-model="form.id_tipo_pago"
                :rules="rules.pagoTotal"
                label="Tipo de Pago"
                autocomplete
                required
                @input="tipoPago"
                ></v-select>
            </v-flex>
                
            </v-card-text>
        </v-card>
    </v-form>-->
</div> 
</template>

<script>
export default {
    tabla: 'pago',
            pagoTotal: false,
            pickers: {
                fe_liq_bcv: false,
                fe_pago:    false
            },
            tasaReadOnly: false,
            esquema: 'Solicitud',
            form:{
                id_instruccion:  '',
                fe_liq_bcv:      '',
                id_banco:        '',
                fe_pago:         '',
                id_moneda:       '',
                mo_tasa:         '',
                mo_final_pago:   '',
                id_tipo_pago:    '',
                id_ente:         '',
                tx_observaciones:'',
                id_usuario:      '',
                id_status:       '',
            },
            listas:{
                banco:    ['/grupo/1'],
                moneda:   [],
                tipoPago: [],
                ente:     ['/grupo/6']
                //status:   ['/grupo/3'],
            },
            rules:{
                montoPago: [
                    v => !!v || 'Indique Monto',
                    v => (Number(v) > this.moPendiente) 
                         ? `Monto mayor al disponible ${this.moPendiente}` 
                         : true
                   ],
                pagoTotal: [
                    v => !!v || 'Seleccione una Opcion (Campo Requerido)',
                    v => (Number(v) == 1 && this.montos.pagado > 0 && this.montos.pagado && this.item.id_tipo_pago != 1) 
                         ? 'Ya existe pagos parciales'
                         : true
                   ],
            },
}
</script>

<style>

</style>

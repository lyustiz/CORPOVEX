<template>
    <form-container :titulo="titulo" :head-color="$App.theme.headForm">
    </form-container>
</template>

<script>

import formHelper from '~/mixins/formHelper';

export default {
    mixins: [formHelper],
    data(){
        return{
            tabla: 'pago',
            form:{
                id_banco:        '',
                nb_banco:        '',
                id_grupo_banco:  '',
                id_tipo_banco:   '',
                tx_observaciones:'',
                id_usuario:      '',
                id_status:       '',
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

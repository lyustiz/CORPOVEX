export default {
    computed:
    {
        msjTimeout(){ return this.$store.getters['msjTimeout'] }
    },
    methods: 
    {

        verMensaje (message) 
        {
            this.mostrarBarraMsj(message, 'success')
        },

        verError (error) 
        {
            console.log(error.response)
            
            if(error.hasOwnProperty('response'))
            {
                if(error.response === undefined)
                {
                    this.mostrarBarraMsj( 'El servicio no Responde', 'error')
                    return
                }
            
                let status = error.response.status;
                let msj    = '';
    
            switch (status) 
            {
                case 500:
                msj = 'Error interno ->' + error.response.data.message
                break;
    
                case 404:
                msj = 'Servicio No disponible'
                break;
                
                case 403:
                msj = 'Sin autorizacion'
                break;
    
                case 401:
                msj = 'Session invalida favor Ingresar nuevamente '
                this.mostrarBarraMsj(msj, 'error')
                window.location.href = '/'
                break;
    
                case 429:
                for (var idx in error.response.data.errors) 
                {
                    msj = msj + error.response.data.errors[idx];
                }
                msj = ( msj != '') ? msj :  'Servicio Ocupado favor Ingresar en unos Minutos'
                break;
    
                case 422:
                for (var idx in error.response.data.errors) 
                {
                    msj = msj + error.response.data.errors[idx];
                }
                break;
                
                case 400:
                for (var idx in error.response.data) 
                {
                    msj = msj + error.response.data[idx];
                }
                break;
    
                default:
                for (var idx in error.response.data) 
                {
                    msj = msj + error.response.data[idx];
                }
                break;
            }
            
                this.mostrarBarraMsj( msj, 'error')
    
            }else
            {
                this.mostrarBarraMsj(error, 'error')  
            }
            
        },

        limpiarMsj () 
        {
            setTimeout( () => 
            {
                this.$store.commit('setMsjShow', false)
                this.$store.commit('setMsjText', '')
                this.$store.commit('setMsjSubText', '')
            }, this.msjTimeout)
        },

        mostrarBarraMsj (message, color) 
        {
            this.$store.commit('setMsjShow', true)
            this.$store.commit('setMsjColor', color || 'error')
    
            if (typeof message === 'string') 
            {
                this.$store.commit('setMsjText', message)
                this.limpiarMsj()
                return
            }
    
            this.$store.commit('setMsjText', message.message)
    
            if (message.response)
            {
                this.$store.commit('setMsjSubText',message.response.data.message)
            } 
            
            this.limpiarMsj()
        }
    }
}
  
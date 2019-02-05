 const types =   {
                    SET_MSJ_SHOW       : 'SET_MSJ_SHOW',
                    SET_MSJ_COLOR      : 'SET_MSJ_COLOR',
                    SET_MSJ_TEXT       : 'SET_MSJ_TEXT',
                    SET_MSJ_SUBTEXT    : 'SET_MSJ_SUBTEXT',
                    SET_MSJ_TIMEOUT    : 'SET_MSJ_TIMEOUT',
                }

export default {
    state : 
    {
        show: false,
        color: 'error',
        text: 'Ha ocurrido un error',
        subText: '',
        timeout: 3000
    },
    getters : 
    {
        msjShow:     state => state.show,
        msjColor:    state => state.color,
        msjText:     state => state.text,
        msjSubtext:  state => state.subText,
        msjTimeout:  state => state.timeout,
    },
    mutations:
    {
        [ types.SET_MSJ_SHOW ] (state, show) 
        {
            state.show = show
        },
        [ types.SET_MSJ_COLOR ] (state, color) 
        {
            state.color = color
        },
        [ types.SET_MSJ_TEXT ] (state, text) 
        {
            state.text = text
        },
        [ types.SET_MSJ_SUBTEXT ] (state, subText) 
        {
            state.subText = subText
        },
        [ types.SET_MSJ_TIMEOUT ] (state, timeout) 
        {
            state.timeout = timeout
        }
    }
}

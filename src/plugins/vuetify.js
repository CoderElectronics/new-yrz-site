import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#CB904D',//#CBAA5C',
        secondary: '#083759',
      },
    },
  },
})

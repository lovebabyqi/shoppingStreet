import Vue from 'vue'
const requireContext = require.context('./',true,/\.vue$/)
requireContext.keys().forEach(fileName=>{
    const componentConfig = requireContext(fileName)
    Vue.component(
        componentConfig.default.name,
        componentConfig.default
    )
})

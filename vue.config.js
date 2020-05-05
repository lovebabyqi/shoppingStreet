module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'assets': '@/assets',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views',
                'utils':'@/utils',
            }
        }
    },
    productionSourceMap: false,
};

// externals: {
//     Vue: 'Vue',
//     vuex: 'vuex',
//     vueRouter: 'vue-router',
//     axios:'axios'
// },

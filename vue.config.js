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
    }

};

// externals: {
//     Vue: 'Vue',
//     vuex: 'vuex',
//     vueRouter: 'vue-router',
//     axios:'axios'
// },

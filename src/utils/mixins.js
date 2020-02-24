import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
    data(){
        return{
            isShowBackTop:false
        }
    },
    components:{
        BackTop
    },
    methods:{
        backTop(){
            this.$refs.scroll.scrollTo(0,0)
        }
    }
}

import Toast from "./Toast";

//把Toast组件注册到vue原型上,让每一个组件都可以使用Toast上的属性和方法

var ToastPlugin = {
    install(Vue){
        //生成构造器
        const ToastConstructor = Vue.extend(Toast)
        //生成组件的实例化对象
        const toast = new ToastConstructor()
        //把组件的实例化对象和一个dom节点关联
        toast.$mount(document.createElement('div'))
        //把toast组件的根节点挂载到body上
        document.body.appendChild(toast.$el)
        Vue.prototype.$toast = toast
    }
}
export default ToastPlugin

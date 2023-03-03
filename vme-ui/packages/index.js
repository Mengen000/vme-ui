import './assets/fonts/iconfont.css'
const requireComponent = require.context('./components', true, /\.vue$/)
const install = (Vue) =>{
  if (install.installed) return;
  install.installed;
  requireComponent.keys().forEach((element) => {
    const config = requireComponent(element);
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config)
  })
}

if(typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

import lu_message from './message';
import lu_messagebox from './message-box';

const components = [
  lu_message
]

const install = function(Vue) {
  /* istanbul ignore if */
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$lu_message = lu_message;

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
	install,
  lu_message
}

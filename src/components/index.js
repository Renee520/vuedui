import Aside from '@/components/yy-aside';
import Header from '@/components/yy-header';

const components = [
  Aside,
  Header,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install };

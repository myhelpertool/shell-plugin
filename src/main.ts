import * as component from "./components";

// Déclaration de la méthode d'installation utilisée via Vue.use(...)
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export function install(Vue) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  if (install.installed) return;

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  install.installed = true;

  Vue.component("ShellPlugin", component);
}

// Création du module à destionation Vue.use(...)
const plugin = {
  install
};

// Installation automatique si Vue est détecté (par exemple dans un navigation via la balise <script>)
let GlobalVue = null;

if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
} else if (typeof global !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  GlobalVue = global.Vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Exporter en tant que module (pour npm/webpack/etc.)
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export default component;

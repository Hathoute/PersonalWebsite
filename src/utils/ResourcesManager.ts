

export function getDataJSON(name: string) {
  return require('../../public/resources/data/' + name);
}

export function getLangJSON(name: string) {
  return require('../../public/resources/i18n/' + name);
}

export function getIcon(name: string) {
  return '/resources/icons/' + name;
}
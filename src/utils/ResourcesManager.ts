

export function getDataJSON(name: string) {
  return require('../resources/data/' + name);
}

export function getLangJSON(name: string) {
  return require('../resources/i18n/' + name);
}

export function getImage(name: string) {
  return require('../resources/images/' + name);
}

export function getIcon(name: string) {
  return require('../resources/icons/' + name);
}


export function getJSON(name: string) {
  return require('../resources/data/' + name);
}

export function getImage(name: string) {
  return require('../resources/images/' + name);
}

export function getIcon(name: string) {
  return require('../resources/icons/' + name);
}
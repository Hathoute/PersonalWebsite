import {getLangJSON} from "./ResourcesManager";

const supportedLanguages = ['en', 'fr'];
const fallbackLanguage = 'en';

let langData : { [key: string]: string } = {};
let currentLang : string;
function loadLangFile(lang: string) {
  if(supportedLanguages.indexOf(lang) === -1) {
    lang = fallbackLanguage;
  }

  if(lang === currentLang) {
    return;
  }

  currentLang = lang;
  const json = getLangJSON(currentLang + '.json');
  langData = flattenObject(json);
}

function flattenObject(object: Object) : {[key:string]:string} {
  let flat : {[key:string]:string} = {};
  const internal = (prefix: string, obj: Object) => {
    for(const key in obj) {
      const val = obj[key as keyof typeof obj];
      // Test if val is not primitive.
      if(val === Object(val)) {
        internal(prefix + key + ".", val);
      }
      else {
        flat[prefix + key] = val as unknown as string;
      }
    }
  }

  internal("", object);
  return flat;

}

function ensureInitialized(lang: string) {
  if(currentLang !== lang) {
    loadLangFile(lang);
  }
}

export function getString(key: string, lang: string) : string {
  ensureInitialized(lang);

  if(langData![key] === undefined) {
    return 'NOTFOUND_' + currentLang + '_' + key;
  }

  return langData![key];
}
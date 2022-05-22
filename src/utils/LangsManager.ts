import {getLangJSON} from "./ResourcesManager";


const supportedLanguages = ['en', 'fr'];
const fallbackLanguage = 'en';
let initialized = false;
let langGetter: string, langSetter: (lang: string) => void;

export function initializeLang(getter: string, setter: (lang: string) => void) {
  if(supportedLanguages.indexOf(getter) === -1) {
    setter(fallbackLanguage);
  }

  if(getter !== langGetter) {
    langGetter = getter;
    langSetter = setter;
    loadLangFile();
  }

  initialized = true;
}

let langData : { [key: string]: string };
function loadLangFile() {
  const json = getLangJSON(langGetter + '.json');
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

function ensureInitialized() {
  if(!initialized) {
    throw new Error("LangsManager must be initialized before calling any string method.")
  }
}

export function getString(key: string) : string {
  ensureInitialized();

  if(langData![key] === undefined) {
    return 'NOTFOUND_' + langGetter + '_' + key;
  }

  return langData![key];
}
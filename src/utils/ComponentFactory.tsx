import {Box, Typography} from "@mui/material";
import {getToolData} from "./DataManager";
import {getString} from "./LangsManager";

interface IconProvider {
  generate(size:number) : any;
}

class SimpleIconIconProvider implements IconProvider{
  constructor(private iconSlug: string) {}

  generate(size: number): any {
    return (
      <img style={{filter: 'invert(1.0)'}} height={size} width={size} src={"https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/" + this.iconSlug + ".svg"} />
    )
  }
}

class CustomIconProvider implements IconProvider {
  constructor(
    private iconId: string,
    private type: 'png'|'svg',
    private sizes?: number[]
  ) {
    if (type !== 'svg' && sizes === undefined) {
      throw new Error("Icon types other than svg must provide available sizes");
    }

    if(sizes !== undefined) {
      this.sizes = this.sizes!.sort((x,y) => y-x);
    }
  }

  private getIcon(size: number) : string {
    // If the icon is a svg, no scaling is needed
    if (this.type === 'svg') {
      return require("../resources/icons/" + this.iconId + "/" + this.iconId + ".svg");
    }

    // It is guaranteed that (this.sizes !== undefined) (constructor check...)
    let szs = this.sizes!;
    let selectedSize = szs[0];
    for (const sz of szs) {
      if(sz < size)
        break;

      selectedSize = sz;
    }

    return require("../resources/icons/" + this.iconId + "/" + selectedSize + "px." + this.type);
  }

  generate(size: number): any {
    return (
      <img height={size} width={size} src={this.getIcon(size)} />
    )
  }
}

let providers : {[identifier: string]: IconProvider} = {
  'github': new SimpleIconIconProvider("github"),
  'facebook': new SimpleIconIconProvider("facebook"),
  'instagram': new SimpleIconIconProvider("instagram"),
  'linkedin': new SimpleIconIconProvider("linkedin"),
  'gmail': new SimpleIconIconProvider("gmail"),
  'googleplay': new SimpleIconIconProvider("googleplay"),
  'github-light': new CustomIconProvider("github-light", "png", [32, 64, 120])
}

export function registerIcon(icon: string) {
  let sp = icon.split(':');
  if(sp.length !== 2) {
    throw new Error("Malformed icon literal \'" + icon + "\', must be \'type:identifier\'");
  }

  switch (sp[0]) {
    case 'si':
      if(providers[sp[1]] === undefined) {
        providers[sp[1]] = new SimpleIconIconProvider(sp[1]);
      }
      break;
    default:
      throw new Error("Cannot register icon literal \'" + icon + "\', icon type \'" + sp[0] + "\' not supported");
  }
}

export function createDecoratedLink(iconId: string, name: string, size: number, url: string) {
  const provider = providers[iconId as keyof typeof providers];

  if(provider === undefined) {
    throw new Error("Icon identifier " + iconId + " is not bound to any provider");
  }

  return (
    <Box sx={{display: 'inline-flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => window.open(url, '_blank')!.focus()}>
      {provider.generate(size)}
      <Typography sx={{marginLeft: '3px', fontSize: size, fontWeight: 'inherit'}}>{name}</Typography>
    </Box>
  )
}

export function createDecoratedLinkFromTool(toolId: string, size: number) {
  const tool = getToolData(toolId);

  return createDecoratedLink(tool.icon.split(':')[1], tool.fullName, size, tool.homeUrl);
}

export function createIconLink(iconId: string, size: number, url: string) {
  const provider = providers[iconId as keyof typeof providers];

  if(provider === undefined) {
    throw new Error("Icon identifier " + iconId + " is not bound to any provider");
  }

  return (
    <Box sx={{cursor: 'pointer'}} onClick={() => window.open(url, '_blank')!.focus()}>
      {provider.generate(size)}
    </Box>
  )
}

export function createLang(langId: string, lang: string) {
  const str = getString(langId, lang);
  const regex = /(\#(\w+)\{(.+?)\})|(\\n)|(.+?)/g;
  let rawComponents: Array<Object> = [""];

  let m;
  do {
    m = regex.exec(str);
    if (m) {
      if(m[5] !== undefined) {
        // Character match
        rawComponents.push(rawComponents.pop() + m[5])
      }
      else if(m[1] !== undefined) {
        // Custom component
        const params = m[3].split(',');
        switch (m[2]) {
          case "tool":
            rawComponents.push(createDecoratedLinkFromTool(params[0], Number.parseInt(params[1])))
            break;
          case "url":
            rawComponents.push(<a href={params[1]}>{params[0]}</a>);
            break;
        }
        rawComponents.push("");
      }
      else if(m[4] !== undefined) {
        // NewLine
        rawComponents.push(<br/>);
        rawComponents.push("");
      }
    }
  } while (m);

  return <span>
  {rawComponents.map((raw, i) => {
    if (raw !== Object(raw)) {
      if(raw !== "")
        return <span>{raw as unknown as string}</span>;
    }
    else {
        return raw as unknown as JSX.Element;
    }
  })}
  </span>
}
import {getJSON} from "./ResourcesManager";
import {registerIcon} from "./ComponentFactory";


export interface ProjectData {
  title: string,
  tools: string,
  description: string,
  external?: { iconId: string, name: string, url: string },
}

interface Projects {
  featured: ProjectData[],
  remaining: ProjectData[],
}

let cachedProjects : Projects | undefined = undefined;
export function getProjects() : Projects {
  if(cachedProjects === undefined) {
    cachedProjects = getJSON('projects.json');
  }

  return cachedProjects!;
}

interface ToolData {
  identifier: string;
  fullName: string;
  homeUrl: string;
  icon: string;
}

let cachedTools : ToolData[] | undefined = undefined;
let toolsByIdentifier : Object | undefined = undefined;
export function getTools() : ToolData[] {
  if (cachedTools === undefined) {
    cachedTools = getJSON('tools.json');
  }

  return cachedTools!;
}

export function getToolData(identifier: string) : ToolData {
  if(toolsByIdentifier === undefined) {
    toolsByIdentifier = Object.assign({}, ...(getTools().map(x => ({[x.identifier]: x}))));
  }
  let data = toolsByIdentifier![identifier as keyof typeof toolsByIdentifier];
  if(data === undefined) {
    throw new Error("Identifier " + identifier + " is not bound to any tool.");
  }

  return data;
}

export interface ToolUsage {
  data: ToolData;
  projects: ProjectData[];
}

let toolUsage : ToolUsage[] | undefined = undefined;
export function getOrderedToolUsage() : ToolUsage[] {
  if(toolUsage !== undefined) {
    return toolUsage;
  }

  const projects = getProjects();
  let usages : {[identifier: string]: ToolUsage} = {};
  toolUsage = [];

  for (let project of projects.featured.concat(projects.remaining)) {
    let usedTools = project.tools.split(',').map(x => x.trim());
    for (let tool of usedTools) {
      if(usages[tool] === undefined) {
        usages[tool] = {data: getToolData(tool), projects: []};
        toolUsage.push(usages[tool]);
      }
      usages[tool].projects.push(project);
    }
  }

  toolUsage = toolUsage.sort((x,y) => y.projects.length - x.projects.length);

  return toolUsage;
}

export function initDataManager() {
  for (const tool of getTools()) {
    registerIcon(tool.icon);
  }
}
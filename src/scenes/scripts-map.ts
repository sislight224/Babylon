import { ScriptMap } from "./tools";

/**
 * Defines the interface that exposes all exported scripts in this project.
 */
export interface ISceneScriptMap {
	"src/scenes/_graphs/graphs_launchBall.graph.ts": ScriptMap;
	"src/scenes/_graphs/graphs_pointerLock.graph.ts": ScriptMap;
	"src/scenes/scene/camera.ts": ScriptMap;
}

/**
 * Defines the map of all available scripts in the project.
 */
export const scriptsMap: ISceneScriptMap = {
	"src/scenes/_graphs/graphs_launchBall.graph.ts": require("./_graphs/graphs_launchBall.graph"),
	"src/scenes/_graphs/graphs_pointerLock.graph.ts": require("./_graphs/graphs_pointerLock.graph"),
	"src/scenes/scene/camera.ts": require("./scene/camera"),
}

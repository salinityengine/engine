/**
 * @description Salinity
 * @about       Easy to use JavaScript game engine.
 * @author      Written by Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/stevinz/salinity
 */

/******************** CONSTANTS ********************/

import { VERSION } from './constants.js';
export * from './constants.js';

/******************** APPLICATION ********************/

// App
export { App } from './app/App.js';
export { AssetManager } from './app/AssetManager.js';
export { ComponentManager } from './app/ComponentManager.js';
export { SceneManager } from './app/SceneManager.js'

/******************** ASSETS  ********************/

// Assets
export { Palette } from './assets/Palette.js';
export { Script } from './assets/Script.js';

// Assets, Scripts, Camera
export { MoveCamera } from './assets/scripts/MoveCamera.js';
export { OrbitEntity } from './assets/scripts/OrbitEntity.js';

// Assets, Scripts, Controls
export { DragControls } from './assets/scripts/DragControls.js';
export { DrivingControls } from './assets/scripts/DrivingControls.js';
export { KeyControls } from './assets/scripts/KeyControls.js';
export { ZigZagControls } from './assets/scripts/ZigZagControls.js';

// Assets, Scripts, Entity
export { ColorChange } from './assets/scripts/ColorChange.js';
export { FollowCamera } from './assets/scripts/FollowCamera.js';
export { RotateEntity } from './assets/scripts/RotateEntity.js';

/******************** PROJECT  ********************/

// Core
export { Project } from './project/Project.js';

// Core, Scene3D
export { Camera3D } from './project/world3d/Camera3D.js';
export { Entity3D } from './project/world3d/Entity3D.js';
export { Stage3D } from './project/world3d/Stage3D.js';
export { World3D } from './project/world3d/World3D.js';

/******************** UTILS  ********************/

// Object
export { EntityUtils } from './utils/EntityUtils.js';

// Utils
export { Clock } from './utils/Clock.js';
export { Iris } from './utils/Iris.js';
export { Maths } from './utils/Maths.js';
export { Strings } from './utils/Strings.js';
export { System } from './utils/System.js';
export { Vectors } from './utils/Vectors.js';

/******************** REGISTER COMPONENTS ********************/

// Entity
import './project/world3d/entity/Geometry.js';
import './project/world3d/entity/Material.js';
import './project/world3d/entity/Mesh.js';
import './project/world3d/entity/Script.js';
import './project/world3d/entity/Test.js';
// import './project/world3d/entity/Sprite.js';

// World
import './project/world3d/world/Physics.js';
import './project/world3d/world/Post.js';

/******************** ENSURE SINGLE IMPORT ********************/

if (typeof window !== 'undefined') {
    if (window.__SALINITY__) console.warn(`Salinity v${window.__SALINITY__} already imported, now importing v${VERSION}!`);
    else window.__SALINITY__ = VERSION;
}

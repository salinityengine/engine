import { APP_SIZE } from '../../constants.js';
import { Entity } from '../Entity.js';
import { Entity3D } from './Entity3D.js';
import { Maths } from '../../utils/Maths.js';

class Camera3D extends Entity3D {

    constructor({
        name,
        type = 'PerspectiveCamera',
        width = APP_SIZE,           // initial dom element width
        height = APP_SIZE,          // initial dom element height
        fit,                        // 'none', 'width', 'height'
        near,
        far,
        // perspective
        fieldOfView,
        // orthographic
        // ... EMPTY
    } = {}) {
        super(name ?? 'Camera');

        // Type Check
        if (type !== 'OrthographicCamera' && type !== 'PerspectiveCamera') {
            type = 'PerspectiveCamera';
        }

        // Prototype
        this.isCamera = true;
        this.isCamera3D = true;
        this.type = type;

        // // Properties, THREE.Camera
        // this.matrixWorldInverse = new THREE.Matrix4();
        // this.projectionMatrix = new THREE.Matrix4();
        // this.projectionMatrixInverse = new THREE.Matrix4();
        // this.coordinateSystem = THREE.WebGLCoordinateSystem;

        // Properties
        if (fit !== 'width' && fit !== 'height') fit = 'none';
        this.fit = fit;
        this.near = near ?? ((type === 'PerspectiveCamera') ? 0.01 : - 1000);
        this.far = far ?? ((type === 'OrthographicCamera') ? 1000 : 1000);

        // Properties, Perspective
        this.fieldOfView = fieldOfView ?? 58.10;

        // Properties, Orthographic
        // ... EMPTY

        // Flags
        this.isPerspectiveCamera = (type === 'PerspectiveCamera');
        this.isOrthographicCamera = (type === 'OrthographicCamera');
        this.aspect = 1;
        this.rotateLock = false;
        this.view = null; /* view offset */
        this.zoom = 1;

        // Flags, Perspective
        this.fov = 58.10;

        // // Flags, Orthographic
        // this.target = new THREE.Vector3();

        // Init Size
        this.setSize(width, height);
    }

    /******************** THREE.CAMERA */

    updateMatrix() {
        // const superUpdateMatrix = THREE.Object3D.prototype.updateMatrix.bind(this);
        // superUpdateMatrix();
    }

    getWorldDirection(target) {
        // this.updateWorldMatrix(true, false);
        // const e = this.matrixWorld.elements;
        // return target.set(- e[8], - e[9], - e[10]).normalize();
    }

    updateMatrixWorld(force) {
        // super.updateMatrixWorld(force);
        // this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }

    updateWorldMatrix(updateParents, updateChildren) {
        // super.updateWorldMatrix(updateParents, updateChildren);
        // this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }

    /******************** TYPE */

    changeType(type) {
        if (!type || typeof type !== 'string') return this;
        type = type.toLowerCase().replace('camera', '');
        if (type === 'orthographic') this.type = 'OrthographicCamera';
        else if (type === 'perspective') this.type = 'PerspectiveCamera';
        else return this;

        this.isPerspectiveCamera = (this.type === 'PerspectiveCamera');
        this.isOrthographicCamera = (this.type === 'OrthographicCamera');

        if (this.isPerspectiveCamera) this.near = (10 / this.far);
        if (this.isOrthographicCamera) this.near = (this.far * -1);

        this.updateProjectionMatrix();
        return this;
    }

    /******************** SIZE / FIT */

    changeFit(fit) {
        if (fit === 'landscape') fit = 'width';
        if (fit === 'portrait') fit = 'height';
        if (fit !== 'width' && fit !== 'height') fit = 'none';
        this.fit = fit;
        return this;
    }

    setSize(width = APP_SIZE, height = APP_SIZE) {
        this.lastWidth = width;
        this.lastHeight = height;

        this.aspect = width / height;

        /* Perspective */ {
            if (this.fit === 'height') {
                this.fov = this.fieldOfView;
            } else {
                const tanFOV = Math.tan(((Math.PI / 180) * this.fieldOfView) / 2);
                if (this.fit === 'width') {
                    this.fov = (360 / Math.PI) * Math.atan(tanFOV / this.aspect);
                } else { // (this.fit === 'none') {
                    this.fov = (360 / Math.PI) * Math.atan(tanFOV * (height / APP_SIZE));
                }
            }
        }

        /* Orthographic */ {
            if (this.fit === 'width') {
                width = APP_SIZE;
                height = width / this.aspect;
            } else if (this.fit === 'height') {
                height = APP_SIZE;
                width = height * this.aspect;
            }

            this.left =    - width / 2;
            this.right =     width / 2;
            this.top =       height / 2;
            this.bottom =  - height / 2;
        }

        // Update
        this.updateProjectionMatrix();
        return this;
    }

    /******************** PROJECTION MATRIX (FRUSTUM) */

    updateProjectionMatrix(target /* Vector3 */) {

        // Update Target
        if (target) {
            if (target.isObject3D) target = target.position;
            this.target.copy(target);
        }

        // Orthographic Zoom, Scale Postion--->Target Distance
        // NOTE: Starting Camera distance is '10'
        //  1 world unit === 1000 pixels at distance 1
        //  1 world unit === 100 pixels at distance 10 (demo settings)
        //  1 world unit === 10 pixels at distance 100
        //  1 world unit === 1 pixels at distance 1000 (careful near / far)
        const distance = this.position.distanceTo(this.target);
        const zoom = Maths.noZero(1000 / distance);
        this.zoom = zoom;

        // https://github.com/mrdoob/three.js/blob/dev/src/cameras/PerspectiveCamera.js
        if (this.isPerspectiveCamera) {
            let top = this.near * Math.tan((Math.PI / 180) * 0.5 * this.fov);
            let height = 2 * top;
            let width = this.aspect * height;
            let left = - 0.5 * width;

            const view = this.view;
            if (view && view.enabled) {
                const fullWidth = view.fullWidth;
                const fullHeight = view.fullHeight;
                left += view.offsetX * width / fullWidth;
                top -= view.offsetY * height / fullHeight;
                width *= view.width / fullWidth;
                height *= view.height / fullHeight;
            }

            this.projectionMatrix.makePerspective(left, left + width, top, top - height, this.near, this.far, this.coordinateSystem);
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }

        // https://github.com/mrdoob/three.js/blob/dev/src/cameras/OrthographicCamera.js
        if (this.isOrthographicCamera) {
            const dx = (this.right - this.left) / (2 * zoom);
            const dy = (this.top - this.bottom) / (2 * zoom);
            const cx = (this.right + this.left) / 2;
            const cy = (this.top + this.bottom) / 2;

            let left = cx - dx;
            let right = cx + dx;
            let top = cy + dy;
            let bottom = cy - dy;

            const view = this.view;
            if (view && view.enabled) {
                const scaleW = (this.right - this.left) / view.fullWidth / zoom;
                const scaleH = (this.top - this.bottom) / view.fullHeight / zoom;
                left += scaleW * view.offsetX;
                right = left + scaleW * view.width;
                top -= scaleH * view.offsetY;
                bottom = top - scaleH * view.height;
            }

            this.projectionMatrix.makeOrthographic(left, right, top, bottom, this.near, this.far, this.coordinateSystem);
            this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
        }

    }

    /******************** VIEW OFFSET */

    setViewOffset(fullWidth, fullHeight, x, y, width, height) {
        if (!this.view) this.view = {};
        this.view.enabled = true;
        this.view.fullWidth = fullWidth;
        this.view.fullHeight = fullHeight;
        this.view.offsetX = x;
        this.view.offsetY = y;
        this.view.width = width;
        this.view.height = height;

        this.setSize(fullWidth, fullHeight);
    }

    clearViewOffset() {
        if (this.view && this.view.enabled) {
            this.view.enabled = false;
            this.setSize(this.view.fullWidth, this.view.fullHeight);
        }
    }

    /******************** COPY */

    copy(source, recursive = true) {
        // Entity3D
        super.copy(source, recursive);

        // THREE.Camera
        // this.matrixWorldInverse.copy(source.matrixWorldInverse);
        // this.projectionMatrix.copy(source.projectionMatrix);
        // this.projectionMatrixInverse.copy(source.projectionMatrixInverse);
        // this.coordinateSystem = source.coordinateSystem;

        // Camera3D
        this.changeType(source.type);
        this.fit = source.fit;
        this.near = source.near;
        this.far = source.far;

        // Perspective
        this.fieldOfView = source.fieldOfView;

        // Orthographic
        // ... EMPTY

        // Attempt to Copy Size
        this.setSize(source.lastWidth, source.lastHeight);
        return this;
    }

    /******************** JSON */

    toJSON(recursive = true) {
        // Entity3D
        const data = super.toJSON(recursive);

        // Camera3D
        data.cameraType = this.type;
        data.type = 'Camera3D';
        data.fit = this.fit;
        data.near = this.near;
        data.far = this.far;

        // Perspective
        data.fieldOfView = this.fieldOfView;

        // Orthographic
        // ... EMPTY

        return data;
    }

    fromJSON(data) {
        // Entity3D
        super.fromJSON(data);

        // Camera3D
        if (data.cameraType !== undefined) {
            this.type = data.cameraType;
            this.changeType(this.type);
        }
        if (data.fit !== undefined) this.fit = data.fit;
        if (data.near !== undefined) this.near = data.near;
        if (data.far !== undefined) this.far = data.far;

        // Perspective
        if (data.fieldOfView !== undefined) this.fieldOfView = data.fieldOfView;

        // Orthographic
        // ... EMPTY

        // // Projection Matrix
        // this.updateProjectionMatrix();

        return this;
    }

}

Entity.register('Camera3D', Camera3D);

export { Camera3D };
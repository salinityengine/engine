import { ComponentManager } from '../../../app/ComponentManager.js';

class Mesh {

    //
    //          NEEDS WORK!!!!
    //

    init(data = {}) {
        // Generate Backend

        // const mesh = (data.isObject3D) ? data : new THREE.Object3D();

        // Save Data / Backend
        this.backed = mesh;
        this.data = data;
    }

    dispose() {

    }

    attach() {
        if (this.entity && this.backend) this.entity.add(this.backend);
    }

    detach() {
        if (this.entity && this.backend) this.entity.remove(this.backend);
    }

}

Mesh.config = {
    icon: ``,
    color: '#F7DB63',
    multiple: true,
    family: [ 'Entity3D' ],
};

ComponentManager.register('mesh', Mesh);

import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        const m4 = new THREE.MeshBasicMaterial({color: 0x000000});   

        this.setFloor();
        this.setCircles();
    }

    setFloor() {

        this.geometry = new THREE.PlaneGeometry(1000, 1000);
        this.material = new THREE.MeshStandardMaterial({
            side: THREE.DoubleSide,
        });
        this.material.color instanceof THREE.Color === true;
        this.material.color.set(0x000000);
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x = Math.PI/2+10;
        this.plane.position.y = -10;
        this.plane.receiveShadow = true;
    }

    setCircles() {
        const geometry = new THREE.CircleGeometry(5, 64);
        const material = new THREE.MeshStandardMaterial({ color: 0xe5a1aa });
        const material2 = new THREE.MeshStandardMaterial({ color: 0x8395cd });
        const material3 = new THREE.MeshStandardMaterial({ color: 0x7ad0ac });

        this.circleFirst = new THREE.Mesh(geometry, material);
        this.circleSecond = new THREE.Mesh(geometry, material2);
        this.circleThird = new THREE.Mesh(geometry, material3);

        this.circleFirst.position.y = -0.29;

        this.circleSecond.position.y = -0.28;
        this.circleSecond.position.x = 2;

        this.circleThird.position.y = -0.27;

        this.circleFirst.scale.set(0, 0, 0);
        this.circleSecond.scale.set(0, 0, 0);
        this.circleThird.scale.set(0, 0, 0);

        this.circleFirst.rotation.x =
            this.circleSecond.rotation.x =
            this.circleThird.rotation.x =
                -Math.PI / 2;

        this.circleFirst.receiveShadow =
            this.circleSecond.receiveShadow =
            this.circleThird.receiveShadow =
                true;

        this.scene.add(this.circleFirst);
        this.scene.add(this.circleSecond);
        this.scene.add(this.circleThird);
    }

    resize() {}

    update() {}
}
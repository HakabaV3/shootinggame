#pragma strict

var speed: float;

function Start() {
    this.rigidbody.velocity = this.transform.forward * this.speed;
}
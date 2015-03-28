#pragma strict

var lifeTime: float;

function Start () {
	Destroy(this.gameObject, this.lifeTime);
}
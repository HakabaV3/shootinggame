#pragma strict

var boundary: Boundary;
var shot: GameObject;
var shotSpawn : Transform;
private var playerController: PlayerController;

function Start() {
    var playerControllerObject: GameObject = GameObject.FindWithTag("Player");
    if (playerControllerObject === null) {
        Debug.Log ("Cannot find 'PlayerController' script");
    } else {
        this.playerController = playerControllerObject.GetComponent(PlayerController);
        this.boundary = this.playerController.boundary;
    }
}

function FixedUpdate() {
    this.rigidbody.position = new Vector3(
		Mathf.Clamp (this.rigidbody.position.x, this.boundary.xMin, this.boundary.xMax), 
		0.0f, 
		Mathf.Clamp (this.rigidbody.position.z, this.boundary.zMin, this.boundary.zMax)
    );
}

function useShot() {
    Instantiate(this.shot, this.shotSpawn.position, this.shotSpawn.rotation);
    audio.Play();
}
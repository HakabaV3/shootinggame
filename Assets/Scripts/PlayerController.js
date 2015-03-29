#pragma strict

class Boundary { 
    var xMin: float;
    var xMax: float;
    var zMin: float;
    var zMax: float;
}

var speed: float; 
var boundary: Boundary;
var fireRate: float;
var shot: GameObject;
var shotSpawn : Transform;
var battery: GameObject;
private var coolingTime: float;
private var gameController: GameController;

function Start() {
    var gameControllerObject: GameObject = GameObject.FindWithTag("GameController");
    if (gameControllerObject === null) {
        Debug.Log ("Cannot find 'GameController' script");
    } else {
        this.gameController = gameControllerObject.GetComponent(GameController);
    }
}

function FixedUpdate() {
   	this.rigidbody.velocity.x = Input.GetAxis('Horizontal') * speed;
	this.rigidbody.velocity.z = Input.GetAxis('Vertical') * speed;
	 
    this.rigidbody.position = new Vector3(
		Mathf.Clamp (this.rigidbody.position.x, this.boundary.xMin, this.boundary.xMax), 
		0.0f, 
		Mathf.Clamp (this.rigidbody.position.z, this.boundary.zMin, this.boundary.zMax)
    );
}

function useShot() {
	if (Time.time < this.coolingTime) return;

    this.coolingTime = Time.time + this.fireRate;
    Instantiate(this.shot,this.shotSpawn.position, this.shotSpawn.rotation);
    audio.Play();
}

function useBomb() {
	this.gameController.useBomb();
    audio.Play();
}

function Update() {
    if (Input.GetButton("Fire1")) this.useShot();
    
    if (Input.GetButton("Fire2")) this.useBomb();
}
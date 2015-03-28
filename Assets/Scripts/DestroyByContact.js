#pragma strict

var exprosion: GameObject;
var playerExprosion:  GameObject;
var scoreValue: int;
private var gameController : GameController;

function Start() {
    var gameControllerObject: GameObject = GameObject.FindWithTag("GameController");
    if (gameControllerObject === null) {
        Debug.Log ("Cannot find 'GameController' script");
    } else {
        this.gameController = gameControllerObject.GetComponent(GameController);
    }
}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == 'Boundary') {
		return;
 	}
	
	if (other.gameObject.tag == 'Player') {
	    Instantiate(this.playerExprosion, other.transform.position , other.transform.rotation);
	}
	
	this.gameController.AddScore(this.scoreValue); 
    Instantiate(this.exprosion, this.transform.position, this.transform.rotation);
	Destroy(other.gameObject);
	Destroy(this.gameObject);
}
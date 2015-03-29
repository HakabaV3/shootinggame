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

function killSelf(score: int) {
    Instantiate(this.exprosion, this.transform.position, this.transform.rotation);
	Destroy(this.gameObject);
	this.gameController.addScore(score);
}

function OnTriggerEnter (other : Collider) {
	switch (other.gameObject.tag) {
		case 'Boundary':
			return;
			break;
			
		case 'Player':
			Destroy(other.gameObject); 
		    Instantiate(this.playerExprosion, other.transform.position , other.transform.rotation);
			this.killSelf(0);
		    break;
		
		default:
			Destroy(other.gameObject); 
			this.killSelf(this.scoreValue);
			break;
	}
}
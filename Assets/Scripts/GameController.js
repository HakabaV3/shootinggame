#pragma strict

var hazard: GameObject;
var spawnValues: Vector3;
var hazardCount: int; 
var waveWait: float;
var startWait: float;
var scoreText: GUIText;
private var score: int;

function SpawnWaves() {
    yield WaitForSeconds(startWait);
    while (true)
    {
		var i: int;
		for (i = 0; i < this.hazardCount; i++){
		 	var spawnPosition: Vector3 = new Vector3(Random.Range(-spawnValues.x, spawnValues.x), spawnValues.y, spawnValues.z);
		    var spawnRotation: Quaternion = Quaternion.identity;
		    Instantiate(hazard, spawnPosition, spawnRotation);
	    }
		yield WaitForSeconds(waveWait);
    }
}

function Start () {
	this.score = 0;
	SpawnWaves();
	this.UpdateScore();
}

public function AddScore(addedScore: int) {
	this.score += addedScore;
	this.UpdateScore();
} 
 
function UpdateScore() {
	this.scoreText.text = "score: " + this.score;
}

function Update () {
}
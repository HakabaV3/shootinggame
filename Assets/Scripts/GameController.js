#pragma strict

var hazard: GameObject;
var spawnValues: Vector3;
var hazardCount: int; 
var waveWait: float;
var startWait: float;
var scoreText: GUIText;
var bombText: GUIText; 
private var score: int;
private var nextBombScore: int;
var bombScore: int;
var bombCount: int; 
var maxBombCount: int;		// 
var bombBonusScore: int;	// 

function spawnWaves() {
    yield WaitForSeconds(startWait);
    while (true) {
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
	this.nextBombScore = this.bombScore;
	this.spawnWaves();
	this.updateTexts();
}

function addScore(addedScore: int) {
	this.score += addedScore;
	if (this.score >=  this.nextBombScore) {
		if (this.bombCount == this.maxBombCount) {
			this.score += this.bombBonusScore;
		} else {
			this.bombCount++;
			this.nextBombScore += this.bombScore;
		}
	}
	this.updateTexts();
} 

function useBomb() {
	if (this.bombCount == 0) return;
	this.bombCount--;

	var enemies = GameObject.FindGameObjectsWithTag('Enemy');
	for (var enemy in enemies) {
		var enemyComponent = enemy.GetComponent(DestroyByContact);
		enemyComponent.killSelf(enemyComponent.scoreValue / 2); 
	}
	this.updateTexts();
}

function updateTexts() {
	this.scoreText.text = "score: " + this.score;
	this.bombText.text = "bomb: " + this.bombCount;
}

describe("Player", function() {
  it("describes the properties of a player when they start the game", function() {
    var testPlayer = new Player("Jim");
    expect(testPlayer.gameScore).to.equal(0);
  });
  it("can hold the die, resetting the turnScore to 0 and updating the gameScore", function(){
    var testPlayer = new Player("Bob");
    var turnScoreBeforeRoll = testPlayer.turnScore;
    var gameScoreBeforeHold = testPlayer.gameScore;
    testPlayer.roll();
    var dieValue = testPlayer.turnScore - turnScoreBeforeRoll;
    expect(testPlayer.turnScore).to.equal(turnScoreBeforeRoll + dieValue);
    var turnScoreBeforeHold = testPlayer.turnScore;
    testPlayer.hold();
    expect(testPlayer.gameScore).to.equal(gameScoreBeforeHold + turnScoreBeforeHold);
  });
});

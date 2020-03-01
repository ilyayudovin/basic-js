module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    const myObj ={};
    let turns = Math.pow(2,disksNumber)-1;
    let seconds = turns / (turnsSpeed / 3600);
    myObj.turns = turns;
    myObj.seconds = seconds;
    return myObj;

}
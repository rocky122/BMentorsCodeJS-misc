let gradeCalculator = function(score,maxScore){

    /*First compute the percentage*/
    let percentage = (score/maxScore)*100;
    /* On basis of the percentage assign the grades*/
    let letterGrade = '';
    if(percentage <= 60){
        letterGrade = 'F';
    }else if(percentage <70){
        letterGrade = 'D';
    }else if(percentage < 80){
        letterGrade = 'B';
    }else {
        letterGrade = 'A';
    }
    return (`You got a ${letterGrade} and a percentage of ${percentage}`);
}

console.log(gradeCalculator(90,100));
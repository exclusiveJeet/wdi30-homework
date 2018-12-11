/*There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
*/

let lines = [{ name : "L", stops :["8th","union","23rd","28th","34"]},
             { name : "6", stops :["6th","union","23rd","28th","33rd"]},
             { name : "U", stops :["1st","3rd","union","6th","8th"]}
            ]

const planTrip = function(startLine,startStation,endLine,endStation){

    if(startLine!==endLine){
       console.log("You are on travelling on different line"); 
        for(i in .stops)
         console.log(1);
    }
}
planTrip("L","23rd","U","8th");
/* Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
####### */

// Linear Growth
let varia = "#";
for (let count=1; count <= 7; count ++){
    console.log(varia);
    varia += "#";
    
}
// Exponential Growth
console.log("##################################################################")
console.log("##################################################################")
console.log("##################################################################")
let vari = "#"
for (let count=1; count <= 20; count +=3){
    console.log(vari);
    vari += vari;  
}
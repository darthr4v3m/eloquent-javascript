/* 
Assignment:

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### 
*/

// verbose solution 🥱
let line = "";
for (let index = 0; index < 7; index++) {
    console.log(line += "#");
}

// concise solution 
for (let text = "#"; text.length < 8; text += "#")
    console.log(text);
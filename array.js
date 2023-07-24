

function print( arr){
for(var i = 0 ;i<arr[0].length;i++){
    if(i%2==0){
    for(var j = 0 ; j<arr.length;j++){

        console.log(arr[j][i]);
    }}
    else {
        for(var j = arr.length-1 ; j>=0;j--){

           console.log(arr[j][i]);
        }

     }
}}
module.exports = print
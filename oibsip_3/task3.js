let celcius=document.getElementById("celcius");
let farenheit=document.getElementById("farenheit");
function convertorc_to_f(){
    let output=(parseFloat(celsius.value)*9/5+32);
    farenheit.value=parseFloat(output.toFixed(2));
}
function convertorf_to_c(){
    let output=(parseFloat(farenheit.value)-32)*5/9;
    celsius.value=parseFloat(output.toFixed(2));
}
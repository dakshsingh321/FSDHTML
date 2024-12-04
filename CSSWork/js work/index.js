/*console.log("Hi,inside index.js");
function fun(a,b){
    console.log("Hiiii");
    return a+b;
}
const result=fun(23,12);
console.log(result);*/

function cCompiler()
{
    return "c compiler";
}
function javacompiler(){
    return "Java Compiler";
}
function selectlanguage(clbk){
    return "Hi,you have selected:"+clbk();
}
console.log(selectlanguage(javacompiler))
// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(name){
    if(typeof name === `boolean` || typeof name === `number`||typeof name === `object` || name === ""){
        return `Hello World`;
    } else
        return `Hello ${name}`;
}


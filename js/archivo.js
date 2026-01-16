function saludar(){
    alert("Bienvenido a la Academia de T.I");
}
function suma(){
    var valor1 =24;
    var valor2 =13;
    var resultado = valor1 + valor2
    alert("Resultado de la suma de: "+valor1+  " y " +valor2+ " es: " + resultado);
}

function resta(){
    var valor1 =44;
    var valor2 =13;
    var resultado = valor1 - valor2
    alert("Resultado de la resta de: "+valor1+  " y " +valor2+ " es: " + resultado);
}

function multiplicacion(){
    var valor1 =10;
    var valor2 =10;
    var resultado = valor1 * valor2
    alert("Resultado de la multiplicacion de: "+valor1+  " y " +valor2+ " es: " + resultado);
}

function division(){
    var valor1 =24;
    var valor2 =24;
    var resultado = valor1 / valor2
    alert("Resultado de la division de: "+valor1+  " y " +valor2+ " es: " + resultado);
}
function ejercicio2(){
    let a = 10;
    let b = 5;
    let resultado = a + b;
    alert("El valor de a es: "+a+" y el valor de b es: "+b+". Resultado: "+resultado);

}
function ejercicio3(){
    let num1=0;
    let num2=0;

    num1 = num1 +1;
    num2 = num2 +5;

    alert(`El primer numero ahora es ${num1}`);
    alert(`El segundo numero ahora es ${num2}`);

}

function ejercicio4(){
    const a = "Hola";
    const b = "Mundo";

    document.write("Constante a contiene: "+ a );
    document.write("<br>");
    document.write("Variable b contiene: "+ b );
    document.write("<br>");
    document.write("Concatenación: " + (a + " " + b) );

}
function ejercicio5(){
    let a, b;
    a = 2; b= 8;
    resultado = a * b;

    document.write("Variable a contiene: " + a + "<br>");
    document.write("Variable b contiene: " + b + "<br>");
    document.write("El resultado de la multiplicacion es: " + resultado);

}

function ejercicio6(){
    let dato, resultado;

    dato= window.prompt("Introduce tu nombre", "0");
    resultado = `Que tranza ${dato}`;
    alert(resultado);
}

function ejercicio7(){
    let dato, num;

    dato = window.prompt("Introduce número ?", "0");
    num = parseInt(dato);

    num = num *2;
    alert(`El doble del número introducido es: ${num}`);
}

function ejercicio8(){
    let dato1, dato2, num1, num2;

    dato1 = window.prompt("Introduce el primer numero ?", "0");
    num1 = parseInt(dato1);

    dato2 = window.prompt("Introduce el segundo numero ?", "0");
    num2 = parseInt(dato2);

    let resultado = num1 + num2;

    alert(`La suma es: ${resultado}`);
    
}


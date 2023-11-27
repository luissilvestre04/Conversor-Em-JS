// cod de cotaçao de dolar e real
// var valorEmDolar =39;
    
//var cotaçaoDoDolar = 5.32;

    
//var valorEmReal = valorEmDolar*cotaçaoDoDolar;
 
//valorEmReal = valorEmReal.toFixed(2);
//alert ('R$ '+ valorEmReal);//


// codigo de distancia da Terra para lua e Sol em KM e anos-luz
 
//vel da luz
const velocidadeDaLuz = 299792; // km/s

// distamcia em km e anos luz de sol e lua,
 const distanciaParaLua = 384400; // km
 const distanciaParaSol = 1.50 * Math.pow(10, 11); // km
 
 // calculo
 const distanciaEmAnosLuz = (distanciaParaLua / Math.pow(velocidadeDaLuz , 2)).toFixed(10) ;
 const distanciaEmQuilometros = (distanciaParaSol / 1000).toLocaleString()  ;

  
alert(`A distãncia da Terra até a Lua é de ${distanciaEmAnosLuz} anos-luz.`)
alert(`A distância da Terra até o Sol é de ${distanciaEmQuilometros} Km.`) 
var n=1;
var Pn=0;
var f=0;
var an=0;
var bn=0;
var Er=0;
var fp=0;
var tol=0;
var criterio;
var ax=0;
var f2;
var tab=document.getElementById("contenido");
function evfn(cadena,valor){

    var f3 = cadena.replace("x^3","*"+Math.pow(valor,3));
    f3=f3.replace("x^2","*"+Math.pow(valor,2));
    f3=f3.replace("cos(x)","*"+Math.cos(valor));
    f3=f3.replace("sen(x)","*"+Math.sin(valor));
    f3=f3.replace("tan(x)","*"+Math.tan(valor));
    f3=f3.replace("x",'*'+valor);

    return f3;
}
function calcular(){
    an=document.getElementById("an").value;
    bn=document.getElementById("bn").value;
    f=document.getElementById("fn").value;
    tol=parseFloat(Math.pow(10,-document.getElementById("tol").value));
    var acum=" ";
    ax=(parseFloat(an)+parseFloat(bn))/2;
    n=1;
    if(evfn(f,an)*evfn(f,bn)>0){
        alert("NO HAY RAICEZ PARA esa funcion en ese intervalo!");
    }else{
    do{
    ax=(parseFloat(an)+parseFloat(bn))/2;   
    
   
    fp=eval(evfn(f,ax));
    
    if(n==1){
        Er=0;
    }else{
        Er=Math.abs((parseFloat(ax)-parseFloat(Pn))/parseFloat(ax));
    }
    Pn=ax;
    
    tab=document.getElementById("contenido");
    
    acum+= "<tr> <th scope='row'>"+n+"</th>"+
    "<td>"+an+"</td><td>"+bn+"</td>"+
    "<td>"+ax+"</td><td>"+fp+"</td>"+
    "<td>"+Er+"</td></tr>";
    
    
    if(fp>0){
        bn=ax;
    }else{
        an=ax;
    }
     
    if(n==1){
        Er=999;
    }    
    n++;
    }while(Er>tol);
    document.getElementById("respuesta").innerHTML="<center><h2>LA RAIZ ES: "+ax+"</h2>";
    tab.innerHTML=acum;
    }
}

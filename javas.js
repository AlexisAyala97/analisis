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
function calcular(){
    an=document.getElementById("an").value;
    bn=document.getElementById("bn").value;
    f=document.getElementById("fn").value;
    tol=parseFloat(Math.pow(10,-document.getElementById("tol").value));
    var acum=" ";
    do{
    ax=(parseFloat(an)+parseFloat(bn))/2;
    f2=f.replace("x",'*'+ax);
    fp=eval(f2);
    if(n==1){
        Er=0;
    }else{
        Er=(parseFloat(ax)-parseFloat(Pn))/parseFloat(ax);
    }
    Pn=ax;
    
    tab=document.getElementById("contenido");
    alert(f2);
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
    }while(Er<tol);
    
    tab.innerHTML=acum;
}

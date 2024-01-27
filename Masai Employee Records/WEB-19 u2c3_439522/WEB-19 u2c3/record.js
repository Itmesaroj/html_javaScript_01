
document.querySelector("form").addEventListener("submit",addData);
function addData(i){
    i.preventDefault();
    let Epname=document.querySelector("#name").value;
    let Epid=document.querySelector("#employeeID").value;
    let Epdpment=document.querySelector("#department").value;
    let Epexp=document.querySelector("#exp").value;
    let Epmail=document.querySelector("#email").value;
    let Epmbl=document.querySelector("#mbl").value;

    //     //creatr Tablerow and append it in the table
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    td1.innerText = Epname;
    let td2=document.createElement("td");
    td2.innerText=Epid;   
    let td3=document.createElement("td");
    td3.innerText=Epdpment;
    let td4=document.createElement("td");
    td4.innerText=Epexp;
    let td5=document.createElement("td");
    td5.innerText=Epmail
    let td6=document.createElement("td");
    td6.innerText=Epmbl;
    let td7=document.createElement("td");
    if(Epexp>5){
    td7.innerText="Senior";
    }
    else if(Epexp> 2 && Epexp <5){
    td7.innerText="Junior";
    }
    else if(Epexp>1 || Epexp==1){
    td7.innerText="Fresher";
    }
    let td8=document.createElement("td");
    td8.innerText="Delete";
    td8.style.cursor="pointer";
    td8.addEventListener("click",removeData);
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);
}
function removeData(i){
    
   i.target.parentNode.remove();
 }


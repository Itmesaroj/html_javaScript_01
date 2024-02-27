let form=document.querySelector("form").addEventListener("submit",putdata);
function putdata(i){
    i.preventDefault();
    let name=document.querySelector("#name").value;
    let age=document.querySelector("#age").value;
    let obj={
        name,
        age,
    }
    let array=getDataLocal();
    array.push(obj);
    getData(array)
}
function getDataLocal(){
    return JSON.parse(localStorage.getItem("User"))||[];
}
function getData(array){
    localStorage.setItem("User",JSON.stringify(array));
}
function display(){
    let array=getDataLocal();
    let container=document.querySelector(".container").innerHTML=" ";
    let h1=document.createElement('h2');
    h1.innerText="User Data";
    document.querySelector(".container").append(h1);
    array.forEach(element => {
            let div=document.createElement('div');
            let p1=document.createElement('p');
            let p2=document.createElement('p');
            p1.innerText=`Name:${element.name}`;
            p2.innerText=`Age: ${element.age}`;
            div.append(p1,p2);
            document.querySelector(".container").append(div);   
    });
}
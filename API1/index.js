function displayData(){
    let url="https://reqres.in/api/users";
    let respones=fetch(url);
    respones.then((res)=> res.json())
    .then((data)=>{
       data.data.forEach((ele=>{
        let div=document.createElement('div');
        let img=document.createElement("img");
        img.src=ele.avatar;
        let name=document.createElement('h3');
        name.innerText=`${ele.first_name} ${ele.last_name}`;
        let email=document.createElement('p');
        email.innerText=ele.email;
        div.append(img,name,email);
        document.querySelector('.container').append(div);
       }));
    })
}
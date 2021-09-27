let input=document.querySelector("input");
let un_box=document.querySelector(".box1");
let com_box=document.querySelector(".box2");
let ip=document.querySelector("#get");
ip.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        Add()
    }
})
let com_box1=[];
let array=[];
let new_box=[];
let anarray=[];
function Add(){
 array=[];
let i=input.value;
if(i){
array.push(i);
anarray.push(i)
}
input.value=""
array.map((c)=>{
let d=document.createElement("h1");
let e=document.createTextNode(c);
d.className ="style"
d.appendChild(e);
un_box.appendChild(d);
})
let non=document.getElementsByClassName("style");
for(let q=0;q<non.length;q++){
    //console.log(non[q])
non[q].onclick=()=>{
    non[q].style.display="none";
    let new_array= anarray.slice(q,q+1)
new_box=[];
new_box.push(new_array);
 Show();
}
}
}
//secon function
const Show=()=>{
    new_box.map((result)=>{
        let d1=document.createElement("h1");
        e1=document.createTextNode(result);
        d1.className ="style1"
d1.appendChild(e1);
com_box.appendChild(d1);
    });
    let non=document.getElementsByClassName("style1");
for(let q1=0;q1<non.length;q1++){
    //console.log(non[q])
non[q1].onclick=()=>{
    non[q1].style.display="none";
}
}
}
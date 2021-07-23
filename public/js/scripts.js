function DEL()
{
    localStorage.removeItem(this.id);
    if(localStorage.getItem("lname")==this.id) localStorage.removeItem("lname");
    localStorage.setItem("counts","0");
    var arr=document.querySelectorAll("#box");
    var newA=document.querySelectorAll(".del");
    var newR=document.querySelectorAll(".rename");
    for(var i=0;i<arr.length;i++)
    {
        arr[i].style.display="none";
    }
    for(var i=0;i<newA.length;i++)
    {
        newA[i].style.display="none";
    }
    for(var i=0;i<newR.length;i++){
        newR[i].style.display="none";
    }
    onStart();
}

function BACK()
{
    var name=String(this.innerHTML).toLowerCase().trim();
    localStorage.setItem("lname",name.toLowerCase().trim());
    localStorage.setItem("counts",localStorage.getItem(name));
    console.log(localStorage.getItem("counts"));
    location.href="http://127.0.0.1:8080/";
}

function RENAME(){
    var newName=window.prompt("Enter the new name: ");
    var name=String(this.id);
    var value=localStorage.getItem(name.toLowerCase().trim());
    if(name.toLowerCase().trim()===newName.toLowerCase().trim()){
        alert("This name is same as the previous one!!!!");
        return ;
    }
    if(localStorage.getItem(newName.toLowerCase().trim())==undefined)
    {   localStorage.removeItem(name.toLowerCase().trim());
        localStorage.setItem(newName.toLowerCase().trim(),value);
        if(localStorage.getItem("lname")===this.id){
            localStorage.setItem("lname",newName.toLowerCase().trim());
            localStorage.setItem("counts",value);
        }
        var arr=document.querySelectorAll("#box");
        var newA=document.querySelectorAll(".del");
        var newR=document.querySelectorAll(".rename");
        for(var i=0;i<arr.length;i++)
        {
            arr[i].style.display="none";
        }
        for(var i=0;i<newA.length;i++)
        {
            newA[i].style.display="none";
        }
        for(var i=0;i<newR.length;i++){
            newR[i].style.display="none";
        }
        onStart();
    }
    else{
        alert("This Name already exists");
        return ;
    }
}

function onStart()
{
    var array=Object.keys(localStorage);
    array.sort();
    var main=document.getElementById("main-data");
    var t=0;
    for(var i=0;i<array.length;i++)
    {
        if(array[i]=="counts" || array[i]=="lname")  {t+=1;continue;}
        var div=document.createElement("div");
        var btn=document.createElement("button");
        var ren=document.createElement("button");
        btn.setAttribute("class","del");
        ren.setAttribute("class","rename");
        div.setAttribute("id","box");
        div.setAttribute("class",array[i]);
        btn.setAttribute("id",array[i]);
        ren.setAttribute("id",array[i]);
        div.style.top=String(10*((i)-t)+2+i)+"%";
        btn.style.top=String(10*((i)-t)+2+i)+"%";
        ren.style.top=String(10*((i)-t)+2+i)+"%";
        div.style.left="0%";
        div.style.width="50%";
        div.onclick=BACK;
        var div1=document.createElement("div");
        btn.onclick=DEL;
        ren.onclick=RENAME;
        div1.style.width="40%";
        div1.setAttribute("id","box");
        div1.style.top=String(10*(i-t)+2+i)+"%";
        div1.style.cursor="auto";
        div1.style.right="12%";
        div.innerHTML=array[i].toUpperCase();
        div1.innerHTML=localStorage.getItem(array[i]);
        main.appendChild(div);
        main.appendChild(div1);
        main.appendChild(btn);
        main.appendChild(ren);
    }

}


function Clear()
{
    localStorage.clear();
    var arr=document.querySelectorAll("#box");
    var newA=document.querySelectorAll(".del");
    var newR=document.querySelectorAll(".rename");
    for(var i=0;i<arr.length;i++)
    {
        arr[i].style.display="none";
    }
    for(var i=0;i<newA.length;i++)
    {
        newA[i].style.display="none";
    }
    for(var i=0;i<newR.length;i++){
        newR[i].style.display="none";
    }
}



var m=1;
async function onload()
{
    console.log(localStorage.getItem("counts"));
    if(localStorage.getItem("counts")===null)
    {
       localStorage.setItem("counts",0)
    }
    document.getElementById("number").innerHTML=localStorage.getItem("counts");
    console.log(document.getElementById("number").innerHTML);
    if(localStorage.getItem("lname")!=undefined)
    {
        document.getElementById("name").innerHTML=localStorage.getItem("lname").toUpperCase();
        document.getElementById("number").innerHTML=localStorage.getItem(localStorage.getItem("lname"));
    }
    var min=1;
    var td=document.getElementById("countData");
    if(localStorage.getItem("lname")!=undefined){
        min=2;
    }
    td.innerHTML=Object.keys(localStorage).length-min;
    var sum=0;
    array=Object.keys(localStorage);
    for(var i=0;i<array.length;i++){
        if(array[i]=="counts" || array[i]=="lname"){
            continue;
        }
        sum+=parseInt(localStorage.getItem(array[i].toLowerCase().trim()));
    }
    document.getElementById("sumTotal").innerHTML=String(sum);
}

function increment()
{
    var num=document.getElementById("number");
    temp=parseInt(localStorage.getItem("counts"));
    if(temp==999)
    {
        temp=0;
    }
    else
    {
       temp+=m;
    }
    localStorage.setItem("counts",temp);
    num.innerHTML=String(temp);
    if(document.getElementById("name").innerHTML!="UNKNOWN")
  {
      localStorage.removeItem(document.getElementById("name").innerHTML.toLowerCase().trim());
      localStorage.setItem(document.getElementById("name").innerHTML.toLowerCase().trim(),document.getElementById("number").innerHTML);
  }
    onload();
}


function reset()
{
    localStorage.setItem("counts",0);
    document.getElementById("number").innerHTML="0";
    localStorage.removeItem("lname");
    document.getElementById("name").innerHTML="UNKNOWN";
    onload();
}

function decrement()
{
    var num=document.getElementById("number");
    temp=parseInt(localStorage.getItem("counts"));
    if (temp==0)
    {
        alert("Lower Limit Reached!!!");
        return ;
    }
    temp-=m;
    localStorage.setItem("counts",temp);
    num.innerHTML=String(temp);
    if(document.getElementById("name").innerHTML!="UNKNOWN")
  {
      localStorage.removeItem(document.getElementById("name").innerHTML.toLowerCase().trim());
      localStorage.setItem(document.getElementById("name").innerHTML.toLowerCase().trim(),document.getElementById("number").innerHTML);
  }
  onload();
}

function set()
{
    var num=document.getElementById("jump").value;
    document.getElementById("number").innerHTML=String(num);
    localStorage.setItem("counts",num);
    document.getElementById("jump").value="";
    if(document.getElementById("name").innerHTML!="UNKNOWN")
  {
      localStorage.removeItem(document.getElementById("name").innerHTML.toLowerCase().trim());
      localStorage.setItem(document.getElementById("name").innerHTML.toLowerCase().trim(),document.getElementById("number").innerHTML);
  }
  onload();
}

function pace()
{
    m=parseInt(document.getElementById("pace").value);
    document.getElementById("pace").value="";
}

function save()
{
  if(localStorage.getItem(document.getElementById("tit").value.toLowerCase().trim())!=undefined) 
    {
      alert("This title already exists!!!!");document.getElementById("tit").value="";return;
    }
  if(document.getElementById("name").innerHTML!="UNKNOWN")
  {
      localStorage.removeItem(document.getElementById("name").innerHTML.toLowerCase().trim());
      localStorage.setItem(document.getElementById("name").innerHTML.toLowerCase().trim(),document.getElementById("number").innerHTML);
      document.getElementById("number").innerHTML=0;
      localStorage.setItem("counts",0);
  }
  localStorage.setItem("lname",document.getElementById("tit").value.toLowerCase().trim());
  var name=document.getElementById("tit").value;
  document.getElementById("name").innerHTML=name;
  name=String(name).toLowerCase();
  name=name.trim();

  if(name=="")
  {
      alert("The box is empty!!!!");
      return ;
  }
  localStorage.setItem(name,document.getElementById("number").innerHTML);
  sessionStorage.setItem("clicked",true);
  name.innerHTML="";
  document.getElementById("tit").value="";
  onload();
}

function search()
{
    var name=document.getElementById("tit1").value;
    name=String(name).trim().toLowerCase();
    if(localStorage.getItem(name)==undefined)
    {
        alert("No Result Found!!!!");
        document.getElementById("tit1").value="";
        return;
    }
    document.getElementById("name").innerHTML=name.toUpperCase();
    if(name=="")
    {
        alert("The box is empty!!!!");
        return ;
    }
    if(name==null)
    {
        alert("No such title found!!!!");
        return ;
    }
    localStorage.setItem("lname",name);
    sessionStorage.setItem("clicked",true);
    document.getElementById("number").innerHTML=String(localStorage.getItem(name));
    localStorage.setItem("counts",document.getElementById("number").innerHTML);
    document.getElementById("tit1").value="";
}

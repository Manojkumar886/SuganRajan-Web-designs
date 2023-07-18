let favoriatefilms=["Ghilli","Kuruvi","Chandramukhi","Guru","Vettaiyadu vilaiyadu"]

let inserting=()=>
{
    let temp=document.getElementById('user')
    favoriatefilms.push(temp.value);
    alert("Your favoriate film name is added in your list = "+ temp.value)
}

let printing=()=>
{
    let hi="";
    favoriatefilms.map((data)=>
    {
        hi+="<tr><td>"+data+"</td></tr>"
    })
    const performance=document.getElementById('live');
    performance.innerHTML="<table align='center' style='padding: 10px 10px 5px 10px; box-shadow:5px 6px 4px pink;'><thead><tr><th> Film Names</th></tr></thead><tbody>"+hi+"</tbody></table>"
}

let updating=()=>
{
    let index=document.getElementById('user').value
    let newvalue=prompt("Tell us which value you want update or replace"+favoriatefilms[index])

    favoriatefilms[index]=newvalue;
    printing()
}

let deleting=()=>
{
    let temp=document.getElementById('user').value

    favoriatefilms=favoriatefilms.filter((data,pos)=>
    {
        return data!==temp;
    })
    printing()
}

let searching=()=>
{
    let temp=document.getElementById('user').value

    for(i=0;i<favoriatefilms.length;i++)
    {
        if(favoriatefilms[i]===temp)
        {
            return i;
        }
    }

}
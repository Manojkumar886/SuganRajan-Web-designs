let Action=()=>
{
    let a=document.forms['irctc'].fno.value;
    let b=document.forms['irctc'].pass.value;
    let c=document.forms['irctc'].email1.value;


    active=true;

    if(a.length<=0)
    {
        document.getElementById('fdetails').innerHTML="Flat no should not be empty"
        active=false;
    }
    else if(!((/^[#.0-9A-Za-z\s,-/]+$/).test(a)))
    {
        document.getElementById4('fdetails').innerHTML="Follow the step in Flatno/Address/DoorNo";
        active=false;

    }

    if(b.length<=0)
    {
        document.getElementById('passing').innerHTML="Password should not be empty"
        active=false;

    }
    else if(!((/^[a-zA-Z0-9!@#$%^&*]{8,16}$/).test(b)))
    {
        document.getElementById('Passing').innerHTML="Password using special charcter and numbers and alphabetical and min 8 to macx6 limit only"
        active=false;
    }

    if(c.length<=0)
    {
        document.getElementById('edetails').innerHTML="Email id should not be emty"
        active=false
    }
    else if(!((/^(?=.*[0-9])(?=.+[@.])[a-zA-Z0-9@.]+/).test(c)))
    {
        document.getElementById('edetails').innerHTML="Email id should be used @ .symbol";
        active=false
    }
    return active;

}
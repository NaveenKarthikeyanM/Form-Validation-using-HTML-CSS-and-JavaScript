function result(){
    var fname=document.myform.fname.value;
    var lname=document.myform.lname.value;
    var city=document.myform.city.value;
    var phn=document.myform.phn.value;
    var text=document.myform.text.value;
    if(fname==null || fname==""){
        alert("Enter First Name");
        return false;
    }
    else if(lname==null || lname==""){
        alert("Enter Last Name");
        return false;
    }
    else if(city==null || city==""){
        alert("Enter your City");
        return false;
    }
    else if(phn.length<10 || phn.length>10 ){
        alert("Enter proper Phone Number");
        return false;
    }
    else if(text==null || text==""){
        alert("Enter your address");
        return false;
    }
}
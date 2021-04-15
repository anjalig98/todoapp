function ajax(){
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200){
        var response= JSON.parse(this.responseText);
        console.log(response);
        var note="";
        // var status="";
        
//data loading
       for(var i=0;i<response.length;i++){
           
           if(response[i].completed==false){
               note+= '<input type="checkbox" id="chkbx" onclick="ifchecked()"> '+response[i] .title+'<br><br>'
            //    document.getElementById("label").setAttribute("visible",true)
               document.getElementById("label").innerHTML=note;
               
            //    console.log(response[i].title);
            //    console.log(response[i].completed);

          
        }
           
           else{
            note+= '<input type="checkbox" id="chkbx" disabled checked/>  '+'<del>'+response[i].title +'</del>'+ '<br><br>'
            // document.getElementById("label").setAttribute("visible",true)
            document.getElementById("label").innerHTML=note;
            
            // console.log(response[i].title)
            //  console.log(response[i].completed);
            
           }
       }

    
    }
};
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}

//checkbox checking
function ifchecked(){
var promise= new Promise(function(resolve,reject){
    var count= 0;
    count=document.querySelectorAll("input:checked");
    console.log(count)
    console.log(count.length)
   if(count.length==96){
       resolve(alert("Congrats. 5 Tasks have been Successfully Completed"));
       
   } 
});
promise.then(disablebox)

 }  
 
 function disablebox(){
     console.log("inside disbalebx")
    var count= 0;
    count=document.querySelectorAll("input:checked");
    console.log(count.length)
    if(count.length>95){
        alert("You have reached your limit");
        window.location.href='../html/final.html';
    }

    function display(){
        
    }
     
    
 }

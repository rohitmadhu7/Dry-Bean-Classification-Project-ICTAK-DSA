function MyReset(){
  // let y=document.getElementById("email_error");
  document.getElementById("myform").reset();

}

function validateForm(){
    // let x=document.forms["myform"]["email"].value;
    let Area=document.getElementById("Area");
    let AspectRation=document.getElementById("AspectRation");
    let Extend=document.getElementById("Extend");
    let Solidity=document.getElementById("Solidity");
    let Roundness=document.getElementById("Roundness");
    let ShapeFactor2=document.getElementById("ShapeFactor2");
    let ShapeFactor4=document.getElementById("ShapeFactor4");
    let y=document.getElementById("email_error");
    if(Area.value=="" || AspectRation.value=="" || Extend.value=="" || Solidity.value=="" || Roundness.value=="" || ShapeFactor2.value=="" || ShapeFactor4.value==""){
      
      // alert("fields can't be blank");
      y.innerText="Fields can't be blank"
      y.style.color="red";
      y.style.fontSize="18px";
      return false;
    }
    else{
      return true;
    }
   

      
 }
    


// function Validation(){
//   let flag=0;
//   if(Area.value<0 || Area.value> 1 ){
//     let a=document.getElementById("email_error1");
//     a.innerText="Enter area value between 0-1" 
//     a.style.color="red"  ;
//     let flag=1;
//    }
//   if (AspectRation.value<1.024867596066768 || AspectRation.value>2.430306){
//     let b=document.getElementById("email_error2");
//     b.innerText="Enter area value between 1.02486 - 2.430306"
//     b.style.color="red"  ;
//     let flag=1;
//   }
//   if (Extent.value<0.555315 || Extent.value>0.866195){
//     let c=document.getElementById("email_error3");
//     c.innerText="Enter area value between 0.555315 - 0.866195"
//     c.style.color="red"  ;
//     let flag=1;
//   }
//   if (Solidity.value< 0.968899 || Solidity.value> 0.994677){
//     let d=document.getElementById("email_error4");
//     d.innerText="Enter area value between 0.968899 - 0.994677 "
//     d.style.color="red"  ;
//     let flag=1;
//   }
//   if (Roundness.value< 0.663407 || Roundness.value> 0.990685){
//     let e=document.getElementById("email_error5");
//     e.innerText="Enter area value between 0.663407 - 0.990685"
//     e.style.color="red"  ;
//     let flag=1;
//   }
//   if (ShapeFactor2.value< 0.000564 || ShapeFactor2.value> 0.003506){
//     let f=document.getElementById("email_error6");
//     f.innerText="Enter area value between 0.000564 - 0.003506"
//     f.style.color="red"  ;
//     let flag=1;
//   }
//   if (ShapeFactor4.value< 0.974628 || ShapeFactor4.value> 0.999733){
//     let g=document.getElementById("email_error7");
//     g.innerText="Enter area value between 0.974628 - 0.999733"
//     g.style.color="red"  ;
//     let flag=1;
//   }
//   if(flag==1){
//     return false;
//   }
//   else {
//     return true;
//   }


// function email_error(){
//   let x=document.getElementById("exampleInputEmail1");
 
//   let y=document.getElementById("email_error");
 
//   if(x.value==""){
//     y.innerText="Please enter a valid email address or phone number."
//     y.style.fontSize="14px";
//     y.style.color="Orange";
//     x.style.borderBottom="thick solid Orange";
    
//   }
// }
// function pwd_error(){
//   let a=document.getElementById("exampleInputPassword1");
//   let b=document.getElementById("pwd_error");
//   if(a.value==""){
//     b.innerText="Your password must contain between 4 and 60 characters."
//     b.style.fontSize="14px";
//     b.style.color="Orange";
//     a.style.borderBottom="thick solid Orange";
//   }
// }
// function email_val()

// {   
//   let email_id=document.getElementById("exampleInputEmail1");
  
//   let y=document.getElementById("email_error");
//     let regx=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).(.[a-z]{2,3})?$/
//     if(regx.test(email_id.value)){
//         y.innerHTML="valid";
//         y.style.color="green";
//         return true;
//     }
//     else{
//         y.innerHTML="invalid"; 
//         y.style.color="red";
//         return false;
//     }
// }
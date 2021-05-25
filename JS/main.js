setInterval(function(){
  if(document.getElementsByClassName("slider")[0].classList.contains("activate")){
    document.getElementsByClassName("slider")[1].classList.add("activate");
    document.getElementsByClassName("slider")[0].classList.remove("activate");
  }else if(document.getElementsByClassName("slider")[1].classList.contains("activate")){
    document.getElementsByClassName("slider")[2].classList.add("activate");
    document.getElementsByClassName("slider")[1].classList.remove("activate");
  }else if(document.getElementsByClassName("slider")[2].classList.contains("activate")){
    document.getElementsByClassName("slider")[0].classList.add("activate");
    document.getElementsByClassName("slider")[2].classList.remove("activate");
  }
},4000);



document.querySelector("#bar_icon").addEventListener("click",function(){
  document.querySelector(".responsive_menu_list_block").setAttribute("style","transform:translate(0px);opacity:1;height:400px;width: 100%;");

  document.querySelector("#bar_icon").setAttribute("style","display:none");

  document.querySelector("#cross").setAttribute("style","display:block");
});

document.querySelector("#cross").addEventListener("click",function(){
document.querySelector(".responsive_menu_list_block").setAttribute("style","transform:translate(-500px);opacity:0;height:0px");

document.querySelector("#bar_icon").setAttribute("style","display:block");

document.querySelector("#cross").setAttribute("style","display:none");
});


document.querySelector("#subListItem").addEventListener("click",function(){
  document.querySelector(".subMenuUl").setAttribute("style","transform:translate(0px);opacity:1;height:274px;padding: 30px 0px;");
});

document.querySelector("#subListItem").addEventListener("dblclick",function(){
  document.querySelector(".subMenuUl").setAttribute("style","transform:translate(-500px);opacity:0;");
});




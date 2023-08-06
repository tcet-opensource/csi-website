document.getElementById("toggle").addEventListener("click",()=>{
  if(document.getElementById("text").style.display == "none")
  {
  document.getElementById("text").style.display = "flex";
  document.getElementById("toggle").innerText = "...read less";
}
  else{
    document.getElementById("text").style.display = "none";
    document.getElementById("toggle").innerText = "...read more";
  }
})

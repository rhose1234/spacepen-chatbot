const hidden = document.getElementById("hidden")
const bot = document.getElementById("bot")
const closebot =document.getElementById("close-bot")

bot.onclick = ()=>{
    hidden.style.visibility="visible";
    hidden.style.transition="0.4s ease";
    if ( hidden.style.visibility="visible") {
        closebot.style.display="block";
        bot.style.display="none";
    }
   
}
closebot.onclick = ()=>{
    hidden.style.visibility="hidden";
    if ( hidden.style.visibility="hidden") {
        closebot.style.display="none";
        bot.style.display="block";
    }
   
}









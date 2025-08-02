function setopacity(){
    var music = new Audio('https://new.ezh.ink/mp3/liyue.mp3');
    music.play();
    setTimeout(()=>{
        document.getElementById("zf1").style.opacity="100%";
    },7300)
    
    document.getElementById("xf").style.opacity="0%";
    setTimeout(() => {
        togglePause()
        document.getElementById("xf").style.display="none";
        document.getElementById("bot").style.display="none";
        document.getElementById("zf1").style.top="0%";
        document.getElementById("img2023").style.opacity="100%";
        document.getElementById("img2023").style.width="15rem";
        document.getElementById("img2023").style.left="0%";
        document.getElementById("img2023").style.top="0%";
        }, 800);
    setTimeout(() => {
        document.getElementById("zf2").style.opacity="100%";
        }, 1200);
    setTimeout(() => {
        document.getElementById("zf2").style.top="0%";
        }, 2000);
    setTimeout(() => {
        document.getElementById("img2023").style.left="100rem";
        document.getElementById("zf3").style.opacity="100%";
        document.getElementById("img2024").style.opacity="100%";
        }, 2400);
    setTimeout(() => {
        document.getElementById("zf3").style.top="0%";
        document.getElementById("img2023").style.opacity="0%";
        }, 3200);
    setTimeout(() => {
        document.getElementById("zf4").style.opacity="100%";
        }, 3600);
    setTimeout(() => {
        document.getElementById("img2024").style.left="0%";
        }, 3900);
    setTimeout(() => {
        document.getElementById("zf4").style.top="0%";
        document.getElementById("sp1id").style.opacity="100%";
        document.getElementById("sp1id").style.color="#ffffff";
        }, 4400);
    setTimeout(() => {
        document.getElementById("img2024").style.opacity="0%";
        document.getElementById("img2024").style.width="0";
        document.getElementById("img2024").style.left="50%";
        document.getElementById("img2024").style.top="50%";
        }, 6400);
    setTimeout(() => {
        document.getElementById("countdown").style.opacity="100%";
        }, 9500);
    setTimeout(() => {
            document.getElementById("countdown").style.top="20%";
            document.getElementById("zf1").style.color="#ffffff";
            document.getElementById("zf2").style.color="#ffffff";
            document.getElementById("zf3").style.color="#ffffff";
            document.getElementById("zf4").style.color="#ffd04d";
            
        }, 1500);
    setTimeout(() => {
        document.getElementById("imgid1").style.opacity="100%";
        }, 11000);
    setTimeout(() => {
        document.getElementById("yhid").style.display="block";
        togglePause()
        }, 16000);
    setTimeout(() => {
        document.getElementById("yhid").style.opacity="100%";
        }, 16500);
    setTimeout(() => {
        document.getElementById("yhid").style.opacity="100%";
    toggleSound();
        }, 17000);
}
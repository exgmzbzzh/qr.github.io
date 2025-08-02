// var music = new Audio('./mp3/wm.m4a');
var music = new Audio('./mp3/hhxk-w.mp3');
function setopacity() {
    mus();
    setInterval(mus, 10);
    movexf();
    movezf01();
    // moveyearimg();
    movecyh();
    togglePause();
    // movesrcimg();
    // movezf02();
    movetimeup();
}

function mus() {
    music.play();
}
function moveyearimg() {
    setTimeout(() => {

        document.getElementById("img2023").style.opacity = "100%";
        document.getElementById("img2023").style.width = "15rem";
        document.getElementById("img2023").style.left = "0%";
        document.getElementById("img2023").style.top = "0%";
    }, 1000);
    setTimeout(() => {
        document.getElementById("img2023").style.left = "100rem";
        document.getElementById("img2024").style.opacity = "100%";
    }, 2600);

    setTimeout(() => {
        document.getElementById("img2023").style.opacity = "0%";
    }, 3400);
    setTimeout(() => {
        document.getElementById("img2024").style.left = "0%";
    }, 3800);
    setTimeout(() => {
        document.getElementById("img2024").style.opacity = "0%";
        document.getElementById("img2024").style.width = "0";
        document.getElementById("img2024").style.left = "50%";
        document.getElementById("img2024").style.top = "50%";
    }, 6000);
}

function movexf() {
    document.getElementById("xf").style.opacity = "0%";
    setTimeout(() => {
        document.getElementById("xf").style.display = "none";
        document.getElementById("bot").style.display = "none";
    }, 800);

}
function movezf01() {
    setTimeout(() => {
        document.getElementById("zf01").style.display = "block";
        setTimeout(() => {
            document.getElementById("zf0").style.opacity = "100%";
        }, 3000);
    }, 0);
    setTimeout(() => {
        document.getElementById("zf0").style.top = "45%";
        setTimeout(() => {
            document.getElementById("zf0").style.color = "#ffd04d";
        }, 1500);
    }, 5000);
}



//         setTimeout(() => {
//             document.getElementById("zf1").style.opacity = "100%";
//             setTimeout(() => {
//                 togglePause();
//                 document.getElementById("zf1").style.top = "0%";
//             }, 1500);
//         }, 8800);



//         setTimeout(() => {
//             document.getElementById("zf2").style.opacity = "100%";
//             setTimeout(() => {
//                 document.getElementById("zf2").style.top = "0%";
//             }, 1500);
//         }, 11700);

//         setTimeout(() => {
//             document.getElementById("zf3").style.opacity = "100%";
//             setTimeout(() => {
//                 document.getElementById("zf3").style.top = "0%";
//             }, 1500);
//         }, 14400);

//         setTimeout(() => {
//             document.getElementById("zf4").style.opacity = "100%";
//             setTimeout(() => {
//                 document.getElementById("zf4").style.top = "0%";
//             }, 1500);
//         }, 17100);

//         setTimeout(() => {

//             setTimeout(() => {
//                 document.getElementById("zf1").style.color = "#ffffff";
//             }, 500);
//             setTimeout(() => {
//                 document.getElementById("zf2").style.color = "#ffffff";
//             }, 2000);
//             setTimeout(() => {
//                 document.getElementById("zf3").style.color = "#ffffff";
//             }, 3500);

//             setTimeout(() => {
//                 document.getElementById("zf4").style.color = "#ffd04d";
//             }, 5000);

//         }, 18500);
//     }, 1900);
//     setTimeout(() => {
//         document.getElementById("zf01").style.opacity = "0%";
//         setTimeout(() => {
//             document.getElementById("zf01").style.display = "none";
//         }, 1100);

//     }, 28000);
// }
// function movezf02() {
//     setTimeout(() => {
//         document.getElementById("zf02").style.display = "block";
//         setTimeout(() => {
//             document.getElementById("zf02").style.opacity = "100%";
//         }, 1000);
//         setTimeout(() => {
//             setTimeout(() => {
//                 document.getElementById("zf20").style.top = "0%";
//                 setTimeout(() => {
//                     document.getElementById("zf20").style.color = "#ffd04d";
//                 }, 1500);

//             }, 6900);

//             setTimeout(() => {
//                 document.getElementById("zf21").style.opacity = "100%";
//                 setTimeout(() => {
//                     document.getElementById("zf21").style.top = "0%";
//                 }, 1500);
//             }, 8800);

//             setTimeout(() => {
//                 document.getElementById("zf22").style.opacity = "100%";
//                 setTimeout(() => {
//                     document.getElementById("zf22").style.top = "0%";
//                 }, 1500);
//             }, 11700);

//             setTimeout(() => {
//                 document.getElementById("zf23").style.opacity = "100%";
//                 setTimeout(() => {
//                     document.getElementById("zf23").style.top = "0%";
//                 }, 1500);
//             }, 14400);

//             setTimeout(() => {
//                 document.getElementById("zf24").style.opacity = "100%";
//                 setTimeout(() => {
//                     document.getElementById("zf24").style.top = "0%";
//                 }, 1500);
//             }, 17100);

//             setTimeout(() => {

//                 setTimeout(() => {
//                     document.getElementById("zf21").style.color = "#ffffff";
//                 }, 500);
//                 setTimeout(() => {
//                     document.getElementById("zf22").style.color = "#ffffff";
//                 }, 2000);
//                 setTimeout(() => {
//                     document.getElementById("zf23").style.color = "#ffffff";
//                 }, 3500);

//                 setTimeout(() => {
//                     document.getElementById("zf24").style.color = "#ffd04d";
//                 }, 5000);
//             }, 18500);
//         }, 1000);
//     }, 151000);
// }


// function movect() {
//     setTimeout(() => {
//         setTimeout(() => {
//             document.getElementById("countdown").style.opacity = "100%";
//         }, 500);
//         setTimeout(() => {
//             document.getElementById("countdown").style.top = "10%";
//         }, 1500);
//     }, 0);
// }

function movecyh() {
    setTimeout(() => {
        setTimeout(() => {
            document.getElementById("yhid").style.display = "block";
            togglePause()
            toggleSound()
        }, 200);
        setTimeout(() => {
            document.getElementById("yhid").style.opacity = "80%";
        }, 700);
    }, 0);
}

// function mvsimg(h) {
//     document.getElementById("himg" + h).style.display = "block";
//     setTimeout(() => {
//         document.getElementById("img" + h).style.left = "0%";
//     }, 500);
//     setTimeout(() => {
//         document.getElementById("img" + h).style.left = "240%";
//         setTimeout(() => {
//             document.getElementById("himg" + h).style.display = "none";
//         }, 1200);
//     }, 6000);
// }

// function movesrcimg() {
//     setTimeout(() => {
//         mvsimg(1);
//         setTimeout(() => {
//             mvsimg(2);
//             setTimeout(() => {
//                 mvsimg(3);
//                 setTimeout(() => {
//                     mvsimg(4);
//                     setTimeout(() => {
//                         mvsimg(5);
//                         setTimeout(() => {
//                             mvsimg(6);
//                             setTimeout(() => {
//                                 mvsimg(7);
//                                 setTimeout(() => {
//                                     mvsimg(8);
//                                     setTimeout(() => {
//                                         mvsimg(9);
//                                         setTimeout(() => {
//                                             mvsimg(10);
//                                             setTimeout(() => {
//                                                 mvsimg(11);
//                                                 setTimeout(() => {
//                                                     mvsimg(12);
//                                                     music.pause();

//                                                     music2.play();
//                                                     setInterval(mus2, 10);
//                                                     setTimeout(() => {
//                                                         mvsimg(13);
//                                                         setTimeout(() => {
//                                                             mvsimg(14);
//                                                             setTimeout(() => {
//                                                                 mvsimg(15);
//                                                                 setTimeout(() => {
//                                                                     mvsimg(16);
//                                                                     setTimeout(() => {
//                                                                         mvsimg(17);
//                                                                         setTimeout(() => {
//                                                                             document.getElementById("himg" + 18).style.display = "block";
//                                                                             setTimeout(() => {
//                                                                                 document.getElementById("img" + 18).style.left = "0%";
//                                                                             }, 500);
//                                                                         }, 21500);
//                                                                     }, 7500);
//                                                                 }, 7500);
//                                                             }, 7500);
//                                                         }, 7500);
//                                                     }, 7500);
//                                                 }, 7500);
//                                             }, 7500);
//                                         }, 7500);
//                                     }, 7500);
//                                 }, 7500);
//                             }, 7500);
//                         }, 7500);
//                     }, 7500);
//                 }, 7500);
//             }, 7500);
//         }, 7500);
//     }, 28500);
// }

function movetimeup() {
    setTimeout(() => {
        document.getElementById("timeup0").style.display = "block";
        setTimeout(() => {
            document.getElementById("timeup0").style.opacity = "100%";
        }, 500);
        setTimeout(() => {
            document.getElementById("timeup0").style.top = "1%";
        }, 2500);
        setTimeout(() => {
            document.getElementById("timeup").style.opacity = "100%";
        }, 3500);
    }, 1000);
}

// function mus2(){
//     music2.play();
// }
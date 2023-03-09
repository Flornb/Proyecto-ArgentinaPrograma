//menu section
let visible_menu = false;
let menu = document.getElementById("nav");
function showHideMenu(){
    if(visible_menu==false){
        menu.style.display = "block";
        visible_menu = true;
    }
    else{
        menu.style.display = "none";
        visible_menu = false;
    }
}
// if select, hide menu 
let links = document.querySelectorAll ("nav a");
for(let i = 0; i < links.length; i++){
    links[i].onClick = function(){
        menu.style.display = "none";
        visible_menu = false;
    }
}
// function createBar(id_bar){
//     for(let x = 0; x < 16; x++){
//     let div = document.createElement("div");
//     div.className = "e";
//     id_bar.appendChild(div);
//     }
// } 
// //bars skills
// let html = document.getElementById("html");
// createBar(html);
// let javascript = document.getElementById("javascript");
// createBar(javascript);
// let nodejs = document.getElementById("nodejs");
// createBar(nodejs);
// let sql = document.getElementById("sql");
// createBar(sql);
// let react = document.getElementById("react");
// createBar(react);
// let redux = document.getElementById("redux");
// createBar(redux);
// let express = document.getElementById("express");
// createBar(express);
// let sequilize = document.getElementById("sequilize");
// createBar(sequilize);
// //painting bars
// let count = [-1,-1,-1,-1,-1,-1];
// //flag 
// let start = false;
// //bars animation
// function skillsEffect(){
//     let skills = document.getElementById("skills");
//     let skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
//     if(skills_distance>=300 && start==false){
//         start = true;
//         const intervalJavascript = setInterval(function(){
//             paintBar(javascript, 16, 0, intervalHTML);
//         },100)
//         const intervalNodejs = setInterval(function(){
//             paintBar(nodejs, 16, 1, intervalNodejs);
//         },100)
//         const intervalSQL = setInterval(function(){
//             paintBar(sql, 16, 2, intervalSQL);
//         },100)
//         const intervalHTML = setInterval(function(){
//             paintBar(html, 11, 3, intervalHTML);
//         },100)
//         const intervalReact = setInterval(function(){
//             paintBar(react, 11, 4, intervalReact);
//         },100)
//         const intervalRedux = setInterval(function(){
//             paintBar(redux, 11, 5, intervalRedux);
//         },100)
//         const intervalExpress = setInterval(function(){
//             paintBar(express, 16, 6, intervalExpress);
//         },100)
//         const intervalSequilize = setInterval(function(){
//             paintBar(sequilize, 16, 7, intervalSequilize);
//         },100)
//     }
// } 
// function paintBar(id_bar, amount, index, interval){
//     count[index]++;
//     y = count[index];
//     if(y < amount){
//         let elements = id_bar.getElementByClassName("e");
//         elements[y].style.backgroundColor = "#CE796B";
//     }
//     else{
//         clearInterval(interval)
//     }
// }

// window.onscroll = function(){
//     skillsEffect();
// }
















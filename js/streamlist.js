fs = function(){$(`<div class="video"><iframe src="https://goodgame.ru/player?157239" frameborder="0" allowfullscreen="true"></iframe></div>`).appendTo('#videowrap');}
﻿nr = function(){$(`<div class="video"><iframe src="https://goodgame.ru/player?61358" frameborder="0" allowfullscreen="true">
        </iframe></div>`).appendTo('#videowrap');}
stream0 = function(){$(`<div class="video"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Fe8Wp4VQZCA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`).appendTo('#videowrap');} 
stream1 = function(){$(`<div class="video"><iframe width="100%" src="https://www.youtube.com/embed/8-vC2XtLw3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`).appendTo('#videowrap');} 
stream2 = function(){$(`<div class="video"><iframe width="100%" src="https://www.youtube.com/embed/hHW1oY26kxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`).appendTo('#videowrap');} 
stream3 = function(){$(`<div class="video"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/plqYLV_Bkek" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`).appendTo('#videowrap');} 
stream4 = function(){$(`<div class="video"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/tNkZsRW7h2c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`).appendTo('#videowrap');}
stream5 = function(){$(`<div class="video"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/DSGyEsJ17cI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`).appendTo('#videowrap');} 

$('<li><a><span id="nr-stream" class="list-item" >NateRou - LiveStream GG</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();nr();
  });

$('<li><a><span id="fan-stream" class="list-item" >Телеканал FAN</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();fs();
  });

$('<li><a><span class="list-item" >ACG動漫音樂放送~ ☞新的一年，新的開始，聽著音樂一同走向嶄新的旅程吧!! 『指定時間開放點播，歡迎點播!』 (24/7) 24hr</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();stream0();
  });

$('<li><a><span class="list-item" >24時間東方アレンジライブ【B】</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();stream1();
  });
  
$('<li><a><span class="list-item" >lofi hip hop radio - beats to relax/study to</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();stream2();
  });

$('<li><a><span class="list-item" >VaporFunk Station 📼 | 24/7 Vaporwave Radio</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();stream3();
  });

$('<li><a><span class="list-item" >🔴Space Ambient Music LIVE 24/7: Space Traveling Background Music, Music for Stress Relief, Dreaming</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();stream4();
  });

$('<li><a><span class="list-item" >Relaxing Jazz & Bossa Nova Music Radio - 24/7 Chill Out Piano & Guitar Music - Stress Relief Jazz</span></a></li>').appendTo(".rectangle").on("click", function() {
$('.video').remove();stream5();
  });
 
$(`
<style>
.rectangle {
counter-reset: li; 
list-style: none; 
font: 14px "Trebuchet MS", "Lucida Sans";
padding: 0;
text-shadow: 0 1px 0 rgba(255,255,255,.5);
}
.rectangle a {
position: relative;
display: block;
padding: .4em .4em .4em .8em;
margin: .5em 0 .5em 2.5em;
background: #3a4586;
color: #fff;
text-decoration: none;
transition: all .3s ease-out;
}
.rectangle a:hover {background: #DCDDE1;color: black}       
.rectangle a:before {
content: counter(li);
counter-increment: li;
position: absolute;
left: -2.5em;
top: 50%;
margin-top: -1em;
background: #9097A2;
height: 2em;
width: 2em;
line-height: 2em;
text-align: center;
font-weight: bold;
}
.rectangle a:after {
position: absolute;
content: "";
border: .5em solid transparent;
left: -1em;
top: 50%;
margin-top: -.5em;
transition: all .3s ease-out;
}
.rectangle a:hover:after {
left: -.5em;
border-left-color: #9097A2;
}
a:hover{cursor: pointer}
@media (min-width: 1015px){
#videowrap{width: 70vw}
}
</style>
`).appendTo('body');

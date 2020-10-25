// ==UserScript==
// @name         meusresultados add on
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  red cards finder
// @author       You
// @match        https://www.flashscore.pt/
// @match        https://www.flashscore.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){

        document.getElementById('box_over_content_11010').innerHTML = "";
        var lGames = document.getElementsByClassName("event__match event__match--live event__match--oneLine");

        for (var i = 0; i < lGames.length; i++){

        var score = lGames[i].getElementsByClassName("event__scores fontBold")[0].textContent;
        var time = lGames[i].getElementsByClassName("event__stage--block")[0].textContent;

        var hTeam = lGames[i].getElementsByClassName("event__participant event__participant--home")[0];
        var aTeam = lGames[i].getElementsByClassName("event__participant event__participant--away")[0];

        var hCardTeam = hTeam.getElementsByClassName("card___2ip_DLm icon--redCard icon--redCard-first icon--redCard-last").length;
        var aCardTeam = aTeam.getElementsByClassName("card___2ip_DLm icon--redCard icon--redCard-first icon--redCard-last").length;

            if(hCardTeam > 0 || aCardTeam > 0){
                document.getElementById('box_over_content_11010').innerHTML += "<a href='#"+lGames[i].id+"'><p style='color:white;padding:2px;font-size:10pt;'><font style='border-radius:10%;width:15px;height:10px;background-color:red;'>"+hCardTeam+"</font> - "+hTeam.textContent+" "+score+" "+ aTeam.textContent +" - <font style='border-radius:10%;width:10px;height:10px;background-color:red;'>"+aCardTeam+"</font> | Time: "+time+"min</p></a>";
            }
        }
   }, 5000);

})();

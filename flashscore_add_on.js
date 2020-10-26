// ==UserScript==
// @name         flashscore_add_on
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  red cards finder
// @author       botclimber
// @match        https://www.flashscore.pt/
// @match        https://www.flashscore.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName("container__content content")[0].style.width = "1150px";
    var space = document.getElementById('rc-top');

    space.style.width = "400px";
    setInterval(function(){

        space.innerHTML = "";
        var lGames = document.getElementsByClassName("event__match event__match--live event__match--oneLine");

        for (var i = 0; i < lGames.length; i++){

        var score = lGames[i].getElementsByClassName("event__scores fontBold")[0].textContent;
        var time = lGames[i].getElementsByClassName("event__stage--block")[0].textContent;

        var hTeam = lGames[i].getElementsByClassName("event__participant event__participant--home")[0];
        var aTeam = lGames[i].getElementsByClassName("event__participant event__participant--away")[0];

        var hCardTeam = hTeam.getElementsByClassName("card___2ip_DLm icon--redCard").length;
        var aCardTeam = aTeam.getElementsByClassName("card___2ip_DLm icon--redCard").length;

            //if(hCardTeam > 0 || aCardTeam > 0){
                hTeam = (hCardTeam > 0)? "<span style='color:orange;'>"+hTeam.textContent+"</span>" : hTeam.textContent ;
                aTeam = (aCardTeam > 0)? "<span style='color:orange;'>"+aTeam.textContent+"</span>" : aTeam.textContent ;

                space.innerHTML += "<a href='#"+lGames[i].id+"'><p style='color:white;padding:2px;font-size:10pt;'><font style='border-radius:10%;width:15px;height:10px;background-color:red;'><b>"+hCardTeam+"</b></font> "+hTeam+" "+score+" "+aTeam+" <font style='border-radius:10%;width:10px;height:10px;background-color:red;'><b>"+aCardTeam+"</b></font> | Time: "+time+"</p></a>";
            //}
        }
   }, 3000);

})();

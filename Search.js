

function searchPlayer(){
    var searchbar=document.getElementById('Input');
    var playersList=document.getElementsByClassName("Player_inside");
    filter=searchbar.value.toUpperCase();

    for(i=0;i<playersList.length;i++){
        a = playersList[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            playersList[i].style.display = "";
        }
        else {
              playersList[i].style.display = "none";
        }
    }
}


function searchTeam(){
    var searchbar=document.getElementById('Input');
    var teamList=document.getElementsByClassName("teamRow");
    filter=searchbar.value.toUpperCase();

    for(i=0;i<teamList.length;i++){
        a = teamList[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            teamList[i].style.display = "";
        }
        else {
              teamList[i].style.display = "none";
        }
    }
}


function searchGame(){
    var searchbar=document.getElementById('Input');
    var gameList=document.getElementsByClassName("A_Game");
    filter=searchbar.value.toUpperCase();

    for(i=0;i<gameList.length;i++){
        a = gameList[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            gameList[i].style.display = "";
        }
        else {
              gameList[i].style.display = "none";
        }
    }
}

var filterCategory="";
var filterType="";
var filterComp="";

function changeFilterColor() {
    var switches=document.getElementsByClassName("switch")
    for(i=0;i<switches.length;i++){
        if(switches[i].value==filterType|| switches[i].value==filterCategory || switches[i].value==filterComp){

            console.log(switches[i].value);
            switches[i].style.background="mediumvioletred";
        }
        else{
            switches[i].style.background="";
        }
    }
    /*if(f.value==filterType|| f.value==filterCategory){
        f.style.background="red";
    }
    else {
        f.style.background="";
    }*/
}


/*function filterByCategories(f){
    var gameList=document.getElementsByClassName("A_Game");
    if(filterCategory==f){
        filterCategory=""
        for(i=0;i<gameList.length;i++){
            var gameType=gameList[i].dataset.type;
            if(gameType==filterType || filterType==""){
                gameList[i].style.display = "";
            }
            else {
                gameList[i].style.display = "none";
            }
        }
        return
    }
    else filterCategory=f;
    for(i=0;i<gameList.length;i++){
        var gameCategory=gameList[i].dataset.category;
        var gameType=gameList[i].dataset.type;
        if (gameCategory==filterCategory){
            if(gameType==filterType || filterType==""){
                gameList[i].style.display = "";
            }
        }
        else{
            gameList[i].style.display="none";
        }
    }
}

function filterByType(f){
    var gameList=document.getElementsByClassName("A_Game");
    if(filterType==f){
        filterType="";
        return
    }
    else filterType=f;
    for(i=0;i<gameList.length;i++){
        var gameType=gameList[i].dataset.type;
        var gameCategory=gameList[i].dataset.category;
        if (gameType==filterType){
            if(gameCategory==filterCategory || filterCategory==""){
                gameList[i].style.display = "";
            }
        }
        else{
            gameList[i].style.display="none";
        }
    }
}*/


function changeFilter(f,f_ind) {

    if (f_ind == 'Type') {

        if (f == filterType) {
            filterType = "";
        } else {
            filterType = f;
        }
    }

    if (f_ind == 'Category') {

        if (f == filterCategory) {
            filterCategory = "";
        } else {
            filterCategory = f;
        }
    }

    if (f_ind == 'Comp'){
        if (f == filterComp) {
            filterComp = "";
        } else {
            filterComp = f;
        }
    }
}





function filter_a(){
    var gameList=document.getElementsByClassName("A_Game");
    for(i=0;i<gameList.length;i++){
        gameList[i].style.display="";
        var gameType=gameList[i].dataset.type;
        var gameCategory=gameList[i].dataset.category;
        var gameCompetition=gameList[i].dataset.competition;
        if(gameType!=filterType && filterType!=""){
            gameList[i].style.display="none"
        }
        if(gameCategory!=filterCategory && filterCategory!=""){
            gameList[i].style.display="none"
        }
        if(gameCompetition!=filterComp && filterComp!=""){
            gameList[i].style.display="none"
        }
    }
}

filterTeamCategory="";
filterTeamComp="";



function changeTeamFilterColor() {
    var switches=document.getElementsByClassName("switch")
    for(i=0;i<switches.length;i++){
        if(switches[i].value==filterTeamComp|| switches[i].value==filterTeamCategory){
            console.log(switches[i].value);
            switches[i].style.background="mediumvioletred";
        }
        else{
            switches[i].style.background="";
        }
    }
    /*if(f.value==filterType|| f.value==filterCategory){
        f.style.background="red";
    }
    else {
        f.style.background="";
    }*/
}

function changeTeamFilter(f,f_ind) {

    if (f_ind == 'Category') {

        if (f == filterTeamCategory) {
            filterTeamCategory = "";
        } else {
            filterTeamCategory = f;
        }
    }

    if (f_ind == 'Comp'){
        if (f == filterTeamComp) {
            filterTeamComp = "";
        } else {
            filterTeamComp = f;
        }
    }
}




function filter_b() {
    var teamList=document.getElementsByClassName('teamRow')
    for(i=0;i<teamList.length;i++){
        teamList[i].style.display="";
        var teamCategory=teamList[i].dataset.category;
        var teamCompetition=teamList[i].dataset.competition;
        if(teamCategory!=filterTeamCategory && filterTeamCategory!=""){
            teamList[i].style.display="none"
        }
        if(teamCompetition!=filterTeamComp && filterTeamComp!=""){
            teamList[i].style.display="none"
        }
    }

}




searchTeam();
searchPlayer();
searchGame();

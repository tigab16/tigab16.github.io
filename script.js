/*Création des variables nécessaires à la réussite du Quiz*/
let points = 0;
let bouttonAppuyable = false;
let numeroQuestion = 0;

let choix0 = document.getElementById("choix0");
let choix1 = document.getElementById("choix1");
let choix2 = document.getElementById("choix2");
let choix3 = document.getElementById("choix3");

let bouttonsQuestion0 = document.getElementById("boutton0");
let bouttonsQuestion1 = document.getElementById("boutton1");
let bouttonsQuestion2 = document.getElementById("boutton2");
let bouttonsQuestion3 = document.getElementById("boutton3");

const messageReponse = ["Bonne réponse!", "Mauvaise réponse!"];
const questions = 
[
    "Quel champion est connu pour sa liaison au chiffre 4?",
    "Quels sont les noms des 3 soeurs dirigeant le Freljord?",
    "Qui sont les aînés parmis ces champions?",
    "Quel champion ne vient PAS des Îles obscures? ('Shadow isles' en anglais)",
    "Qui sont les 3 dirigeants de Noxus?",
    "Quel champion ne vient PAS du Vide? ('VOID' en anglais)",
    "Quel champion ne constrôle PAS le feu?",
    "Quel champion n'est PAS un dieu du Freljord?",
    "Shubbanuffa?",
    "Trouver où se cache le champignon de Teemo!"
];
const bonnesReponses = 
[
    "Jhin",
    "Avarosa, Serylda et Lissandra",
    "Garen et Yone",
    "Nocturne",
    "Swain, Darius et probablement Leblanc",
    "K'Sante",
    "Aatrox",
    "Tryndamere",
    "Gnar!!!!!",
    "je sais p... *explose*"
];
let bonneReponseActuelle = "";

const reponsesQuestion1 = ["Jinx", "Azir", "Ahri", "Jhin"];
const reponsesQuestion2 = ["Ashe, Sejuanie et Lissandra", "Anne, Julie et Maria", "Avarosa, Serylda et Lissandra", "Sara, Marguerite et Maryane"];
const reponsesQuestion3 = ["Garen et Yone", "Garen et Yasuo", "Lux et Yone", "Lux et Yasuo"];
const reponsesQuestion4 = ["Vex", "Elise", "Nocturne" ,"Maokai"];
const reponsesQuestion5 = ["Swain, Kled et Boram", "Swain, Darius et probablement Leblanc", "Ambessa, darius et Boram", "Leblanc, Leblanc et probablement Leblanc"];
const reponsesQuestion6 = ["Bel'Veth", "Kog'Maw", "Kha'Zix", "K'Sante"];
const reponsesQuestion7 = ["Annie", "Aatrox", "Milio", "Brand"];
const reponsesQuestion8 = ["Tryndamere", "Ornn", "Anivia", "Volibear"];
const reponsesQuestion9 = ["Gnar!!!!!", "gnAr","???", "dasdgdffadsig lanvigonfsdjyhishjadbhvfesuisuladk"];
const reponsesQuestion10 =["Ici!", "Ou là!", "ou... euh...", "je sais p... *explose*"];

/*Change de question pour passer à la prochaine, remet la couleur par défaut pour les boutons et fait disparaitre les zones de textes qui sont normalement invisible*/
function changerQuestions()
{
    let zoneQuestion = document.getElementById("question");

    bouttonsQuestion0.classList.remove("bonneReponse");
    bouttonsQuestion0.classList.remove("mauvaiseReponse");
    bouttonsQuestion1.classList.remove("bonneReponse");
    bouttonsQuestion1.classList.remove("mauvaiseReponse");
    bouttonsQuestion2.classList.remove("bonneReponse");
    bouttonsQuestion2.classList.remove("mauvaiseReponse");
    bouttonsQuestion3.classList.remove("bonneReponse");
    bouttonsQuestion3.classList.remove("mauvaiseReponse");

    document.getElementById("messageReponse").innerText = "";
    document.getElementById("bouttonSuiteQuiz").classList.add("hidden");
    bouttonAppuyable = true;

    if(numeroQuestion == 0)
    {
        choix0.innerText = reponsesQuestion1[0];
        choix1.innerText = reponsesQuestion1[1];
        choix2.innerText = reponsesQuestion1[2];
        choix3.innerText = reponsesQuestion1[3];

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 1)
    {
        choix0.innerText = reponsesQuestion2[0];
        choix1.innerText = reponsesQuestion2[1];
        choix2.innerText = reponsesQuestion2[2];
        choix3.innerText = reponsesQuestion2[3];

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 2)
    {
        choix0.innerText = reponsesQuestion3[0];
        choix1.innerText = reponsesQuestion3[1]
        choix2.innerText = reponsesQuestion3[2]
        choix3.innerText = reponsesQuestion3[3]

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 3)
    {
        choix0.innerText = reponsesQuestion4[0];
        choix1.innerText = reponsesQuestion4[1];
        choix2.innerText = reponsesQuestion4[2];
        choix3.innerText = reponsesQuestion4[3];

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 4)
    {
        choix0.innerText = reponsesQuestion5[0];
        choix1.innerText = reponsesQuestion5[1];
        choix2.innerText = reponsesQuestion5[2];
        choix3.innerText = reponsesQuestion5[3];

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 5)
    {
        choix0.innerText = reponsesQuestion6[0];
        choix1.innerText = reponsesQuestion6[1];
        choix2.innerText = reponsesQuestion6[2];
        choix3.innerText = reponsesQuestion6[3];

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 6)
    {
        choix0.innerText = reponsesQuestion7[0];
        choix1.innerText = reponsesQuestion7[1];
        choix2.innerText = reponsesQuestion7[2];
        choix3.innerText = reponsesQuestion7[3];

        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 7)
    {
        choix0.innerText = reponsesQuestion8[0];
        choix1.innerText = reponsesQuestion8[1];
        choix2.innerText = reponsesQuestion8[2];
        choix3.innerText = reponsesQuestion8[3];
    
        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 8)
    {
        choix0.innerText = reponsesQuestion9[0];
        choix1.innerText = reponsesQuestion9[1];
        choix2.innerText = reponsesQuestion9[2];
        choix3.innerText = reponsesQuestion9[3];
    
        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 9)
    {
        choix0.innerText = reponsesQuestion10[0];
        choix1.innerText = reponsesQuestion10[1];
        choix2.innerText = reponsesQuestion10[2];
        choix3.innerText = reponsesQuestion10[3];
    
        bonneReponseActuelle = bonnesReponses[numeroQuestion];
        zoneQuestion.innerText = questions[numeroQuestion];
    }
    else if(numeroQuestion == 10)
    {
        finQuiz();
    }
    numeroQuestion++;
}

/*Regarde si la réponse donné par le joueur est la bonne |Si oui, Message de bonne réponse, sinon Message de mauvaise réponse*/
/*Si le joueur a déja appuyé sur un boutton pour une question, il ne peut pas appuyer sur un autre*/
function choisirReponse(idBoutton)
{   
    if(bouttonAppuyable == false)
    {
        return;
    }

    boutton = document.getElementById(idBoutton);
    
    if(boutton.innerText == bonneReponseActuelle)
    {
        document.getElementById("messageReponse").innerText = messageReponse[0];
        document.getElementById("bouttonSuiteQuiz").classList.remove("hidden");
        document.getElementById(idBoutton).classList.add("bonneReponse");

        bouttonAppuyable = false;
        points++;
    }
    else
    {
        document.getElementById("messageReponse").innerText = messageReponse[1];
        document.getElementById("bouttonSuiteQuiz").classList.remove("hidden");
        document.getElementById(idBoutton).classList.add("mauvaiseReponse");

        bouttonAppuyable = false;
    }
    calculerPoints();
}

/*Le nom dit tout*/
function calculerPoints()
{
    document.getElementById("score").innerText = points + "/10";
}

/*Est appelé lorsque le boutton pour commencer le quiz est appuyé*/
/*Fait disparaitre le dit boutton et rend les bouttons de réponses visibles*/
function commencerQuiz()
{
    bouttonsQuestion0.classList.remove("hidden");
    bouttonsQuestion1.classList.remove("hidden");
    bouttonsQuestion2.classList.remove("hidden");
    bouttonsQuestion3.classList.remove("hidden");
    document.getElementById("score").classList.remove("hidden");

    document.getElementById("bouttonCommencerQuiz").classList.add("hidden");
    changerQuestions();
}

function finQuiz()
{
    bouttonsQuestion0.classList.add("hidden");
    bouttonsQuestion1.classList.add("hidden");
    bouttonsQuestion2.classList.add("hidden");
    bouttonsQuestion3.classList.add("hidden");
    document.getElementById("question").innerText = "Votre résultat est de ";

    if(points == 10)
    {
        document.getElementById("messageReponse").innerText = "UN SCORE LÉGENDAIRE";
    }
    else if(points > 7)
    {
        document.getElementById("messageReponse").innerText = "SI PRÈS DE LA PERFECTION!";
    }
    else if(points >= 6)
    {
        document.getElementById("messageReponse").innerText = "70% - 60%... ça passe";
    }
    else if(points == 5)
    {
        document.getElementById("messageReponse").innerText = "Proche du 60%, juste un point de plus :(";
    }
    else if(points == 4)
    {
        document.getElementById("score").innerText = points + "/4";
        document.getElementById("messageReponse").innerText = "My genius will be understood—eventually.     - Jhin";
    }
    else
    {
        document.getElementById("messageReponse").innerText = "Oulala, un peu de pratique ferait du bien  -J.B.";
    }
}

/************************** */
/*Pour l'élémentg "dialog" */
const zoneDialog = document.getElementById("zoneDialog");

if(localStorage.getItem('afficher') === null)
{
    localStorage.setItem('afficher','oui');
    zoneDialog.showModal();
}
if(localStorage.getItem('afficher') === 'oui')
{
    zoneDialog.showModal();
}

function fermerDialog()
{
    zoneDialog.close();
}

function fermerEtNeplusOuvrirDialog()
{
    zoneDialog.close();
    localStorage.setItem('afficher', 'non');
}




  

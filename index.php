<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>

    <title>Portfolio</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    <script src="cvInteraction.js"></script> <!--ajout du script de modificaiton de la page-->
    <script src='dist/js/bootstrap.js'></script>
</head>


<header>
    <div class="header">
        <p class="child1">
            <a href="index.php" class="home_button"> Portfolio </a>
        </p>

        <button onclick="aProposInfo()" class="home_button header_buttons" id="aPropos">A propos</button> <!--au click sur le bouton, je lance la fonction aProposInfo()-->
        <button onclick="experiencesInfo()" class="home_button header_buttons" id="experiences">Experiences</button>
        <button onclick="projetsInfo()" class="home_button header_buttons" id="projets">Projets</button>
        <!--<p class="">
            <a href="a_propos.html" class="header_buttons"> A propos </a>
        </p>
        <p class=""> 
            <a href="experiences.html" class="header_buttons">Experiences</a>  

        </p>
        <p class=""> 
            <a href="projets.html" class="header_buttons">Projets</a>  

        </p>-->

     </div>
</header>


<body>
    <div class="body_orga body_color border_left">
      
        <!-- block Personnage -->
        <div class="div_character inventaire border_left">
            
            <div class="body_list_items border_left" style="width:30% ;">
                <h2>Equipement</h2>
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
            </div>
            
            <div class = "border_left" style="width:30% ;">
                <img src="ressources/plein_face.png" >
            </div>

            <div class="body_list_items border_left" style="width:30% ;">
                <h2>Equipement</h2>
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
                <img class="body_icons" src="ressources/images/icons/.svg" alt="">
            </div>      
        
        </div>

        <!-- BlockInfo -->
        <div class="div_blockinfo border_left">
            <div id="competancesContent">
                <h3>Mes competances</h3>
                <p>Voici la liste de mes competances</p>
                <li>
                    <ul>Ma premiére competance</ul>
                    <ul>Ma segonde competance</ul>
                    <ul>...</ul>
                </li>
            </div>

            <div id="aProposContent">
                <?php
                    include("a_propos_content.html") //ajout du contenue de la page "a_propos_content.html" via le language Php
                ?>
            </div>
            <div id="experiancesContent">
                <?php
                    include("experiances_content.html")
                ?>
            </div>
            <div id="projetsContent">
                <?php
                    include("projets_content.html")
                ?>
            </div>
        </div>
    </div>
</body>


<footer>
    <div class="footer">
        <p class="footer_buttons border_left">linkedin</p>
        <p class="footer_buttons border_left">gmail</p>
        <p class="footer_buttons border_left">github</p>
    </div>
</footer>

</html>
<!-- -->
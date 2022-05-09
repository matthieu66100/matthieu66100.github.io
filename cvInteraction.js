function aProposInfo(){
    var divState = document.getElementById("aProposContent").style.display
    if(divState == "none" || divState == ""){
        document.getElementById("competancesContent").style.display = "none"

        document.getElementById("aPropos").className = "activeButton"
        document.getElementById("aProposContent").style.display = "block"

        document.getElementById("experiences").className = "home_button"
        document.getElementById("experiancesContent").style.display = "none"

        document.getElementById("projets").className = "home_button"
        document.getElementById("projetsContent").style.display = "none"
    }else{
        document.getElementById("competancesContent").style.display = "block"

        document.getElementById("aPropos").className = "home_button"
        document.getElementById("aProposContent").style.display = "none"

        document.getElementById("experiences").className = "home_button"
        document.getElementById("experiancesContent").style.display = "none"

        document.getElementById("projets").className = "home_button"
        document.getElementById("projetsContent").style.display = "none"
    }
}

function experiencesInfo(){
    var divState = document.getElementById("experiancesContent").style.display
    if(divState == "none" || divState == ""){
        document.getElementById("competancesContent").style.display = "none"

        document.getElementById("aPropos").className = "home_button"
        document.getElementById("aProposContent").style.display = "none"

        document.getElementById("experiences").className = "activeButton"
        document.getElementById("experiancesContent").style.display = "block"

        document.getElementById("projets").className = "home_button"
        document.getElementById("projetsContent").style.display = "none"
    }else{
        document.getElementById("competancesContent").style.display = "block"

        document.getElementById("aPropos").className = "home_button"
        document.getElementById("aProposContent").style.display = "none"

        document.getElementById("experiences").className = "home_button"
        document.getElementById("experiancesContent").style.display = "none"

        document.getElementById("projets").className = "home_button"
        document.getElementById("projetsContent").style.display = "none"
    }
}

function projetsInfo(){
    var divState = document.getElementById("projetsContent").style.display
    if(divState == "none" || divState == ""){
        document.getElementById("competancesContent").style.display = "none"

        document.getElementById("aPropos").className = "home_button"
        document.getElementById("aProposContent").style.display = "none"

        document.getElementById("experiences").className = "home_button"
        document.getElementById("experiancesContent").style.display = "none"

        document.getElementById("projets").className = "activeButton"
        document.getElementById("projetsContent").style.display = "block"
    }else {
        document.getElementById("competancesContent").style.display = "block"

        document.getElementById("aPropos").className = "home_button"
        document.getElementById("aProposContent").style.display = "none"

        document.getElementById("experiences").className = "home_button"
        document.getElementById("experiancesContent").style.display = "none"

        document.getElementById("projets").className = "home_button"
        document.getElementById("projetsContent").style.display = "none"
    }
}


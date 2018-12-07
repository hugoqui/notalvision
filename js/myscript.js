function showDetails(evt, program) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(program).style.display = "block";
    evt.currentTarget.className += " active";
}

function showProgram(program) {
    const tabcontent = document.getElementsByClassName("paragraph");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(program).style.display = "block";

    for (let i = 1; i <= 7; i++) {
        const element = "active" + i;
        document.getElementById(element).style.display = "none";
        const program_name = "paragraph" + i;        
        const display_program = document.getElementById(program_name).style.display ;    
        document.getElementById(element).style.display = display_program;
    }
    


}
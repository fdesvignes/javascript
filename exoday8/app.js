document.getElementById("submit").addEventListener("click", function(e){
    let myAge = document.getElementById("age").value;

    if (myAge >= 18) {
        alert("Vous etes majeur");
    }
        else {
            alert ("Vous etes mineur");
        }
})
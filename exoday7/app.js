


document.getElementById("submit").addEventListener("click", function(e) {
    e.preventDefault();

    let shoeSz = document.getElementById("shoeSize").value;
    let year = document.getElementById("yearOfBirth").value;
    let result =  (((shoeSz*2 + 5)*50) -year + 1766);

 alert (result);
})
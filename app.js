const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.textMessage.value;
    checkFields(name, email, message)
});

function checkFields(name, email, message){

    if (name == ""){
        console.log("NOME VAZIO");
        alert("The NAME can't be empty");
    }
    if (email == ""){
        console.log("EMAIL VAZIO");
        alert("The EMAIL can't be empty");
    }
    if (message == ""){
        console.log("MENSAGEM VAZIA");
        alert("The MESSAGE can't be empty");
    }
}
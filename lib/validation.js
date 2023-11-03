console.log("Coucou");



// Récuperer tous les inputs

// Pour chaque inputs
    // Dès que on sort de l'input
        // si l'id de l'input est "email"
            // si la valeur de l'input contient bien un "@"" et "."
                // Alors on ajoute la class "is-valid"
                // on remove la class "is-invalid"
            // sinon
                // Alors on ajoute la class "is-invalid"
                // on remove la class "is-valid"              
        // sinon
            // si la valeur de l'input est vide
                // Alors on ajoute la class "is-invalid"
                // on remove la class "is-valid"
            // sinon
                // Alors on ajoute la class "is-valid"
                // on remove la class "is-invalid"

        // compter le nombre d'élement avec la class valid
        // si ce décompte est égal au nombre inputs et que la case est cochée
            // Alors on rend le bouton actif
        // sinon
            // On rend le bouton inactif
    
const inputs = document.querySelectorAll(".form-control")
const checkbox = document.querySelector("#tos")
const btn = document.querySelector(".btn")

console.dir(checkbox)

console.log(inputs)

inputs.forEach( (input) => {
    input.addEventListener("blur", (event) => {
        if (input.attributes.id.value === "email") {
            if (/\w+@\w+\.\w+/.test(input.value)) {
                input.classList.add("is-valid")
                input.classList.remove("is-invalid")
            } else {
                input.classList.remove("is-valid")
                input.classList.add("is-invalid")
            }
        } else {
            if (input.value !== "") {
                input.classList.add("is-valid")
                input.classList.remove("is-invalid")
            } else {
                input.classList.remove("is-valid")
                input.classList.add("is-invalid")
            }            
        }

        const counter = document.querySelectorAll(".is-valid").length
        if (counter === inputs.length && checkbox.checked) {
            btn.disabled = false;
        } else {
            btn.disabled = true;
        }
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('mano-forma');
    const textInput = document.getElementById('tekstas');
    const emailInput = document.getElementById('email');
    const ageInput = document.getElementById('age');

    form.addEventListener('submit', (event) => {
        let valid = true;
        let message = '';

        if (textInput.value.trim() === '') {
            message += 'Žinutės laukelis turi būti užpildytas !\n';
            valid = false;
        }

        if (emailInput.value.trim() === '') {
            message += 'El.pašto adresas yra būtinas, kad gautumėte atsakymą!\n';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailInput.value.trim())) {
            message += 'Netinkamas adresas!\n';
            valid = false;
        }

        if (ageInput.value.trim() === '') {
            message += 'Amžius turi būti nurodytas!\n';
            valid = false;
        } else {
            const age = parseInt(ageInput.value.trim(), 10);
            if (isNaN(age) || age < 18 || age > 99) {
                message += 'Amžius turi atitikti pilnamečio asmens kriterijų!\n';
                valid = false;
            }
        }

       if (!valid) {
           alert(message);
          event.preventDefault();  // Prevent form submission
        }
    });
});
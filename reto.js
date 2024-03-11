function mayus() {

    let mayuscula = document.getElementById ("nombre").value;
    mayuscula = mayuscula.toUpperCase()
    alert(mayuscula)
}

function enviar() {
    let boton = document.getElementById("boton");
    boton.style.display = "block"; #• Después de ingresar el Apellido se debe activar el
    botón Enviar

}

function registro() {
    let chec = document.getElementById("option1"); 
    let ch = document.getElementById("ch");
    if (chec.checked) {
        ch.innerHTML = `    <div class="form-check">
       
        
        <div class="form-check"  id="one">
          <input class="form-check-input" type="checkbox" value=""  >
          <label class="form-check-label" for="flexCheckDefault">
            Modalidad 1
          </label>
        </div>
        <div class="form-check" >
          <input class="form-check-input" type="checkbox" value="" id="two">
          <label class="form-check-label" for="flexCheckChecked">
            Modalidad 2
          </label>
        </div>

      </div>`

    }  #Al seleccionar el Sí, se deben mostrar dos checkbox.
    Al seleccionar el No deben desaparecer los checkbox.
    
    else {
        ch.innerHTML = ``;
    }
    <button onclick="validateEmail()">Submit</button> #validar email 

    <script>
        function validateEmail() {
            var emailInput = document.getElementById('email');
            var errorMessage = document.getElementById('error-msg');
            var email = emailInput.value;

            if (!email.includes('@')) {
                errorMessage.textContent = 'Email must contain @ symbol';
                return;
            }
            <label for="password">Password:</label>
    <input type="password" id="password">
    <br>
    <label for="confirm_password">Confirm Password:</label>
    <input type="password" id="confirm_password">
    <br>
    <button onclick="validatePasswords()">Validate</button>

    <script>
        function validatePasswords() {
            var passwordInput = document.getElementById('password');
            var confirmPasswordInput = document.getElementById('confirm_password');

            var password = passwordInput.value;
            var confirmPassword = confirmPasswordInput.value;

            if (password === confirmPassword) {
                passwordInput.classList.remove('nomatch');
                confirmPasswordInput.classList.remove('nomatch');
                passwordInput.classList.add('match');
                confirmPasswordInput.classList.add('match');
            } else {
                passwordInput.classList.remove('match');
                confirmPasswordInput.classList.remove('match');
                passwordInput.classList.add('nomatch');
                confirmPasswordInput.classList.add('nomatch');
            }
        }
}




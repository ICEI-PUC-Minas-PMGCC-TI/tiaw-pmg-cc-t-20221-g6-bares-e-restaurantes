const LOGIN_URL = "login.html";

function registerPeople() {
  let data = readPeople();
  let email = document.querySelector("#email-people").value;
  let password = document.querySelector("#password-people").value;
  let password2 = document.querySelector("#password-people2").value;
  let id = generateUUID();

  if (password2 == password) {
    // create object and save
    let people_object = {
      id: generateUUID(),
      email: email,
      password: password,
    };
    data.people.push(people_object);
    saveData_2(data);
    window.location.href = LOGIN_URL;
  } else {
    alert("As senhas não são iguais.");
  }
}

document.getElementById("cadastro").addEventListener("click", registerPeople);

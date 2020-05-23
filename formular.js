var regx_chr = /^([a-zA-Z0-9_-]+)$/;
var regx_mail = /^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$/;
const adaugaBtn = document.querySelector("#butform");

function checkForm(frm1) {
    var fre = false;
    var nume = frm1.nume;
    var parola = frm1.parola;
    var email = frm1.email;

    if(nume.value.length<3 || nume.value.length>18 || nume.value.search(regx_chr)==-1) {
        alert('Numele trebuie sa contina intre 3 si 18 caractere \nNumere, Litere, "-" si "_"');
        nume.select();    // selecteaza casuta pt. Nume
      }
      else if(parola.value.length<7 || parola.value.length>18 || parola.value.search(regx_chr)==-1) {
        alert('Parola trebuie sa contina intre 7 si 18 caractere \nNumere, Litere, "-" si "_"');
        parola.select();    // selecteaza casuta pt. Parola
      }
      else if(email.value.search(regx_mail)==-1) {
        alert('Adaugati o adresa de e-mail corecta');
        email.select();    // selecteaza casuta pt. E-mail
      }
      else fre = true;
    
      return fre;
    }

    adaugaBtn.addEventListener("click", async function () {
      const nume = document.querySelector("#nume").value;
      const pre = document.querySelector("#pre").value;
      const email = document.querySelector("#email").value;
      const parola = document.querySelector("#parola").value;
  
      const newUtilizator = {
          nume,
          pre,
          email,
          parola
      }
  
      const newUtilizatoriList = await postData('http://localhost:3000/adauga-utilizator', newUtilizator)
  
      console.log("Data", newUtilizatoriList)
  
  })
  
  async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

async function deleteUtilizator(url = '') {
  
  const response = await fetch(url, {
      method: 'DELETE', 
  });
  return response.json();
}


sterge = function (event) {
  if(event.key=='Delete')
    deleteUtilizator(url='http://localhost:3000/sterge-utilizator')
}

window.addEventListener("keydown", sterge))

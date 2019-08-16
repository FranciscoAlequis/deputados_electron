
const data = document.getElementById("dados")

data.innerHTML = getUser();

      async function getUser() {
        const profileResponse = await fetch(
          `https://dadosabertos.camara.leg.br/api/v2/deputados/`
        )
        const profile = await profileResponse.json();
        
        profile.dados.forEach(function(dates) {
          const t = document.createElement('div')
        t.innerHTML = `
          <div class="card" style="width: 12rem; margin-lef: 500px; border: 0">
          <img class=" mx-auto" style="width: 200px; margin-top: -18px; card-img-top" style="width: 60px; heigh: 100px" src="${dates.urlFoto}" alt="Card image cap">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item ">
                  <h4>${dates.nome}</h4>
                  <h4>${dates.siglaPartido}</h4>
                  <h4>${dates.email}</h4>
                  </li>
                  
                </ul>
                
            </div>
        `;

        data.appendChild(t)
     }
        )
      }
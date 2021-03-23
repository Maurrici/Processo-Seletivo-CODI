//Dados do site
var baseUrl = "https://api.whatsapp.com/send?phone=5585989322215&text="
const ufs = ["Ceará", "Maranhão", "Piauí"]

const agents = [
    {
        name: "Maurício de Moura",
        uf: "Ceará"
    },
    {
        name: "Evelyn Braga Mendonça",
        uf: "Ceará"
    },
    {
        name: "Izuko Midoriya",
        uf: "Maranhão"
    },
    {
        name: "Lelouch vi Britannia",
        uf: "Maranhão"
    },
    {
        name: "Francisco Otávio",
        uf: "Piauí"
    },
    {
        name: "Irelia da Silva",
        uf: "Piauí"
    },

]

//Funções do Site
function renderUfs(){
    var container = document.querySelector('select#uf')

    ufs.forEach(item => {
        var optionEl = document.createElement('option')
        optionEl.value = item
        optionEl.appendChild(document.createTextNode(item))

        container.appendChild(optionEl)
    })
}

function renderAgents(agentUf){
    var container = document.querySelector('select#point')
    console.log("Teste")
    agents.forEach(item => {
        if(item.uf == agentUf){
            var optionEl = document.createElement('option')
            optionEl.value = item.name
            optionEl.appendChild(document.createTextNode(item.name))

            container.appendChild(optionEl)
        }
    })
} 

function send(){
    //Recebendo dados do pedido
    const user = {
        name: document.querySelector('input[name="name"]').value + document.querySelector('input[name="secondName"]').value,
        age: document.querySelector('input[name="age"]').value,
        uf: document.querySelector('input[name="uf"]').value,
        city: document.querySelector('input[name="city"]').value,
        email: document.querySelector('input[name="email"]').value,
        phone: document.querySelector('input[name="phone"]').value
    }

    const agent = {
        name: document.querySelector('select#point').value,
        uf: document.querySelector('select#uf').value,
        date: document.querySelector('input[name="date"]').value
    }

    $('#agent-name').html(agent.name);
    $('#agent-state').html(agent.uf);
    $('#agent-date').html(agent.date);

    $('#user-name').html(user.name);
    $('#user-age').html(user.age);
    $('#user-uf').html(user.uf);
    $('#user-city').html(user.city);
    $('#user-email').html(user.email);
    $('#user-phone').html(user.phone);
}

function changeUfFields(){
    let agentUf = document.querySelector('select#uf').value
    if(agentUf != 0){
        document.querySelector('#agent-uf').classList.remove('d-none');
        renderAgents(agentUf);
    }else{
        document.querySelector('#agent-uf').classList.add('d-none');
    }   
}



renderUfs()

const stateData = {};

function getRandomLevel() {
    const levels = ["BOM", "MEDIO", "BAIXO"];
    return levels[Math.floor(Math.random() * levels.length)];
}

function getHighlightClass(level) {
    if (level === "BOM") return "highlight-good";
    if (level === "MEDIO") return "highlight-medium";
    if (level === "BAIXO") return "highlight-low";
    return "";
}

document.addEventListener("DOMContentLoaded", function() {
    function showHemocentros() {
        const estado = document.getElementById("estado").value;
        if (estado) {
            if (stateData[estado]) {
                renderTableData(stateData[estado]);
            } else {
                const newData = generateRandomData();
                stateData[estado] = newData;
                renderTableData(newData);
            }
        } else {
            document.getElementById("tabelaCorpo").innerHTML = ""; 
        }
    }

    function renderTableData(data) {
        const tableBody = document.getElementById("tabelaCorpo");
        tableBody.innerHTML = "";

        
        ["BOM", "MEDIO", "BAIXO"].forEach(level => {
            const row = document.createElement("tr");

           
            const levelCell = document.createElement("td");
            levelCell.className = getHighlightClass(level);
            levelCell.textContent = level;
            row.appendChild(levelCell);

            
            data.forEach(cellLevel => {
                const cell = document.createElement("td");
                if (cellLevel === level) {
                    cell.className = getHighlightClass(cellLevel);
                    cell.textContent = cellLevel;
                } else {
                    cell.textContent = "";  
                }
                row.appendChild(cell);
            });

            tableBody.appendChild(row);
        });
    }

    function generateRandomData() {
        const data = [];
        for (let i = 0; i < 8; i++) {  
            data.push(getRandomLevel());
        }
        return data;
    }

    document.getElementById("estado").addEventListener("change", showHemocentros);
});

function showHemocentros2() {
    const estado = document.getElementById("estado2").value;
    const listaHemocentros = document.getElementById("listaHemocentros2");

    
    listaHemocentros.innerHTML = "";

    const hemocentros = hemocentrosData[estado] || [];

    hemocentros.forEach(hemocentro => {
        const li = document.createElement("li");
        li.textContent = hemocentro;
        listaHemocentros.appendChild(li);
    });
}


const hemocentrosData = {
    "ac": ["Hemocentro Cruzeiro do Sul - Rua Pedro Telles, Nº600, bairro Manoel Terças", 
         "Hemocentro Rio Branco - Av. Getúlio Vargas, Nº2787 ao lado do Teatrão"],

    "al": ["Hemocentro Arapiraca - Rua Geraldo Barbosa Lima, Nº49 vizinho ao 5ºcentro de saúde Centro arapiraca", 
        "Hemocentro Maceió - Unidade Trapiche - Rua Dr. Jorge de Lima, Nº58"],

    "ap": ["HEMOAP -  Av Raimundo Álvares da Costa, 358 - Central - Macapá, AP"],

    "am": ["Hemocentro Manaus -  Av Constantino Nery, 4397, Manaus"],

    "ba": ["Hemocentro Feira de Santana - Avenida Presidente Dutra, s/n, Esquina com a Avenida Maria Quitéria, em frente a TV Subaé.",
           "Hemocentro Coordenador - Salvador - Ladeira do Hospital Geral, s/n, Brotas, Complexo HGE, Hemoba e Cican. ", 
           "Hemocentro Vitória da Conquista - Rua D, Loteamento Cristo Rei,  Bairro Felicia."],

    "ce": ["Hemocentro Fortaleza - Av.José Bastos,3390,Rodolfo Teófilo .",
           "Hemocentro Juazeiro do Norte - Beata Maria de Araújo,30 - Romeirão.",
           "Hemocentro Sobral - Rua José Maria Alverne, 383 - Centro"],

    "df": ["Fundação Hemocentro de Brasília - Setor Médico Hospitalar Norte, quadra 3, conjunto A, bloco 3. Asa Norte, Brasília-DF",
         "Hospital de Base do Distrito Federal - SMHS - Área Especial, Q. 101 - Asa Sul, Brasília "],

    "es": ["Hemocentro do Estado do Espírito Santo (HEMOES) - Av. Mal. Campos, 1468 - Maruípe, Vitória",
          "Hemocentro Regional de Linhares - Av. João Felipe Calmom, 1305 - Centro, Linhares",
          "Hemocentro Regional de Colatina -  R. Cassiano Castelo, 276 - Centro"],

    "go": ["Banco de Sangue Modelo de Anápolis -  R. Washington de Carvalho, 155 - Centro, Anápolis ",
           "Hemocentro Catalão - . Osório Viêira Leite, 78 - São João, Catalão - GO",
           "Hemocentro Formosa - Av. Maestro João Luiz do Espírito Santo, 450 - Qd.B Lt. 11 - Parque Laguna II, Formosa",
           "Hemocentro Goiânia - Av. Anhanguera, 7.323 - St. Oeste - Goiânia"],

    "ma": ["HEMOMAR - Av. Valter Brito - Campo de Belem, Caxias",
         "Hemocentro Imperatriz - R. Coriolano Milhomem - Centro, Imperatriz ",
          "Hemocentro São Luís - Rua 5 de Janeiro, S/N Bairro: Jordoa."],

    "mt": ["Hemocentro Cuiabá - Rua 13 Junho, 1055 Centro Sul - Cuiabá",
         "Hemocentro Rondonópolis - Jardim Santa Marta, Rondonópolis"],

    "ms": ["Hemosul - Av. Fernando Corrêa da Costa, 1304 ",
         "Hemocentro Dourados -  rua Oliveira Marques, 2.535 - Jardim Central",
          "Hemocentro Três Lagoas - Rua Manoel Rodrigues Artez, 520, Colinos"],

    "mg": ["Hemocentro Belo Horizonte - Alameda Ezequiel Dias, 321 - Santa Efigênia, Belo Horizonte",
         "Hemonucleo de Divinópolis - Rua José Gabriel Medef, 221 - Padre Liberio, Divinópolis ",
         "Hemocentro Juiz de Fora - Rua Barão de Cataguases, S/N - Santa Helena, Juiz de Fora",
         "Hemocentro Montes Claros - Rua Urbino Viana, 640 - Vila Guilhermina - Montes Claros",
         "Hemocentro Uberlândia -  Av Levino De Souza, 1845 - Umuarama - Uberlandia"],

    "pa": ["Hemocentro Altamira - Av. Brigadeiro Eduardo Gomes - São Sebastiao, Altamira",
         "Fundação HEMOPA - Entrada pela Esquina da TvSerzedelo Correa com - Tv. Padre Eutíquio, R. dos Caripunas, 2109 - Batista Campos, Belém",
          "Hemocentro Marabá - Rod. Transamazônica, 251 - Amapá, Marabá",
           "Hemocentro Santarém - Avenida Frei Vicente, nº 696, entre as alamedas 30 e 31 (Aeroporto Velho)"],

    "pb": ["Hemocentro Cajazeiras - R. José Rodovalho de Alençar - Bairro Cristo Rei, Cajazeiras",
         "Hemocentro Campina Grande - R. Profa. Eutécia Vital Ribeiro, s/n - Catolé, Campina Grande",
          "Hemocentro João Pessoa - Av D Pedro Ii, 1119 - Centro - Joao Pessoa",
           "Hemocentro Patos - 05 de Agosto S/N Bairro Belo Horizonte - Bela Vista, Patos"],

    "pi": ["Hemopi (Fundação Hematológica do Piauí) - R. Primeiro de Maio, 235 - Centro (Sul), Teresina",
         "Hemonúcleo de Parnaíba - Praça Antônio Monte, s/n Centro ",
          "Hemonúcleo de Picos -  Av. São Sebastião, 2055. Bairro de Fátima"],

    "pr": ["Hemocentro Cascavel - Rua Avaetés, 370, Santo Onofre, Cascavel",
         "Hemepar - Travessa João Prosdócimo, 145 - Alto da XV - Curitiba",
          "Hemocentro Foz do Iguaçu - Avenida Gramado, 364, Vila A, Foz do Iguaçu",
           "Hemocentro Londrina - R. Cláudio Donizete Cavalieri, 156 - Jardim Taruma, Londrina",
            "Hemocentro Maringá - Av. Mandacaru, 1600 - Parque das Laranjeiras, Maringá"],

    "pe": ["Hemope (Fundação de Hematologia e Hemoterapia de Pernambuco) - R. Joaquim Nabuco, 171 - Graças, Recife",
         "Hemocentro Caruaru - Av Oswaldo Cruz, 0 - Mauricio De Nassau - Caruaru",
         "Hemocentro Garanhuns -  Av Goncalves Maia, 0 - Heliopolis - Garanhuns",
         "Hemocentro Petrolina - R. Pacífico da Luz, s/n - Centro, Petrolina",
         "Hemocentro Regional de Serra Talhada - R. Joaquim Godoy, 382 - Nossa Sra. da Penha"],

    "rj": ["Hemocentro Campos dos Goytacazes - Rua Rocha Leão, 2 Caju - Campos dos Goytacazes",
         "Hemocentro Niterói - R. Marquês de Paraná, 303 - Centro, Niterói ",
          "Hemorio - R. Frei Caneca, 8 · Centro"],

    "rs": ["Hemocentro Caxias do Sul - R Ernesto Alves, 2260 - Nossa Senhora De Lourdes ",
         "Hemocentro Passo Fundo - Av. 7 de Setembro, 1055 - Centro, Passo Fundo",
          "Hemocentro Pelotas - Av. Bento Gonçalves, 4569 - Fragata, Pelotas",
           "Hemocentro Porto Alegre - Av. Bento Gonçalves, 3722 - Partenon, Porto Alegre",
            "Hemocentro Santa Maria - Alameda Santiago do Chile, 1-59 - Nossa Sra. das Dores, Santa Maria"],

    "ro": ["Hemocentro Ji-Paraná - Rua Vilagran Cabrita, 1440 - Centro, Ji-Paraná",
         "Hemocentro Porto Velho - R. Benedito de Souza Brito - Industrial, Porto Velho"],

    "rn": ["Hemonorte - Av. Alm. Alexandrino de Alencar, 1800 - Tirol, Natal ",
         "Hemocentro Regional de Mossoró - R. Projetada, s/n - Aeroporto, Mossoró",
          "Hemocentro Regional de Caicó -  R. Dr. Renato Dantas, 455, Caicó"],

    "rr": ["Hemocentro Boa Vista - Av Brig Eduardo Gomes, Aeroporto - Boa Vista"],

    "sc": ["Hemocentro Blumenau - Rua Theodoro Holtrup, 40 - Vila Nova, Blumenau",
         "Hemocentro Chapecó - R. São Leopoldo, 391 D - Esplanada, Chapecó",
         "Hemocentro Criciúma - Av. Centenário, 1700 - Santa Barbara, Criciúma",
         "Hemocentro Florianópolis - Av. Prof. Othon Gama D'Eça, 756 - Centro, Florianópolis",
         "Hemocentro Joinville - Av. Getúlio Vargas, 198 - Anita Garibaldi, Joinville"],

    "sp": ["Hemocentro Campinas - Universidade Estadual de Campinas - R. Carlos Chagas, 480 - Cidade Universitária, Campinas",
         "Hemocentro Ribeirão Preto -  Rua Tenente Catão Roxo, 2501. Ribeirão Preto",
         "Hemocentro São José dos Campos -  Rua Antônio Saes, 425 ",
         "Hemocentro São Paulo Central - R. Marquês de Itu, 579 - Vila Buarque, São Paulo",
         "Hemocentro Sorocaba - Av. Comendador Pereira Inácio, 564 - Jardim Vergueiro, Sorocaba "],

    "se": ["HEMOSE -  R. Quinze, s/n - Capucho, Aracaju ",
         "Hemocentro Itabaiana - Unidade Lagarto: Centro Médico José Vieira Filho. Praça Filomeno Hora, número 52, centro "],

    "to": ["Hemocentro Araguaína - R Treze De Maio, 1336 - Setor Central - Araguaina",
          "Hemocentro Palmas - Av. NS-1, s/n - Lt. 1 - Centro, Palmas"]
};

let index = 0;
const items = document.querySelectorAll('.depo-box');
const totalItems = items.length;
const slidesToShow = 2;
const container = document.querySelector('.depoimentos-container');

const itemWidth = 100 / slidesToShow;
container.style.width = `${totalItems * itemWidth}%`;


function updateCarousel() {
    const offset = -index * itemWidth /  slidesToShow; 
    container.style.transform = `translateX(${offset}%)`;
}
    document.querySelector('.prev').addEventListener('click', () => {
       if (index === 0) {
           index = Math.ceil(totalItems / slidesToShow) -1;
       } else {
            index --;
       }
        
           updateCarousel();
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        if (index === Math.ceil(totalItems / slidesToShow) - 1) {
            index = 0;
        } else {
            index++;
        }
        updateCarousel();
    });

function nextSlide() {
    index++;
    if (index >= totalItems - slidesToShow + 1) {

        container.style.transition = 'none';
        index = 0;
        updateCarousel();

        setTimeout(() => {
            container.style.transition = 'transform 0.5s ease';
            updateCarousel();
        }, 20);
    } else {
        updateCarousel();
    }
}

document.getElementById('depoimentoForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    let isValid = true;
    const mensagensErro = [];
    
    const nome = document.getElementById('nome').value.trim();
    const tipo = document.getElementById('tipo').value;
    const estado = document.getElementById('estado').value.trim();
    const email = document.getElementById('email').value.trim();
    const depoimento = document.getElementById('depoimento').value.trim();
    const imagem = document.getElementById('imagem').files[0];

    if (!nome) {
        mensagensErro.push("Nome é obrigatório.");
        isValid = false;
    }
    if (!tipo) {
        mensagensErro.push("Tipo (donor/recipient) é obrigatório.");
        isValid = false;
    }
    
    if (!email) {
        mensagensErro.push("Email é obrigatório.");
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mensagensErro.push("Email inválido.");
            isValid = false;
        }
    }
    if (!depoimento) {
        mensagensErro.push("Depoimento é obrigatório.");
        isValid = false;
    }

    const mensagemErro = document.getElementById('mensagemErro');
    if (!isValid) {
        mensagemErro.innerHTML = mensagensErro.join("<br>");
        mensagemErro.style.display = 'block';
    } else {
        mensagemErro.style.display = 'none';
        alert('Formulário enviado com sucesso!');
        
    }
});

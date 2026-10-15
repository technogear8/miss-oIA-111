const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao sair da escola, você encontra uma nova tecnologia: um chat que responde a dúvidas e também gera imagens e áudios muito realistas. Qual é seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Você decide observar a IA com cautela e pensar nos riscos que ela pode trazer."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Você fica animado com as possibilidades que a IA pode oferecer."
            }
        ]
    },
    {
        enunciado: "Sua professora propõe um trabalho sobre o uso da tecnologia em sala de aula. Qual atitude você toma?",
        alternativas: [
            {
                texto: "Uso uma ferramenta de busca com IA para encontrar informações e esclarecer minhas dúvidas.",
                afirmacao: "Na pesquisa, você usa a IA como apoio para encontrar informações e entender melhor o tema."
            },
            {
                texto: "Faço pesquisas na internet, converso com colegas e uso meus próprios conhecimentos.",
                afirmacao: "Na pesquisa, você combina diferentes fontes e suas próprias ideias para desenvolver o trabalho."
            }
        ]
    },
    {
        enunciado: "Durante um debate, a turma conversa sobre como a IA pode afetar os empregos no futuro. O que você pensa?",
        alternativas: [
            {
                texto: "É importante proteger os trabalhadores que podem perder seus empregos.",
                afirmacao: "Você defende que os trabalhadores sejam protegidos diante das mudanças causadas pela tecnologia."
            },
            {
                texto: "A IA também pode criar empregos e ajudar as pessoas a desenvolver novas habilidades.",
                afirmacao: "Você acredita que a IA pode abrir oportunidades e ajudar as pessoas a desenvolver novas habilidades."
            }
        ]
    },
    {
        enunciado: "A professora pede que você crie uma imagem que represente o que pensa sobre a IA. O que você faz?",
        alternativas: [
            {
                texto: "Crio a imagem usando uma ferramenta de desenho, como o Paint.",
                afirmacao: "Para expressar sua ideia, você escolhe criar a imagem com uma ferramenta de desenho."
            },
            {
                texto: "Crio a imagem usando um gerador de imagens com IA.",
                afirmacao: "Para expressar sua ideia, você experimenta criar uma imagem com ajuda da IA."
            }
        ]
    },
    {
        enunciado: "Seu grupo de Biologia está atrasado, e um colega entrega um texto feito com IA, sem revisar. O que você faz?",
        alternativas: [
            {
                texto: "Reviso o texto, confiro as informações e acrescento as ideias do grupo.",
                afirmacao: "No trabalho em grupo, você revisa o conteúdo e acrescenta as ideias dos colegas."
            },
            {
                texto: "Acho que o texto pode ser usado como está, pois alguém já escreveu os comandos para a IA.",
                afirmacao: "No trabalho em grupo, você considera que o texto gerado pela IA pode ser aproveitado."
            }
        ]
    }
];

let perguntaAtual = 0;
const escolhas = [];

function mostrarPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostrarResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];

    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.replaceChildren();

    pergunta.alternativas.forEach((alternativa) => {
        const botao = document.createElement("button");

        botao.type = "button";
        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            escolhas.push(alternativa.afirmacao);
            perguntaAtual++;
            mostrarPergunta();
        });

        caixaAlternativas.appendChild(botao);
    });
}

function mostrarResultado() {
    caixaPerguntas.textContent = "Em 2049, o futuro da IA também foi construído pelas suas escolhas:";
    caixaAlternativas.replaceChildren();

    textoResultado.textContent = escolhas.join(" ");
    caixaResultado.style.display = "block";
}

mostrarPergunta();
function submitTest() {
    var respostas = [];
    var sections = document.querySelectorAll('.question');
    var allAnswered = true

    sections.forEach(function(section) {
        var resposta = section.querySelector('input[type="radio"]:checked');
        if (resposta) {
            respostas.push(resposta.value);
        } else {
           // alert("Por favor, responda todas as perguntas para continuar.");
           allAnswered = false;
            return;
        }
    });

    //Faz aparecer o alerta 1 vez
    if (!allAnswered) {
        alert("Por favor, responda todas as perguntas para continuar.");
        return;
    }

    if (respostas.length === sections.length) {
        var countHumanas = 0;
        var countExatas = 0;

        respostas.forEach(function(resposta) {
            if (resposta === "h" ) {
                countHumanas++;
            } else if (resposta === "e") {
                countExatas++;
            }
        });

        // Calcular porcentagem
        var totalQuestions = sections.length;
        var porcentagemHumanas = (countHumanas / totalQuestions) * 100;
        var porcentagemExatas = (countExatas / totalQuestions) * 100;

        // Formatar para exibir uma mensagem
        var resultado = "";
        if (porcentagemHumanas > porcentagemExatas) {
            resultado = "Você parece ter afinidade com áreas de Humanas.<br><br>Você é de humanas!<br><br>Pessoas com ese perfil geralmente tem interese com temas que envolvem compreensão do comportameno humano, a cultura e a sociedade. Elas se destacam em áreas como Piscologia, Direito, Comunicação, Historia, Filosoia e Ciencias sociais. Gostam de refletir sobre temas variados e tem uma boa capacidade de argumentação e persuasão.";
        } else if (porcentagemExatas > porcentagemHumanas) {
            resultado = "Você parece ter afinidade com áreas de Exatas.<br><br>Você é de Exatas!<br><br>Pessoas com ese perfil tem uma inclinação para resolver problemaspráticos e logicos elas se destacam em áreascomo Engenharia, Matematica, Fisica, Economia, Informatica. Tendem a ser metodicas, analiticas e gostam de desafios que envolvem raciocinio logico e precisão";
        } else {
            resultado = "Você possui características de ambas as áreas. Considere explorar mais sobre cada uma delas.";
        }

        // Exibir o resultado na div com id "resultado"
        var resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '<h2>Resultado do Teste Vocacional</h2>' + '<p>' + resultado + '</p>' +
                                  '<p>Porcentagem de afinidade com Humanas: ' + porcentagemHumanas.toFixed(2) + '%</p>' +
                                  '<p>Porcentagem de afinidade com Exatas: ' + porcentagemExatas.toFixed(2) + '%</p>';
    }
}

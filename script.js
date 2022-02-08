var fsList = document.querySelectorAll(".multiple-field"); //querySelectorall - buscar todos os fieldset que tem a class indicada. No inspecionar, colocar a variavel fsList e vai buscar o nodelist de quantos fieldset tem no código.

for ( var i = 0; i < fsList.length; i++) {
    initMultipleFieldSet(fsList[i]);
}

function initMultipleFieldSet(fs) {  //função para adiconar um butão no campo telefone
    var addButton = document.createElement("button"); //adiconar botão com createElement
    addButton.textContent = "Adicionar"; 
    addButton.type = "button"; //mudar o tipo do botão, pois, o comportamento que estava era que ao clicar em "adicionar" não criava um novo campo para preencher.

    fs.appendChild(addButton); //adicionar um elemento na página, no caso, o botão, o addbutton passar a ser filho do fs, caso não apareça nada na página é por que tem que fazer o elemento 'for' acima.

    var firstInput = fs.querySelector("input"); //seleciona o primeiro input, objetivo é passar/preservar a prorpriedade name e type para o novo newInput abaixo

    addButton.addEventListener("click", function(){   //adicionar mais campos 
        var div = document.createElement("div"); // a var div foi criada para que ao clicar no botão "adiconar" os inputs(campos) possam fazer a quebra de linha, um abaixo do outro.
        var newInput = document.createElement("input"); //onde vai adicionar esse newInput? Ai que adicionamos o fs(fieldSet) acima
        newInput.name = firstInput.name; // preservando/passando as propriedades do input para o newInput
        newInput.type = firstInput.type; 
    
        var deleteButton = document.createElement("button");  //criado para deletar o campos inputs que foram criados
        deleteButton.textContent = "Excluir"; 
        deleteButton.type = "button";

        deleteButton.addEventListener("click", function() {  // fazer com que o botão excluir tenha uma ação de remover os inputs
            div.remove();  // o div pq engloba o NewInput e o deleteButton como visto abaixo e com isso remove todos os campos. Também pode ser feito essa remoção com:
            // fs.removeChild(div); pega o elemento pai (fs) e o elemento filho (div)
        });

        div.appendChild(newInput);
        div.appendChild(deleteButton);

        fs.insertBefore(div, addButton);  //caso: os campos estão sendo criado depois do botão adiconar. Trocar o elemento appenChild pelo insertBefore, essa função vai receber o elemento que queira adiconar e um outro elemento que vai ser usuado como referencia e vai ser inserido antes dele, nesse caso queros iserir os campos(input) antes do botão de adiconar.
    });  
}  //adicionar um evento(ação) ao botão, no caso, ao  clicar no botão adicionar, deve adicionar outro campo para preenchimento. A declaração o "click" é o evento que a função deseja capturar.  Foi declarado uma função inline(função anonima).

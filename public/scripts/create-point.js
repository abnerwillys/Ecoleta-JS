// document //o JS esta dizendo ao documento
//     .querySelector("select[name=uf]") //Função para pegar procurar e pegar o elemento. Nesse caso o campo de estado (select = uf)
//     .addEventListener("change", () => {
//         console.log("Mudei")
//     } ) // Ouvidor de evento fica ativo (quando acontece algo na pagina). Existe inumeros eventos no JS. Nesse caso é o "change"
//     //o Ouvidor de evento é uma função que tem 2 parametros. 1ºoque deve ouvir, e 2º a ação que executa se ouvir oque ficou definido.

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome") // Funciona como um request pra ir na url e buscar algo(pode vir com dado ou sem nada) e retornar oque buscar.
    //o .then é pra quando volta com algum dado na mao.
    .then( res => res.json() ) //Versao mais abreviada de .then( (res) => { return res.json() })  com o mesmo efeito
    //a resposta é transformada em json (ainda nao entendi oq é isso)
    .then( states => {

        for( const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }        
    })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true


    fetch(url)
    .then( res => res.json() ) //Versao mais abreviada de .then( (res) => { return res.json() })  com o mesmo efeito
    .then( cities => {

        for( const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


//Itens de Coleta
//Pegar todos os "li's"
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items")

let selectedItems = [] //usou let pois vai ser variavel

function handleSelectedItem (event) {
    const itemLi = event.target //Essa variavel pega qual o LI que foi clicado
    //adicionar ou remover uma classe com JS com o comando .classList.toggle(). Se tiver ele tira, se nao colca.
    //se colocar .classList.add() apenas adiciona
    //se colocar .classList.remove() apenas remove
    itemLi.classList.toggle("selected") //de acordo com a variavel acima ele adiciona ou remove a classe selected

    const itemId = itemLi.dataset.id //ao clicar no item ele pega o ID desse item(definido no html)

    console.log("ITEM ID: ", itemId)

    // 1ºtem que verificar se existe itens selecionados, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( function (item) {
        const itemFound = item == itemId  //verifica se retorna true ou false
        return itemFound
    })
    //as 3 linhas acima poderiam ser escrita apenas pelo seguinte código, porem por ser iniciante deixou mais detalhado.
    //const alreadySelected = selectedItems.findIndex( item => item == itemId )

    // Se ja estiver selecionado, tirar a seleção
    if ( alreadySelected >= 0 ) {
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => { 
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
    } else { 
        // Se nao estiver selecionado, 
        // adicionar à seleção
        selectedItems.push(itemId) // push insere o elemento em um array
    }

    console.log("selectedItems: ", selectedItems)

    // atualizar o campo escondido com os itens selecionados
    // document.querySelector("input[name=items") ---- Essa linha na vdd esta acima do let de itens.
    // deixou aqui apenas para contextuar.
    collectedItems.value = selectedItems
}
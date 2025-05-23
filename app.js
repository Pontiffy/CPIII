const form = document.getElementById("form")
const inputProduto = document.getElementById("produtoresult")
const inputPreco = document.getElementById("precoresult")
const inputCategoria = document.getElementById("categoria")
const btn = document.getElementById("btn")
const msgErro = document.getElementById("msgErro")
const carrinho = document.getElementById("carrinho")

btn.addEventListener("click", function (event) {
    event.preventDefault()
    let produto = inputProduto.value
    let preco = inputPreco.value
    let categoria = inputCategoria.value

    if (produto === "" || preco === "") {
        msgErro.textContent = "Preencha os campos vazios."
        msgErro.style.color = "#ff0000"
        return
    }
    else if (Number(preco) <= 0) {
        msgErro.textContent = "O preço não pode ser abaixo de 0!"
        msgErro.style.color = "#ff0000"
        return
    }
    msgErro.textContent = ""
    const getCarrinho = document.createElement("div")
    getCarrinho.innerHTML = `
    <p>Categoria: ${categoria} </p>
    <p>Produto: ${produto} </p>
    <p>Preco: ${preco} </p>
    `
    if (categoria === "Tecnologia") {
        getCarrinho.style.fontWeight = "bold"
    }
    else if (categoria === "Alimentos") {
        getCarrinho.style.backgroundColor = "yellow"
    }

    carrinho.append(getCarrinho)
    form.reset()
})

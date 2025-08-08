// cria referência ao form e ao elemento H3
const frm = document.querySelector("form")
const resp = document.querySelector (h3)

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value  //obtém o nome digitado no form
    resp.innerText = 'Olá, ${Davi}' // exibe a resposta do programa
    e.preventDefault() // evita envio do from
})
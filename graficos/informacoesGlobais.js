const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"
async function visualizarInformacoesGlobais(){
    const rest= await fetch(url)
    const dados= await rest.json()
    console.log(dados);
}

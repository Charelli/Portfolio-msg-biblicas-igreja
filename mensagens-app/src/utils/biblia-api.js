function abrirReferenciaBiblica(referencia) {
    const baseUrl = "https://www.bibliaonline.com.br/";
    const url = `${baseUrl}${referencia}`;
    window.open(url, "_blank");
}

function obterVersiculo(referencia) {
    // Esta função pode ser implementada para buscar versículos de uma API de Bíblia online
    // Exemplo de implementação fictícia:
    return fetch(`https://api.biblia.com/v1/bible/content/ACF.json?passage=${referencia}&key=YOUR_API_KEY`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar versículo');
            }
            return response.json();
        })
        .then(data => data.text)
        .catch(error => console.error('Erro:', error));
}

export { abrirReferenciaBiblica, obterVersiculo };
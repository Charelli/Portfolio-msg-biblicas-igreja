function exibirDetalhes(mensagem) {
    const detalhesContainer = document.getElementById('detalhes-container');
    detalhesContainer.innerHTML = `
        <h2>${mensagem.titulo}</h2>
        <p><strong>Pregador:</strong> ${mensagem.pregador}</p>
        <p><strong>Data:</strong> ${mensagem.data}</p>
        <p><strong>Referência:</strong> <a href="${mensagem.referencia}" target="_blank">${mensagem.referencia}</a></p>
        <p><strong>Texto da Mensagem:</strong></p>
        <p>${mensagem.texto}</p>
    `;
}

export default exibirDetalhes;
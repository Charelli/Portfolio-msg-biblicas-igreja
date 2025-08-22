const mensagens = [];

function cadastrarMensagem(titulo, referencia, tema, pregador, data, texto) {
    const mensagem = {
        id: mensagens.length + 1,
        titulo,
        referencia,
        tema,
        pregador,
        data,
        texto
    };
    mensagens.push(mensagem);
}

function buscarMensagens(termo) {
    return mensagens.filter(mensagem => 
        mensagem.titulo.includes(termo) || 
        mensagem.pregador.includes(termo || 
        mensagem.data.includes(termo) || 
        mensagem.referencia.includes(termo)
    ));
}

function listarMensagens() {
    return mensagens.sort((a, b) => new Date(b.data) - new Date(a.data));
}

function filtrarPorBiblia(livro) {
    return mensagens.filter(mensagem => mensagem.referencia.includes(livro));
}

function obterDetalhesMensagem(id) {
    return mensagens.find(mensagem => mensagem.id === id);
}

// Expor funções para uso em outros módulos
export { cadastrarMensagem, buscarMensagens, listarMensagens, filtrarPorBiblia, obterDetalhesMensagem };
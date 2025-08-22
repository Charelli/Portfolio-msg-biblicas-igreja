function buscaMensagens(mensagens, termo) {
    return mensagens.filter(mensagem => 
        mensagem.titulo.toLowerCase().includes(termo.toLowerCase()) ||
        mensagem.pregador.toLowerCase().includes(termo.toLowerCase()) ||
        mensagem.data.includes(termo) ||
        mensagem.versiculo.toLowerCase().includes(termo.toLowerCase())
    );
}

function Busca({ mensagens, onBusca }) {
    let termoBusca = '';

    const handleInputChange = (event) => {
        termoBusca = event.target.value;
    };

    const handleSearch = () => {
        const resultados = buscaMensagens(mensagens, termoBusca);
        onBusca(resultados);
    };

    return `
        <div class="busca">
            <input type="text" placeholder="Buscar mensagens..." oninput="handleInputChange(event)" />
            <button onclick="handleSearch()">Buscar</button>
        </div>
    `;
}

export default Busca;
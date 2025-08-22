function Lista({ mensagens, onSelect }) {
    return (
        <div className="lista-mensagens">
            <h2>Lista de Mensagens</h2>
            <ul>
                {mensagens.map((mensagem, index) => (
                    <li key={index} onClick={() => onSelect(mensagem)}>
                        <h3>{mensagem.titulo}</h3>
                        <p>{mensagem.data}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Lista;
function Cadastro({ onCadastrar }) {
    const [titulo, setTitulo] = React.useState('');
    const [referencia, setReferencia] = React.useState('');
    const [erro, setErro] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !referencia) {
            setErro('Título e referência bíblica são obrigatórios.');
            return;
        }
        setErro('');
        onCadastrar({ titulo, referencia });
        setTitulo('');
        setReferencia('');
    };

    return (
        <div>
            <h2>Cadastro de Mensagens</h2>
            {erro && <p style={{ color: 'red' }}>{erro}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Referência Bíblica:</label>
                    <input
                        type="text"
                        value={referencia}
                        onChange={(e) => setReferencia(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default Cadastro;
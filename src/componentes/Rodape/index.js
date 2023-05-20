import './Rodape.css'

const Rodape = () => {
    return(
        <section className='rodape'>
            <div className='item media'>
                <img src='./imagens/fb.png' alt='facebook' />
                <img src='./imagens/tw.png' alt='twitter' />
                <img src='./imagens/ig.png' alt='instagram' />
            </div>
            <div className='item logo'>
                <img src='./imagens/logo.png' alt='logo' />
            </div>
            <div className='item'>
                <p>Desenvolvido por Alura.</p>
            </div>
        </section>
    )
}

export default Rodape
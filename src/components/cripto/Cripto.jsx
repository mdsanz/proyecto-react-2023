import { Link } from 'react-router-dom'
import './Cripto.css'

const Cripto = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {
    return (
        <div className="cripto">
            <h3>{name}</h3>
            <div className="info">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">Código: </span>{symbol}</p>
                <p>
                    <span className="label">Variación 24hrs: </span>
                    <span className={changePercent24Hr > 0 ? "positivo" : "negativo"}>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/criptomonedas/${id}`} >Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto
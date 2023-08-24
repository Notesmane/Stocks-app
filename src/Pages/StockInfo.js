import stocks from '../data';
import { useParams } from 'react-router-dom';

export default function StockInfo() { 
    const params = useParams()
    const {symbol} = params

    const findStock = () => {
        for (let i = 0; i < stocks.length; i++) {
            let currentStock = null; 
            if(stocks[i].symbol === symbol) {
                currentStock = stocks[i]
                console.log(currentStock);
                return currentStock;
            } 
        } 
    };

    const currentStock = findStock()

    return (
        <div>
            <h3>{currentStock.name}</h3>
            <h3>{currentStock.symbol}</h3>
            <h3>{currentStock.lastPrice}</h3>
            <h3>{currentStock.change}</h3>
            <h3>{currentStock.high}</h3>
            <h3>{currentStock.low}</h3>
        </div>
    )
}
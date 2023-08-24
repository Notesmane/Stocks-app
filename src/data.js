import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Data (props) {
    const [stock, setStock] = useState(null);

const params = useParams();
const {symbol} = params;

const getStock = async() => {
    try {
        const res = await fetch(); //! need to add something here in the ()
        const data = await res.json();
        setStock(data);        
    } catch (e) {
        console.log('ERROR FETCHING DATA', e);
    }
}

useEffect(() => {
    getStock();
}, []);

const stocks = [
    {name: "Apple Inc.", symbol: "AAPL", lastPrice: 140.64, change: -0.280000000000001, high: 141.74, low: 140.35, open: 141.5},
    {name: "Microsoft Corporation", symbol: "MSFT", lastPrice: 64.98, change: 0.109999999999999, high: 65.45, low: 64.76, open: 65.12},
    {name: "Alphabet Inc.", symbol: "GOOGL", lastPrice: 835.14, change: -4.50999999999999, high: 844, low: 829.1, open: 842},
    {name: "Facebook, Inc.", symbol: "FB", lastPrice: 140.34, change: 0.810000000000002, high: 141.0244, low: 139.76, open: 140.08},
    {name: "Oracle Corporation", symbol: "ORCL", lastPrice: 44.65, change: -0.300000000000004, high: 45.09, low: 44.575, open: 44.91},
    {name: "Intel Corporation", symbol: "INTL", lastPrice: 36.16, change: -0.370000000000005, high: 36.78, low: 36.125, open: 36.58}
  ];
  

const loaded = () => {
    return (
        <div>
            <h1>
                {stocks.name} / {stocks.symbol}
            </h1>
            <h3>
                last price: {stocks.lastPrice}
            </h3>
            <h3>
                change: {stocks.change}
            </h3>
            <h3>
                high: {stocks.high}
            </h3>
            <h3>
                low: {stocks.low}
            </h3>
            <h3>
                open: {stocks.open}
            </h3>
        </div>
    );
};

const loading = () => {
    return <h1> Loading... </h1>;
};

    return stock && stock.lastPrice ? loaded() : loading();

};
import { Link } from 'react-router-dom';
import stocks from '../data';

export default function Stocks (props) {


      return (
        <div className='stockNames'>
            {stocks.map((stock, index) => {
                // const { name, symbol } = stock;

                return (                // below here is the useParams
                    <Link key={index} to={`/stocks/${stock.symbol}`}>
                        <h2>{stock.name}</h2>
                    </Link>
                );
            })}
        </div>
      );
};

console.log(stocks);
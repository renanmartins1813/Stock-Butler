import getTimeSeriesIntraday from "./utils/getTimeSeriesIntraday";
import getQuoteEndpoint from "./utils/getQuoteEndpoint";
import getCurrencyExchangeRate from "./utils/getCurrencyExchangeRate";
export default function App() {
  async function teste(){
    await console.log(getTimeSeriesIntraday('AAPL', '1min'));
  }

  async function teste2(){
    await console.log(getQuoteEndpoint('AAPL'));
  }

  async function teste3(){
    await console.log(getCurrencyExchangeRate('USD', 'JPY'));
  }
  
  return (
    <h1>
      Olá Stocks
    </h1>
  )
}

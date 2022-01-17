import getTimeSeriesIntraday from "./utils/getTimeSeriesIntraday";
import getQuoteEndpoint from "./utils/getQuoteEndpoint";
import getCurrencyExchangeRate from "./utils/getCurrencyExchangeRate";
import setCookie from "./utils/setCookie";
import getCookie from "./utils/getCookie";
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
  
  setCookie('teste','quie');
  const cookies = getCookie();
  console.log(cookies);
  console.log(cookies.cuu);
  return (
    <h1>
      Olá Stocks
    </h1>
  )
}

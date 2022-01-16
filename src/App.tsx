import getTimeSeriesIntraday from "./utils/getTimeSeriesIntraday";
import getQuoteEndpoint from "./utils/getQuoteEndpoint";
import getCurrencyExchangeRate from "./utils/getCurrencyExchangeRate";
import Firstload from '../src/ui-components/Firstload';
import Appshell from '../src/ui-components/Appshell';
import Container from '../src/ui-components/Container';

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
    <>
      <Appshell>
        <Container>
            <h1>Trending Stock</h1>
        </Container>

        <Container>
            <h1>Your Portfolio</h1>
        </Container>

        <Container>
            <h1>Stock List</h1>
        </Container>
      </Appshell>
      
    </>
  )
}

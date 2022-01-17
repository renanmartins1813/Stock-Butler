import getTimeSeriesIntraday from "./utils/getTimeSeriesIntraday";
import getQuoteEndpoint from "./utils/getQuoteEndpoint";
import getCurrencyExchangeRate from "./utils/getCurrencyExchangeRate";
import Firstload from "../src/ui-components/Firstload";
import Appshell from "../src/ui-components/Appshell";
import Container from "../src/ui-components/Container";
import { useEffect, useState } from "react";

import setCookie from "./utils/setCookie";
import getCookie from "./utils/getCookie";
import deleteCookie from "./utils/deleteCookie";
export default function App() {

  const [loading, setLoading] = useState(true)

  async function teste() {
    return await getTimeSeriesIntraday("AAPL", "1min")
  }

  async function teste2() {
    console.log(await getQuoteEndpoint("AAPL"));
  }

  async function teste3() {
    console.log(await getCurrencyExchangeRate("USD", "JPY"));
  }

  useEffect(()=>{
    teste()
    .then(()=> setLoading(false))
    .catch(err => console.log(err.message))
  }, [])

  
  setCookie('teste','TESTANDO');
  let cookies: any = getCookie();
  console.log(cookies);
  console.log(cookies?.teste, '| cookie.teste ao lado');
  deleteCookie('teste');
  cookies = getCookie();
  console.log(cookies?.teste, '| cookie.teste apos deleteCookie() ao lado');
  return (
    <>
      {loading? <Firstload/> : ''}
      <Appshell>
        <Container
          title={"Trending Stock"}
          icon={"bi bi-bar-chart-line-fill"}
          subinfoIcon={"up"}
          subinfoText={"AAPL 271,673 (+3,12%)"}
          main={'Appl5, 304, 902'}
        ></Container>

        <Container
          title={"Your Portfolio"}
          icon={"bi bi-person-circle"}
        ></Container>

        <Container title={"Stock List"}></Container>
      </Appshell>
    </>
  );
}

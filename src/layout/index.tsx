import Home from "./Home/Home";
import Appbar from './Appbar/Appbar';
import { useFetchStocksQuery } from "../store/stocks-slice";

export default function Layout() {

  const { data, isFetching } = useFetchStocksQuery({interval:'5min', symbol: 'IBM'});

  return (
    <>
      <Home />
      <Appbar />
    </>
  );
}

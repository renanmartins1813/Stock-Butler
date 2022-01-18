import { useEffect, useState } from "react";

import getTimeSeriesIntraday from "./utils/getTimeSeriesIntraday";

import Firstload from "../src/ui-components/Firstload";
import Appshell from "../src/ui-components/Appshell";
import Container from "../src/ui-components/Container";
import Graph from "./ui-components/Graph";


const data = [
  { label: "A", x: 0, y: 0 },
  { label: "B", x: 1, y: 400 },
  { label: "C", x: 2, y: 300 },
  { label: "D", x: 3, y: 100 },
  { label: "E", x: 4, y: 400 },
  { label: "F", x: 5, y: 500 },
  { label: "G", x: 6, y: 400 }
];


export default function App() {

  const [loading, setLoading] = useState(true)

  async function teste() {
    return await getTimeSeriesIntraday("AAPL", "1min")
  }

  useEffect(()=>{
    teste()
    .then(()=> setLoading(false))
    .catch(err => console.log(err.message))
  }, [])

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


        <Container title={"Stock List"}>
            <Graph
              width={500}
              height={300}
              data={data}
              horizontalGuides={5}
              precision={2}
              verticalGuides={5}
            />
        </Container>
        
        <Container
          title={"Your Portfolio"}
          icon={"bi bi-person-circle"}
        >
          <List>
              
          </List>
        </Container>

      </Appshell>
    </>
  );
}

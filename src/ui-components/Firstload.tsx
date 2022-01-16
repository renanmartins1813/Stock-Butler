import { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";

let color = ["#d6777b", "#76e6b0"];

export default function Loading() {
  const [lineColor, setLineColor] = useState(1);

  const [points, setPoints] = useState([
    [5, 50],
    [80, 120],
    [150, 0],
    [200, 10],
  ]);

  useInterval(() => {
    setLineColor(lineColor ? 0 : 1);
    setPoints([
      [5, 50],
      [80, Math.floor(Math.random() * 50) + 100],
      [150, Math.floor(Math.random() * 120)],
      [200, Math.floor(Math.random() * 50) + 100],
    ]);
    console.log("mudou");
  }, 2000);

  return (
    <div className="firstloading">
      <svg height={200} width={200}>
        <defs>
          <pattern
            id="smallGrid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 8 0 L 0 0 0 8"
              fill="none"
              stroke="gray"
              stroke-width="0.4"
            />
          </pattern>
          <pattern
            id="grid"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <rect width="200" height="200" fill="url(#smallGrid)" />
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="gray"
              style={{ strokeWidth: 1 }}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
        <line
          x1={0}
          y1={0}
          x2={0}
          y2={360}
          style={{ stroke: "#e1dfec", strokeWidth: 10 }}
        />
        <line
          x1={0}
          y1={200}
          x2={200}
          y2={200}
          style={{ stroke: "#e1dfec", strokeWidth: 10 }}
        />
        <polyline
          className="firstloading__polyline"
          points={points.map((p) => p.join(",")).join(" ")}
          style={{ stroke: color[lineColor], strokeWidth: 2 }}
        />
      </svg>
      <h1 className="firstloading__text">LOADING DATA</h1>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

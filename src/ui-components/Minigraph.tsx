import { Fragment } from "react";

export default function Minigraph({ data, height, width, horizontalGuides, verticalGuides, precision}) {
    //Setando valor máximo de x e y no gráfico
    const maxiX = Math.max(...data.map( el => el.x ));
    const maxiY = Math.max(...data.map( el => el.y ));

    // setando precisão de ponto flutuante 
    const digits = maxiY.toFixed(precision).length + 1;

    //tamananos
    const fontSize = width/50;
    const padding = (fontSize + digits) * 3;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;

    //pontos do polilyne
    const points = data.map((v) => {
        const x = (v.x / maxiX) * graphWidth + padding;
        const y = graphHeight - (v.y / maxiY ) * graphHeight + padding;
        return `${x},${y}`
    }).join(' ');

    //indicadores de plano x e y
    const Axis = ({points}) => <polyline fill="none" stroke='#ccc' strokeWidth="2" points={points} />
    const XAxis = () => <Axis points={`${padding},${height - padding} ${width - padding},${height - padding}`} />
    const YAxis = () => <Axis points={`${padding},${padding} ${padding},${height - padding}`} />
    

    //guias função

    function Guides(orientation : 'h' | 'v'){
        const guideQuantity = (orientation == 'h'? horizontalGuides : verticalGuides) || data.length - 1 ;

        const start = padding;
        const end = (orientation == 'h' ? width : height) - padding;

        return new Array(guideQuantity).fill(0).map((_, i) => {
            const ratio = (i + 1) / guideQuantity;
            const coordinate = orientation == 'h' ? graphHeight - graphHeight * ratio + padding : padding + ratio * (graphWidth);
            console.log(coordinate)
            const points = orientation == 'h'? `${start},${coordinate} ${end},${coordinate}` :  `${coordinate},${start} ${coordinate},${end}` ;
            return (
                <>
                    <polyline
                        fill="none"
                        stroke={"#ccc"}
                        strokeWidth=".5"
                        points={points}
                    />
                </>
            )
        })
    }


    //labels x

    //labels y
    


    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
        >
            <XAxis />

            <YAxis />

            {Guides('v')}
            {Guides('h')}
            
                        
            <polyline
                fill='none'
                stroke="green"
                strokeWidth={5}
                points={points}
            />
        </svg>
    )
}
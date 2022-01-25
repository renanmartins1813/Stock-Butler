export default function Minigraph({ data, height, width}) {
    const maxiX = Math.max(...data.map( el => el.x ));
    const maxiY = Math.max(...data.map( el => el.y ));
    const fontSize = width/50;
    const padding = (fontSize) * 3;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;
    
    const points = data.map((v) => {
        const x = (v.x / maxiX) * graphWidth + padding;
        const y = graphHeight - (v.y / maxiY ) * graphHeight + padding;
        return `${x},${y}`
    }).join(' ');

    return(
        <svg width={width} height={height} className="minigraph">
            <polyline
                fill='none'
                stroke="#76e6b0"
                className="minigraph"
                strokeWidth={2}
                points={points}
            />
        </svg>
    )
}
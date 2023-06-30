let areaCircleCalculate = (ray) => {
    let area = Math.PI * Math.pow(ray,2)
    console.log(`Para pi valendo:${Math.PI.toFixed(2)} é raio:${ray}, a área do ciculo é :${area.toFixed(2)}m2`)
    return area
} 
areaCircleCalculate(2)
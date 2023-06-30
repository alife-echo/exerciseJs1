let calculateVolume = (ray) =>{
    let volume = (4 * Math.PI * Math.pow(ray,3))/3
    console.log(`Para pi:${Math.PI.toFixed(2)} e raio ${ray}, o volume é ${volume.toFixed(2)}m3`)
    return volume
}
calculateVolume(3)
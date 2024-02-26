export function App () {

    var landId = 4433;
    var land1 = landId + 1;
    var land2 = landId + 2;
    var land3 = landId + 3;

    return (

       <div className="lands-wrapper" style={{ display: 'flex', color: '#fff'}}>
        <div id="div" className="lands-container">
        <iframe width= "920px" height="363px" src={`https://play.pixels.xyz/pixels/share/${landId}`}></iframe>
        <iframe width= "920px" height="363px" src={`https://play.pixels.xyz/pixels/share/${land1}`}></iframe>
        <iframe width= "920px" height="363px" src={`https://play.pixels.xyz/pixels/share/${land2}`}></iframe>
        <iframe width= "920px" height="363px" src={`https://play.pixels.xyz/pixels/share/${land3}`}></iframe>
        
        </div>
       </div> 
    )
}
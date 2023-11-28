

export default function Zips({zips}) {

    

  return (
    <div id="zips">
        {zips.map((zip, i) => {
            return (
                <div className="zip" key={`zip-${i}-${Math.random()}`}>
                    <h4>Zip Code: {zip["post code"]}</h4>
                    <div>Latitude: {zip.latitude}</div>
                    <div>Longitude: {zip.longitude}</div>
                    <div>City: {zip["place name"]}</div>
                </div>
            )
        })}
    </div>
  )
}
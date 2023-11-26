export default function SearchResults({results}) {
    return (
        <>
            <div className="loc">{results.location}</div>
            <div className="lat">{results.latitude||"N/A"}</div>
            <div className="lng">{results.longitude||"N/A"}</div>
        </>
    )
}
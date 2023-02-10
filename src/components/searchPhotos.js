import React,{ useState } from "react";
import Unsplash, { tojson } from "unsplash";
const unsplash = new Unsplash({
    accessKey: "T5EEtt8zvPnKsPVE1wbpN-yLDTsC4I0xW4_gHWoC0F4",
})

 function SearchPhotos() {
    const[query, setQuery] = useState("");
    const[pics, setPics] = useState([]);
    console.log(query);

    
    const searchPhotos = async (e)=> {
        e.preventDefault();
        unsplash.search
        .photos(query, 1, 20)
        .then(tojson)
        .then((json)=> {
            console.log(json)
        })
        console.log("Submitting the Form")
    }
    return(
        <>
        <form className="form" onSubmit={searchPhotos}>
            <label className="label" htmlFor="query">
            </label>
            <input
            type="text"
            name="query"
            className="input"
            placeholder="search for the images"
            value={query}
            onChange={(e)=> setQuery(e.target.value)}
            />
            <button type="submit" className="button">search</button>
        </form>
        <div className="card-list">
            {
            pics.map((pic)=><div className="card">
                <img
                className="card--image"
                // alt={pic.alt.}x
                ></img>
            </div>)
            }
        </div>
        </>
    )
};
export default SearchPhotos;
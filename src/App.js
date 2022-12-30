import { useState } from 'react';
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./Api";

function App(){ 

    // images is state per App perspective  
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
        console.log('Do a search with', term); // test
        
        const result = await searchImages(term);
        
        // console.log(result);
        setImages(result)
    };

    // images is prop per ImageList component perpsective
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images={images}/>
        </div>
    );

}

export default App;

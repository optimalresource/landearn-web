import React, { useState, useEffect } from 'react';
import './index.css';
// import WhiteLogo from '../../assets/images/mobile/logo_white.png'
// import { useMediaQuery } from 'react-responsive'
// import { mediaQueries } from '../../responsive'
import { hero } from '../../data/hero'
import SearchInput from '../search-input'

function App() {

    const [write, setWrite] = useState("");

    useEffect(() => {
        // const isMobile = useMediaQuery({query: mediaQueries.mobileQuery});
        var i = 0;
        var txt = hero.subTitle;
        var speed = 50;
        const ac = new AbortController();
        function typeWriter() {
            if (i < txt.length) {            
                setWrite((previous) => {
                    return previous + txt.charAt(i)
                });
                i++;
                setTimeout(typeWriter, speed);
            }
            else{
                setTimeout(() => {
                    setWrite("");
                    i=0;
                    typeWriter();
                }, 5000);
            }
        }
        // if(isMobile){
            typeWriter();
        // }
        return () => ac.abort();
    },[])

    return (
        <div className="top-text-and-search">
            <div className="frame-6">
                <h1 className="text-6">{ hero.title }</h1>
                <div className="text-7" id="type-writer">
                    { write }
                </div>
                <SearchInput />
            </div>
        </div>
    )
}

export default App;
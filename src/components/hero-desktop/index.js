import React from 'react';
import './index.css';
import { hero } from '../../data/hero'
import SearchInput from '../search-input'

function App() {

    // const [heroType, setHeroType] = useState("");

    // useEffect(() => {
    //     var i = 0;
    //     var txt = hero.subTitle;
    //     var speed = 50;
    //     const ac = new AbortController();
    //     function heroTyper() {
    //         if (i < txt.length) {            
    //             setHeroType((previous) => {
    //                 return previous + txt.charAt(i)
    //             });
    //             i++;
    //             setTimeout(heroTyper, speed);
    //         }
    //         else{
    //             setTimeout(() => {
    //                 setHeroType("");
    //                 i=0;
    //                 heroTyper();
    //             }, 5000);
    //         }
    //     }
    //     heroTyper();
    //     return () => ac.abort();
    // },[])

    return (
        <div className="hero-desktop">
            <h1 className="hero-title">{ hero.title }</h1>
            <div className="hero-typer" id="hero-typer">
                { hero.subTitle }
            </div>

            <div className="constrain-search">
                <SearchInput />
            </div>
        </div>
    )
}

export default App;
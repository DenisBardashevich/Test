import Animation from "./Animation/Animation";
import "./Main.css"


const Main = () => {
    return ( 
        <>
        <main>
            <div className="main-content">
                <div className="main-content__text">
                    <p>Lorem IPSU <span>OPEN</span></p>
                    <h4>Maybe You Maybe Me.</h4>
                    <button>PARTNER</button>
                </div>
                <div className="main-content__animation">
                    <Animation />

                </div>
                <div className="main-content__blub">

                </div>
            </div>
        </main>
        </>
     );
}
 
export default Main;
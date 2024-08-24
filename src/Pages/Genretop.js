import Searchbar from "../Components/Searchbar";
import'../css/Genretop.css'
import Footer from "../Components/footer";

export default function Genretop() {
    return(
        <div>
            <Searchbar />
            <div  className="genreBox">
            <div className="genreDesccription">
                <h2>Art</h2>
                <p>Art is a creative expression that includes forms like painting, music, and literature.</p>
            </div>
            <div className="creator">
                <h3>Top creators</h3>
                <div className="onevoneimages">
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                </div>
            </div>
            <div className="soldArts">
                <h3>Works</h3>
                <div className="onevoneimages">
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                </div>
            </div>
            <div className="tools">
                <h3>Tools</h3>
                <div className="onevoneimages">
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                    <img src="https://placehold.jp/150x150.png"
                        alt="Item"
                        className="item-icon"></img>
                </div>
            </div>
            <div className="keyWords">
                <p>Pencil</p>
                <p>Eraser</p>
                <p>Paper or Canvas</p>
                <p>Paint</p>
                <p>Brushes</p>
                <p>Palette</p>
                <p>Water Container</p>
                <p>Masking Tape</p>
            </div>
            </div>
            <Footer />
        </div>
    );
}
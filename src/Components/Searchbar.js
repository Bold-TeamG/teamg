import '../css/Searchbar.css'

export default function Searchbar() {
    return (
    <div class = "products-header">
        <div class="search-bar">
            <input type="text" placeholder="Search"/>
        </div> 
        <div class="bell-icon"><img src="bell.png" alt="bell"/></div>
        <div class="cart-icon"><img src="cart.png" alt="cart"/></div>
    </div>
  );
}
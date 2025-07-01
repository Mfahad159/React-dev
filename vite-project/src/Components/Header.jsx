
function Header()
{
    return(
        <div className="header-container">
        <div className="header-left">
           <div className="theme-text">Theme</div>
           <div className="theme-name">Cupcake</div>
        </div>
        <div className="header-right">
            <div>
                <img src="./src/assets/filter.svg" alt="" className="header-right-images" />
            </div>
                <div>
                    <img src="./src/assets/dropdown.svg" alt="" className="header-right-images" />
                </div>

        </div>
    </div>
    );
}
export default Header;
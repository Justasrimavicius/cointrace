
function Header(){


    return (
    <div className="Header">
        <div className='header-left'>
            <img src={require('../Images/btc.png')} height={'40px'}></img>
            <span>Your financial literacy begins here!</span>
        </div>
        <div className='header-right'>
            <button>Sign up</button>
            <button>Log in</button>
        </div>
    </div>
    )
}

export default Header;
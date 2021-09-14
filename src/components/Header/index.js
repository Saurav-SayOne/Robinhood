import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';
import './styles.scss';





import Logo from './../assets/logo.png';


const mapState = ( state ) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});


const Header = props => {
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };
    return(
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                      <img src={Logo} alt="Trendy Turn Logo" />
                    </Link>  
                </div>

                <nav>
                    <ul>
                        <li >
                            <Link className="home" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="search" to="/search">
                                Search
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="callToActions">

                    <ul>

                        <li>
                            <Link className="cart" to="/cart">
                              Your cart ({totalNumCartItems})
                            </Link>
                        </li>                          

                        {currentUser && [
                            
                                <li>
                                    <Link className="myaccount" to="/dashboard">
                                    My Account
                                    </Link>
                                </li>,
                                <li>
                                    <span onClick={() => signOut()}>
                                        LogOut
                                    </span>    
                                </li>
                         ]}

                        {!currentUser && [
                      
                            <li>
                                <Link className="register" to="/registration">
                                Register
                                </Link>
                            </li>,
                            <li>
                                <Link className="login" to="/login">
                                Login
                                </Link>
                            </li>

                        ]}    


                    </ul>  




                    
                    
                    
                </div>              
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};



export default Header;
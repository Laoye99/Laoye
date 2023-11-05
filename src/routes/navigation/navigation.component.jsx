import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";

import {NavigationContainer, NavLink, NavLinks, LogoContainer} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
    return(
      <Fragment>
      <NavigationContainer>
       <LogoContainer to="/">
        <CrwnLogo className="logo"/>
      </LogoContainer>
        <NavLinks>
         <NavLink to='/shop'>
         SHOP
         </NavLink>
         {
          currentUser ? (
            <NavLink as = 'span'  onClick={signOutUser}
            >SIGN OUT</NavLink>)
            : (<NavLink to='/auth'>
              SIGN IN
              </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
          {isCartOpen && <CartDropDown/>} 
      </NavigationContainer>
      <Outlet/>
      </Fragment>
    );
  
  };

  export default Navigation;
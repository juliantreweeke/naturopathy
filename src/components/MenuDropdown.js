import React from 'react';
import { Image, Button, Flex } from 'rebass/styled-components';
import PropTypes from 'prop-types';
import CrossIcon from '../../svg/cross.svg';
import Cross from '../../media/icons/cross.png';

const MenuDropDown = ({ mobileMenuState, navLinks}) => {
  const {mobileMenuOpen, toggleMobileMenu} = mobileMenuState;
  return (
    <Flex
      onClick={toggleMobileMenu}
      role="navigation"
      color="primary"
      sx={{
      position:'relative',
    }}
    >
      <Button color="primary" bg="white" sx={{ fontWeight:'300', cursor: 'pointer'}}>MENU</Button>   
      {
        mobileMenuOpen && (
          <Flex
            as="ul"
            color="primary"
            fontSize={[2, 3]}
            sx={{
          background:'rgba(255, 255, 255, 1)',
          paddingLeft:"0px",
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          top:'0',
          left:'0',
          right:'0',
          bottom:'0',
          alignItems: 'center'
        }}
          > 
            <Flex 
              px={3}
              width={1}
              sx={{
              alignItems:"right",
              justifyContent:"flex-end"
            }}
              onClick={toggleMobileMenu}
              style={{cursor:'pointer'}}
            >   
            <Image 
              alt="close menu" src={Cross} 
              onClick={toggleMobileMenu}
              style={{cursor:'pointer', width:'100px'}}
            />
              {/*
              TODO: Svg's are breaking in gatsby for some unknown reason
              need to re instate svgs at a later date
              <CrossIcon 
                onClick={toggleMobileMenu}
                height={40}
                style={{cursor:'pointer'}}
              /> */}
            </Flex>
            {navLinks}     
          </Flex>
      )}
    </Flex>
  );
}

MenuDropDown.propTypes = {
    navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      title: PropTypes.number,
    })
  ),
  mobileMenuState: PropTypes.objectOf(
    PropTypes.shape({
      mobileMenuOpen: PropTypes.bool,
      toggleMobileMenu: PropTypes.func,
    })
  ),
};

export default MenuDropDown;



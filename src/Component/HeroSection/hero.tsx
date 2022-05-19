import React, { useState } from 'react'
import { Navbar } from '../Navbar/navbar'
import { Sidebar } from '../Sidebar/sidebar';

import { 
    HeroContainer,
    HeroContent,
    HeroItems,
    Headinghero,
    Paragrahero,
    Btnhero
} from './style'
interface Props {
    isOpen: boolean;
    toggle: any;
}

export const Hero = (props: Props) => {
    const { isOpen, toggle } = props;

    
    return (
        <div>
            
          <HeroContainer>
          <Navbar/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
              <HeroContent>
              <HeroItems>
                  <Headinghero>Greatest Pizza Ever</Headinghero>
                  <Paragrahero>Ready in 60 seconds</Paragrahero>
                  <Btnhero>Place Order</Btnhero>
              </HeroItems>
              </HeroContent>
          </HeroContainer>  
        </div>
    )
}

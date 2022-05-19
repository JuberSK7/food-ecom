import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialLink

} from './style'

interface Props {
 

} 

export const Footer = (props: Props) => {
    return (
        <div>
            <FooterContainer>
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo>Pizza</SocialLogo>
                            <SocialIcons>

                                <SocialLink>
                                    <FaFacebook/>
                                </SocialLink>

                                <SocialLink>
                                    <FaInstagram/>
                                </SocialLink>

                                <SocialLink>
                                    <FaLinkedin/>
                                </SocialLink>

                                <SocialLink>
                                    <FaTwitter/>
                                </SocialLink>

                                <SocialLink>
                                    <FaYoutube/>
                                </SocialLink>

                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </div>
    )
}

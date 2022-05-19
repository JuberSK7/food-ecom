import React from 'react'

import {
    SideBarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SideBarRout
} from './style'

interface Props {
    toggle: any;
    isOpen: boolean;
}

export const Sidebar = (props: Props) => {
    const { toggle, isOpen} = props;
    return (
        <div>
            <SideBarContainer isOpen={isOpen} onClick={toggle}>
               <Icon onClick={toggle}> 
                   <CloseIcon />
                </Icon>
                <SidebarMenu>
                    <SidebarLink>Pizzas</SidebarLink>
                    <SidebarLink>Desserts</SidebarLink>
                    <SidebarLink>Full Menu</SidebarLink>
                    <SideBtnWrap>
                        <SideBarRout>Ordee Now</SideBarRout>
                    </SideBtnWrap>
                </SidebarMenu>
            </SideBarContainer>
        </div>
    )
}

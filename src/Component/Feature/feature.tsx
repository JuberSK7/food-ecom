import React from 'react'

import { FutureContainer, FutureBtn} from './style'
interface Props {
    
}

export const Feature = (props: Props) => {
    return (
        <div>
            <FutureContainer>
                <h1>Pizza of the Days </h1>
                <p>Truffle aldrfdo saoudse toppr 24 cartgold dust...</p>
                <FutureBtn>Order Now</FutureBtn>
            </FutureContainer>
        </div>
    )
}

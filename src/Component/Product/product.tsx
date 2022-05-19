import React from 'react'
import {  
    ProductContainer,
    ProductHeading,
    ProductWrapper,
    ProductCart,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductBtn,
    ProductPrice
} from './style'

interface Props {
    image: any;
    alt: string;
    name: string;
    desc: string;
    price: string;
    button: string;
    
}

export const Product = (props: Props) => {

    const  {image, alt, name, desc, price, button} = props;

    return (
        <div>
            <ProductContainer>
                <ProductHeading>
                    <ProductWrapper>
                        <ProductCart>
                    <ProductImg><img src={image} alt={alt}/></ProductImg>
                            <ProductInfo>
                                <ProductTitle>{name}</ProductTitle>
                                <ProductDesc>{desc}</ProductDesc>
                                <ProductPrice>{price}</ProductPrice>
                                <ProductBtn>{button}</ProductBtn>
                            </ProductInfo>
                        </ProductCart>

                        <ProductCart>
                    <ProductImg><img src={image} alt={alt}/></ProductImg>
                            <ProductInfo>
                                <ProductTitle>{name}</ProductTitle>
                                <ProductDesc>{desc}</ProductDesc>
                                <ProductPrice>{price}</ProductPrice>
                                <ProductBtn>{button}</ProductBtn>
                            </ProductInfo>
                        </ProductCart>

                        <ProductCart>
                    <ProductImg><img src={image} alt={alt}/></ProductImg>
                            <ProductInfo>
                                <ProductTitle>{name}</ProductTitle>
                                <ProductDesc>{desc}</ProductDesc>
                                <ProductPrice>{price}</ProductPrice>
                                <ProductBtn>{button}</ProductBtn>
                            </ProductInfo>
                        </ProductCart>
                    </ProductWrapper>
                </ProductHeading>
            </ProductContainer>
        </div>
    )
}

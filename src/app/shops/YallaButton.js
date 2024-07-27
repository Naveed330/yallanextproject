import React from 'react'
import './Yallabuttonstyle.css'
import Link from 'next/link'
const YallaButton = () => {
    return (
        <>
            <div className='button_container'>
                <>
                    <Link href={'/shops'} className="c-button c-button--gooey">

                        <div className='all_btn_handle' >
                            All
                            <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <p className='m-0 yalla_shop_class'>(27)</p>
                            </div>
                        </div>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        style={{ display: "block", height: 0, width: 0 }}
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </>
            </div>

            <div className='button_container'>
                <>
                    <Link href={'/shops/YallaShopBar'} className="c-button c-button--gooey">

                        <div className='all_btn_handle' >
                            Bars
                            <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <p className='m-0 yalla_shop_class'>(15)</p>
                            </div>
                        </div>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        style={{ display: "block", height: 0, width: 0 }}
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </>
            </div>

            <div className='button_container'>
                <>
                    <Link href={'/shops/YallaShopChips'} className="c-button c-button--gooey">

                        <div className='all_btn_handle' >
                            Chips
                            <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <p className='m-0 yalla_shop_class'>(6)</p>
                            </div>
                        </div>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        style={{ display: "block", height: 0, width: 0 }}
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </>
            </div>

            <div className='button_container'>
                <>
                    <Link href={'/shops/YallaShopNuts'} className="c-button c-button--gooey">

                        <div className='all_btn_handle' >
                            Nuts
                            <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <p className='m-0 yalla_shop_class'>(16)</p>
                            </div>
                        </div>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        style={{ display: "block", height: 0, width: 0 }}
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </>
            </div>

            <div className='button_container'>
                <>
                    <Link href={'/shops/YallaShopDrink'} className="c-button c-button--gooey">

                        <div className='all_btn_handle' >
                            Drinks
                            <div className="c-button__blobs">
                                <div />
                                <div />
                                <div />
                            </div>
                            <div>
                                <p className='m-0 yalla_shop_class'>(10)</p>
                            </div>
                        </div>
                    </Link>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        style={{ display: "block", height: 0, width: 0 }}
                    >
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation={10} result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </>
            </div>

        </>)
}

export default YallaButton

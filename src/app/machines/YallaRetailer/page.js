import React from 'react'
import YallaMachineNavbar from '../YallaMachineNavbar'
import '../YallaHealther/Yallahealther.css'
import { Container, Table } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import backlogo from '../../Assets/MachinePageAssets/backlogo.png';
import uppermm from '../../Assets/MachinePageAssets/uppermm.png';
import lowermm from '../../Assets/MachinePageAssets/lowermm.png';
import lifestylepaarmetrvende from '../../Assets/MachinePageAssets/lifestylepaarmetrvende.png'
import YallaFooter from '@/app/YallaFooter'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
const page = () => {
    return (
        <div>
            <YallaMachineNavbar />
            <div className='machineConatiner_parameter'>
                <Container>
                    <Link href='/machines'><MdOutlineKeyboardBackspace data-aos="fade-up" className='mt-4' style={{ color: 'black', fontSize: '50px' }} /></Link>

                    <h1 className='productParameter'
                    >PRODUCT PARAMETERS</h1>
                    <p className='fuselarge mt-3' data-aos="fade-up">Sophisticated fuselage, just cover an area of 1 m²</p>

                    <div className='Yallahealthercontainer'>
                        <div className='healthierClassContainer'>
                            <div className='upperlowerdiv' data-aos="fade-up">
                                <div>
                                    <Image src={uppermm} alt='UpperMm' />
                                    <h2 className='mmtag'>190mm</h2>
                                </div>
                                <Image src={lowermm} alt='lowermm' />
                            </div>

                            <div>
                                <Image src={lifestylepaarmetrvende} alt='lifestylepaarmetrvende' className='vendehealthier' data-aos="fade-up" />
                            </div>
                        </div>

                        {/* Responsive Table */}
                        <div className='table-container mt-5 pb-5' data-aos="fade-up" >
                            <Table responsive striped bordered hover className='animated-table' >
                                <thead >
                                    <tr className='table_tr_two'>
                                        <th className='table_tr_one' >Model</th>
                                        <th className='table_tr_two'>TCN-CSC-10C(V22)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='table_tr_two' >
                                        <td className='table_tr_one' >Name</td>
                                        <td className='table_tr_two'>Touch Screen Vending Machine</td>
                                    </tr>
                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Outside Dimensions</td>
                                        <td className='table_tr_two'>H: 1940mm, W: 1269mm, D: 795mm</td>
                                    </tr>
                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Weight</td>
                                        <td className='table_tr_two'>300kg</td>
                                    </tr>
                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Merchandise Type</td>
                                        <td className='table_tr_two'>Maximum about 70 choices</td>
                                    </tr>
                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Commodity Storage</td>
                                        <td className='table_tr_two'>About 300pcs</td>
                                    </tr>

                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Interior Storage</td>
                                        <td className='table_tr_two'>6 Drawers</td>
                                    </tr>

                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one' >Refrigeration Temperature</td>
                                        <td className='table_tr_two'>4-25 C(Adjustable)</td>
                                    </tr>

                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Electricity</td>
                                        <td className='table_tr_two'>100V/240V,50Hz/60Hz</td>
                                    </tr>

                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Payment System</td>
                                        <td className='table_tr_two'>Card, Coin</td>
                                    </tr>

                                    <tr className='table_tr_two'>
                                        <td className='table_tr_one'>Standard Interface</td>
                                        <td className='table_tr_two'>MDB/DEX</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </div>
            <YallaFooter />
        </div>
    )
}

export default page
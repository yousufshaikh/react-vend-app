import React from 'react'
import '../styles/classified-list.css'
import properties from '../images/properties.png'
import cars from '../images/cars.png'
import  electronics from '../images/electronics.png'
import furniture from '../images/furniture.png'

const ClassifiedList = () => {
    return(
        <table>
            <tbody>
                <tr>
                    <td>
                        <div>
                            <a href="">
                                <img src={properties} alt="properties"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Properties</span>
                            </a>
                        </div>
                    </td>
                    <td>
                        <div>
                            <a href="">
                                <img src={cars} alt="cars"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Cars</span>
                            </a>
                        </div>
                    </td>
                    <td>
                        <div>
                            <a href="">
                                <img src={electronics} alt="electronics"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span> Electronics</span>
                            </a>
                        </div>
                    </td>
                    <td>
                        <div>
                            <a href="">
                                <img src={furniture} alt="furniture"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Furniture</span>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ClassifiedList
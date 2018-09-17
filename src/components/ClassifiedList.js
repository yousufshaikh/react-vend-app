import React from 'react'
import '../styles/classified-list.css'
import properties from '../images/properties.png'
import cars from '../images/cars.png'
import  electronics from '../images/electronics.png'
import furniture from '../images/furniture.png'
import jobs from '../images/jobs.png'
import mobiles from '../images/mobiles.png'
import bikes from '../images/bikes.png'
import books from '../images/books.png'
import fashion from '../images/fashion.png'
import pets from '../images/pets.png'
import services from '../images/services.png'
import {Link} from 'react-router-dom'

const ClassifiedList = (props) => {
    return(
        <table>
            <tbody>
                <tr>
                    <td className="text-center">
                        <Link to={{pathname: '/view-category-ads'}}>
                            <div>
                                <img className="catigory-img" src={properties} alt="properties"/>
                            </div>
                            <div>
                                <span>Properties</span>
                            </div>
                        </Link>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={cars} alt="cars"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Cars</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={electronics} alt="electronics"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span> Electronics</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={furniture} alt="furniture"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Furniture</span>
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={jobs} alt="jobs"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Jobs</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={mobiles} alt="mobiles"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Mobiles</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={bikes} alt="bikes"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Bikes</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={books} alt="books"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Books</span>
                            </a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={fashion} alt="fashion"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Fashion</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={pets} alt="pets"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Pets</span>
                            </a>
                        </div>
                    </td>
                    <td className="text-center">
                        <div>
                            <a href="">
                                <img className="catigory-img" src={services} alt="services"/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <span>Services</span>
                            </a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ClassifiedList
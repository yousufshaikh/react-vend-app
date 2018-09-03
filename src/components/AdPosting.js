import React from 'react';
import '../styles/add-posting.css'

const AdPosting = (props) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="post-ad-container">
                        <h3>Post Your Ad</h3>
                        <form>
                            <div className="form-group"></div>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Model</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Condition</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="from-group">
                                <label>Description</label>
                                <textarea name="adDiscription" className="form-control" row="7"></textarea>
                            </div>
                            <div className="image-margin">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Image 1</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Image 2</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label>Image 3</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <span className="text-danger"></span>
                            <div className="divider"></div>
                            <div className="form-group">
                                <h4>Seller Information</h4>
                            </div>
                            <div className="form-group">
                                <label>Seller Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Item to be sold in which city? *</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Seller phone number</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <span className="text-muted">
                                    <small>By clicking Submit you confirm that you have carefully read and understood all the facts, statements and conditions stated in the Terms of Use & Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.</small>
                                </span>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg">Submit Your Ad</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdPosting;
import React from 'react';
import '../styles/add-posting.css'

const AddPosting = (props) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="post-container">
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
                                    <div className="form-froup">
                                        <label>Image 1</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-froup">
                                        <label>Image 2</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-froup">
                                        <label>Image 3</label>
                                        <input type="file" className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPosting;
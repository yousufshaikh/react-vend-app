import React, {Component} from 'react';
import '../styles/add-posting.css'
// import { constants } from 'zlib';


class AdPosting extends Component{
    state = {
        adPostError: '',
        title: '',
        category:'',
        model: '',
        condition: '',
        price: '',
        description: '',
        sellerName: '',
        soldCity: '',
        phoneNum: ''
    }
        onChangeTitle = this.onChangeTitle.bind(this);
        onChangeCategory = this.onChangeCategory.bind(this);
        onChangeModel = this.onChangeModel.bind(this);
        onChangeCondition = this.onChangeCondition.bind(this);
        onChangePrice = this.onChangePrice.bind(this);
        onChangeDescription = this.onChangeDescription.bind(this);
        onChangeSellerName = this.onChangeSellerName.bind(this);
        onChangeCity = this.onChangeCity.bind(this);
        onChangePhoneNum = this.onChangePhoneNum.bind(this);
        onSubmitAd = this.onSubmitAd.bind(this);

        onChangeTitle(event){
            this.setState({
                title : event.target.value,
            });
        }

        onChangeCategory(event){
            this.setState({
                category: event.target.value,
            });
        }

        onChangeModel(event){
            this.setState({
                model: event.target.value,
            })
        }

        onChangePrice(event){
            this.setState({
                price: event.target.value,
            })
        }

        onChangeCondition(event){
            this.setState({
                condition: event.target.value,
            })
        }

        onChangeDescription(event){
            this.setState({
                description: event.target.value,
            })
        }

        onChangeSellerName(event){
            this.setState({
                sellerName: event.target.value,
            })
        }

        onChangeCity(event){
            this.setState({
                soldCity: event.target.value,
            })
        }

        onChangePhoneNum(event){
            this.setState({
                phoneNum: event.target.value,
            })
        }

        onSubmitAd(e){
            console.log("testing onSubmitAd function");
                fetch('http://localhost:3001/post/adpost',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                        title: this.state.title,
                        category: this.state.category,
                        model: this.state.model,
                        condition: this.state.condition,
                        price: this.state.price,
                        description: this.state.description,
                        sellerName: this.state.sellerName,
                        soldCity: this.state.soldCity,
                        phoneNum: this.state.phoneNum
                      }),
                }).then(res => res.json())
                .then(json => {
                    console.log('json', json)
                    if(json.success){
                        this.setState({
                            adPostError: json.message,
                            title: '',
                            category: '',
                            model: '',
                            condition: '',
                            price: '',
                            description: '',
                            sellerName: '',
                            soldCity: '',
                            phoneNum: ''
                        })
                    }
                    else{
                        this.setState({
                            adPostError: json.message
                        });
                    }
                })
            e.preventDefault();
        }

    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="post-ad-container">
                    {
                        (this.state.adPostError) ? (
                            <strong><p>{this.state.adPostError}</p></strong>
                            ) : (null)
                    }
                        <h3>Post Your Ad</h3>
                        <form>
                            <div className="form-group"></div>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.category}
                                onChange={this.onChangeCategory}
                                />
                            </div>
                            <div className="form-group">
                                <label>Model</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.model}
                                onChange={this.onChangeModel}
                                />
                            </div>
                            <div className="form-group">
                                <label>Condition</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.condition}
                                onChange={this.onChangeCondition}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                />
                            </div>
                            <div className="from-group">
                                <label>Description</label>
                                <textarea name="adDiscription" 
                                className="form-control" 
                                row="7" 
                                value={this.state.description} 
                                onChange={this.onChangeDescription}>
                                </textarea>
                            </div>
                            {/* <div className="image-margin">
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
                            </div> */}
                            <span className="text-danger"></span>
                            <div className="divider"></div>
                            <div className="form-group">
                                <h4>Seller Information</h4>
                            </div>
                            <div className="form-group">
                                <label>Seller Name</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.sellerName}
                                onChange={this.onChangeSellerName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Item to be sold in which city? *</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.soldCity}
                                onChange={this.onChangeCity}
                                />
                            </div>
                            <div className="form-group">
                                <label>Seller phone number</label>
                                <input type="text" 
                                className="form-control" 
                                value={this.state.phoneNum}
                                onChange={this.onChangePhoneNum}
                                />
                            </div>
                            <div className="form-group">
                                <span className="text-muted">
                                    <small>By clicking Submit you confirm that you have carefully read and understood all the facts, statements and conditions stated in the Terms of Use & Posting Rules of our website to which you unconditionally agree and accept as true and correct and constituting a binding agreement between us.</small>
                                </span>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" onClick={this.onSubmitAd}>Submit Your Ad</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AdPosting;
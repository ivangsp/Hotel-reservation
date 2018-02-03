import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            fName: 'ivan',
            sName: '',
            email: '',
            nationality: '',
            phoneNumber: '',
            gender: '',
            msg:    '',
            cEmail: ''
        }
    }

    submitUserDetails(){
        console.log('username', this.state.fName);
        this.props.onBook('payment');
        this.props.setUser(this.state)
    }





    render(){
        return(
            <div className="row personal-details">
               <div className="col-md-12">
                   <div className="row">
                       <div className="col-md-6 col-sm-12">
                           <div className="form-group">
                               <label htmlFor="fname">First Name</label>
                               <input type="text" className="form-control" id="fname"
                                      onChange={(e) => this.setState({fName: e.target.value})}/>
                           </div>
                       </div>

                       <div className="col-md-6 col-sm-12">
                           <div className="form-group">
                               <label htmlFor="sname">Second Name</label>
                               <input type="text" className="form-control" id="sname"
                                      onChange={(e) => this.setState({sName: e.target.value})}/>
                           </div>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-md-6 col-sm-12">
                           <div className="form-group">
                               <label htmlFor="sname">Email Address</label>
                               <input type="email" className="form-control" id="email"
                                      onChange={(e) => this.setState({email: e.target.value})}/>
                           </div>
                       </div>

                       <div className="col-md-6 col-sm-12">
                           <div className=" form-group">
                               <label htmlFor="c-email">Confirm Email Address</label>
                               <input type="email" className="form-control" id="c-email"
                                      onChange={(e) => this.setState({cEmail: e.target.value})}/>
                           </div>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-md-6 col-sm-12 form-group">
                           <label htmlFor="sname">Nationality</label>
                           <select className="form-control" onChange={(e) => this.setState({nationality: e.target.value})}>
                               <option value="uganda">uganda</option>
                               <option value="USA">USA</option>
                               <option value="UK">UK</option>
                               <option value="Kenya">Kenya</option>
                           </select>
                       </div>

                       <div className="col-md-6 col-sm-12 form-group">
                           <label htmlFor="mobile">Mobile No </label>
                           <input type="text" className="form-control" id="mobile" placeholder="+256 789 *** ***"
                                  onChange={(e) => this.setState({phoneNumber: e.target.value})}/>
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-md-6  col-sm-12 form-group" >
                           <label htmlFor="sname">Gender</label>
                           <select className="form-control" onChange={(e) => this.setState({gender: e.target.value})}>
                               <option>select Gender</option>
                               <option value="1">Male</option>
                               <option value="1">Female</option>
                           </select>
                       </div>

                       <div className="col-md-6  col-sm-12 form-group">
                           <label htmlFor="srequest">Specila Request</label>
                           <textarea name="" id="srequest" cols="30" rows="3"
                                     onChange={(e) => this.setState({msg: e.target.value})} />
                       </div>
                   </div>

                   <div className="row">
                       <div className="col-md-6">
                           <legend className="col-form-label">Purpose of Visit</legend>
                           <div className="form-check">
                               <input className="form-check-input" type="radio" id="tourist" value='1' />
                               <label className="form-check-label" htmlFor="tourist"> Tourist </label>
                           </div>

                           <div className="form-check">
                               <input className="form-check-input" type="radio" id="business" value='2'/>
                               <label className="form-check-label" htmlFor="business"> Business </label>
                           </div>
                       </div>

                   </div>

                   <div className="row">
                       <div className="col-3 offset-md-7">

                           <button className="btn btn-danger btn-bgcolor" onClick={()=>{this.submitUserDetails()}}>
                               Proceed to Payment
                           </button>

                       </div>
                   </div>
               </div>
            </div>

        );
    }

}

export  default Form
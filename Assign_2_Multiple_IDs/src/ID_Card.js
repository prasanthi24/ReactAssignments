import React, { Component } from 'react';
class ID_Card extends Component {
    constructor(props)
    {
        super(props)
    }
    // state = {  } 
    render() { 
        return (
            <div className = "Wrapper">
                <div className = "id-card">
                    <div className='emp-img-cntnr'>
                    <div>
                        <img id = "emp-photo" src= {this.props.profile.profileImg} alt = "profile pic"></img>
                        {/* {console.log(props.profile.profileImg)} */}
                    </div>
                    <p className = "title-value" id = "emp-name">{this.props.profile.name}</p>
                    </div>
                    <div className='location'>
                    <h5 className = "title">Location</h5>
                    <p className = "title-value">{this.props.profile.location}</p>
                    </div>
                    <div className="blood">
                    <h5 className = "title">Blood Group</h5>
                    <p className = "title-value">{this.props.profile.bloodGroup}</p>
                    </div>
                    <div className="Age">
                    <h5 className = "title">Age</h5>
                    <p className = "title-value">{this.props.profile.age}</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ID_Card;
import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)} method="POST">
                    <div>
                        <label></label>
                    </div>

                </form>
            </div>
        )
    }
}
export default Contact;
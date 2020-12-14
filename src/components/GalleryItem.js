import React, {Component} from 'react';
import { Nav} from 'react-bootstrap';
import '../css/GalleryItem.css'

class GalleryItem extends Component{
    constructor(props){
        super(props);
        this.state ={
            items: ["abc"],
        }
    }

    componentDidMount(){
        var fetchItems;
        if(this.props.isLab)
            fetchItems = fetch('./labs.json')
        else{
            fetchItems = fetch('./projects.json')
        }
        fetchItems
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                items: result,
            })
            console.log(this.state.items)
        })
    }

    render(){
        return(
            
            <div className="container">
                <ul className="grid">
                        {this.state.items.map(item => (
                                <Nav.Link href={item.refUrl  } className={"roundLinkLab"}>
                                    <h3 className="h3Lab">{item.title}</h3>
                                    <p className="textMenuLab"> {item.synop}</p>
                                </Nav.Link>
                            ))}
                </ul>
            </div>
        )
    }
}

export default GalleryItem;
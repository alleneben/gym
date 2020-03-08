import React from 'react';



class CardFooter extends React.Component {


    render(){
        return(
            <div className={this.props.className}>
                { this.props.children }
            </div>
        )
    }
}

export default CardFooter;
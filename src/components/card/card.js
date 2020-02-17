import React from 'react';



class Card extends React.Component {

    render(){
        return(
            <div className={this.props.className} style={{opacity: this.props.submittingstyle}}>
                {this.props.children}
            </div>
        )
    }
}

export default Card;
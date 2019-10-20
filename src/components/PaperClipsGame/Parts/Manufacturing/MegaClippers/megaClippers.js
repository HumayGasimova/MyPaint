/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';


/**
* Components
*/

import Button from '../../../../../library/Button/button';

/**
* Styles
*/

import './megaClippers.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* MegaClippers component definition and export
*/

export class MegaClippers extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */

    /**
    * Methods
    */

   megaClippersOnClick = () => {
       this.props.megaClippersButtonPressed();
    //    this.props.startMegaCluppers();
   }

    /**
    * Markup
    */

    render(){
        return(
            <div className="megaClippers-section">
                <div className="megaClippers-wrapper2">
                    <Button
                        onClick={this.megaClippersOnClick}
                        text={"MegaClippers"}
                        // disabled={this.props.autoClippersButtonDisabled}
                
                    />
                    <div className="megaClippers-text">{this.props.megaClippersPerSec}</div>
                </div>
                <div className="megaClippers-text">Cost: $ 0</div>
            </div> 
        );
    }
}

export default connect(
    (state) => {
        return {
            autoClippersButtonDisabled: state.business.autoClippersButtonDisabled,
            megaClippersPerSec: state.business.megaClippersPerSec,
            autoClipperInitPrice: state.business.autoClipperInitPrice,
            autoClipperPrice: state.business.autoClipperPrice
        };
    },
    (dispatch) => {
        return {
            autoPaperclips: bindActionCreators(Actions.autoPaperclips, dispatch),
            megaClippersButtonPressed: bindActionCreators(Actions.megaClippersButtonPressed, dispatch),
        };
    }
)(MegaClippers);

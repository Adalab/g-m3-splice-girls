import React from 'react';
import PropTypes from 'prop-types';
import FormOptDesign from './FormOptDesign';
import FormOptFill from './FormOptFill';
import FormOptShare from './FormOptShare';

class FormOption extends React.Component {
    render() {
        const titulo = 'Diseña';
        return (
            <div className="options__box">
                <form className="create__card" action="https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/" method="POST">
                    <FormOptDesign title={titulo} handleChangeState={this.props.handleChangeState} cardPalette={this.props.cardPalette} changeCollap={this.props.changeCollap}/>
                    <FormOptFill handleChangeState={this.props.handleChangeState} changeCollap={this.props.changeCollap}/>
                    <FormOptShare changeCollap={this.props.changeCollap}/>
                </form>

            </div>



        );
    }
}

FormOption.propTypes= {
    changeCollap: PropTypes.func,
    handleChangeState: PropTypes.func, 
    cardPalette: PropTypes.string 
  }

export default FormOption;
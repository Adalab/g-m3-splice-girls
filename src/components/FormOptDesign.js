import React from 'react';
import PropTypes from 'prop-types';


class FormOptDesing extends React.Component {
    render() {
 console.log(this.props.cardPalette)
        return (
            <fieldset className="design--card">
                <legend className="hidden">diseña</legend>
                <h2 className=" design__title design__title2 js__title--form">{this.props.title}</h2>
                <div className="desing__form--container">
                    <div className="design__form ">
                        <h3 className="colors__title">colores</h3>
                        <div className="design__form--colors">
                            <ul className="design__colors-list">
                                <li className="palette">
                                    <label htmlFor="p1" className="palette__option">
                                        <input className="radio__palette radio__palette1" type="radio" name="palette" value="palette1" id="p1"  checked={this.props.cardPalette === "palette1"} onChange={this.props.handleChangeState} />
                                        <ul className="palette--colors">
                                            <li className="color__box p1--color1" style={{  backgroundColor: '#114e4e' }}>cyprus</li>
                                            <li className="color__box p1--color2" style={{ backgroundColor: '#438792'}}>hippie blue</li>
                                            <li className="color__box p1--color3" style={{ backgroundColor: '#a2deaf' }}>chinook</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p2" className="palette__option">
                                        <input className="radio__palette radio__palette2" type="radio" name="palette" value="palette2" id="p2" onChange={this.props.handleChangeState} checked={this.props.cardPalette === "palette2"} />
                                        <ul className="palette--colors">
                                            <li className="color__box p2--color1" style={{ backgroundColor: '#420101' }}>seal brown</li>
                                            <li className="color__box" style={{ backgroundColor: '#bd1010' }}>free speech red</li>
                                            <li className="color__box" style={{ backgroundColor: '#e95626' }}>cinnabar</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p3" className="palette__option">
                                        <input className="radio__palette radio__palette3" type="radio" name="palette" value="palette3" id="p3" onChange={this.props.handleChangeState} checked={this.props.cardPalette === "palette3"} />
                                        <ul className="palette--colors">
                                            <li className="color__box p3--color1" style={{ backgroundColor: '#3e5b65'}}>san juan</li>
                                            <li className="color__box p3--color2" style={{ backgroundColor: '#eab052'  }}>casablanca</li>
                                            <li className="color__box p3--color3" style={{ backgroundColor: '#a0c0cf' }}>regent st blue</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p4" className="palette__option">
                                        <input className="radio__palette radio__palette4" type="radio" name="palette" value="palette4" id="p4" onChange={this.props.handleChangeState} checked={this.props.cardPalette === "palette4"} />
                                        <ul className="palette--colors">
                                            <li className="color__box p4--color1" style={{ backgroundColor: '#600060' }}>purple</li>
                                            <li className="color__box" style={{ backgroundColor: '#aa00aa' }}>medium orchid</li>
                                            <li className="color__box" style={{ backgroundColor: '#ff00ff' }}>light purple</li>
                                        </ul>
                                    </label>
                                </li>
                                <li className="palette">
                                    <label htmlFor="p5" className="palette__option">
                                        <input className="radio__palette radio__palette5" type="radio" name="palette" value="palette5" id="p5" onChange={this.props.handleChangeState} checked={this.props.cardPalette === "palette5"}/>
                                        <ul className="palette--colors">
                                            <li className="color__box p5--color1" style={{ backgroundColor: '#005500' }}>super dark green</li>
                                            <li className="color__box" style={{ backgroundColor: '#008000' }}>green</li>
                                            <li className="color__box" style={{ backgroundColor: '#00aa55' }}>lawnish green</li>
                                        </ul>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    }
}

FormOptDesing.propTypes = {
    handleChangeState: PropTypes.func,
    cardPalette: PropTypes.string
}
export default FormOptDesing;
import React, { Component } from 'react';
import "../../App.css";

class Square extends Component {
    state = {
        perimetro: "",
        area: "",
        a: "",
        b: ""
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.setState({
            perimetro: ((this.state.a * 2) + (this.state.b * 2)).toFixed(2),
            area: (this.state.a * this.state.b).toFixed(2)
        })
    }

    onChange = (e) => {
        let targetValue = e.target.value
        this.setState({
            [e.target.name]: targetValue,
            perimetro: "",
            area: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="shape-info">
                    <h2>Square</h2>
                    <img height="100px" width="100px" src="square.png"></img>
                </div>

                <div className="txt">Ingrese los siguientes parametros:</div>
                <div className="two">
                    <div className="item-two">
                        <p className="label-2">a*</p>
                        <input className="wide-item" type="number" id="a" name="a" onChange={this.onChange} value={this.state.a} required></input>
                    </div>
                    <div className="item-two">
                        <p className="label-2">b*</p>
                        <input className="wide-item" type="number" id="b" name="b" onChange={this.onChange} value={this.state.b} required></input>
                    </div>
                </div>


                <div className="btn-item">
                    <button className="btn-calculate" type="submit">Calcular</button>
                </div>

                <div className="two">
                    <div className="item-two">
                        <p className="label">Perimetro</p>
                        <input className="wide-item" type="number" id="perimetro" name="perimetro" value={this.state.perimetro} readOnly></input>
                    </div>
                    <div className="item-two">
                        <p className="label">Área</p>
                        <input className="wide-item" type="number" id="area" name="area" value={this.state.area} readOnly></input>
                    </div>

                </div>
            </form>
        )
    }

}

export default Square;

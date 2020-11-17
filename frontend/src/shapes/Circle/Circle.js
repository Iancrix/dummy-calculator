import React, { Component } from 'react';
import "../../App.css";

import axios from "axios";

class Circle extends Component {
    state = {
        perimetro: "",
        area: "",
        radio: ""
    }

    onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://192.168.2.15:5000/circles', {
            radio: this.state.radio
        }).then((res) => {
            this.setState({
                perimetro: res.data.perimeter,
                area: res.data.area
            })
        }, (error) => {
            console.log(error);
        });

        /*
        this.setState({
            perimetro: (2 * Math.PI * this.state.radio).toFixed(2),
            area: (Math.PI * (this.state.radio ** 2)).toFixed(2)
        })
        */
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
                    <h2>Circle</h2>
                    <img height="100px" width="100px" src="circle.png"></img>
                </div>

                <div className="txt">Ingrese los siguientes parametros:</div>

                <div className="item">
                    <p className="label">Radio*</p>
                    <input className="wide-item" type="number" id="radio" name="radio" onChange={this.onChange} value={this.state.radio} required></input>
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

export default Circle;

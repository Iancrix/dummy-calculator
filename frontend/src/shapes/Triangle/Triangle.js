import React, { Component } from 'react';
import "../../App.css";

import axios from "axios";

class Triangle extends Component {
    state = {
        perimetro: "",
        area: "",
        a: "",
        b: "",
        c: ""
    }

    onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/triangles', {
            a: this.state.a,
            b: this.state.b,
            c: this.state.c
        }).then((res) => {
            this.setState({
                perimetro: res.data.perimeter,
                area: res.data.area
            })
        }, (error) => {
            console.log(error);
        });

        /*
        let a = this.state.a;
        let b = this.state.b;
        let c = this.state.c;

        let s = (a + b + c) / 2;
        let area = Math.sqrt((s * (s - a) * (s - b) * (s - c))).toFixed(2);

        this.setState({
            perimetro: (a + b + c).toFixed(2),
            area: !isNaN(area) ? area : (0).toFixed(2)
        }, () => console.log(isNaN(area)))
        */
    }

    onChange = (e) => {
        let targetValue = e.target.value
        this.setState({
            [e.target.name]: !isNaN(targetValue) ? parseFloat(targetValue) : 0,
            perimetro: "",
            area: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="shape-info">
                    <h2>Triangle</h2>
                    <img height="100px" width="100px" src="triangle.png"></img>
                </div>

                <div className="txt">Ingrese los siguientes parametros:</div>

                <div className="three">
                    <div className="item-three">
                        <p className="label-2">a*</p>
                        <input className="wide-item" type="number" id="a" name="a" onChange={this.onChange} value={this.state.a} required></input>
                    </div>
                    <div className="item-three">
                        <p className="label-2">b*</p>
                        <input className="wide-item" type="number" id="b" name="b" onChange={this.onChange} value={this.state.b} required></input>
                    </div>
                    <div className="item-three">
                        <p className="label-2">c*</p>
                        <input className="wide-item" type="number" id="c" name="c" onChange={this.onChange} value={this.state.c} required></input>
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

export default Triangle;

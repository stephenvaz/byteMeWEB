import React from "react";
import './openTile.css';
import NavB from "./navbar";

function OpenTile() {
    return (
        <div className='back'>
            <NavB />
            <div>
                <div class="box">
                    <a href="#"></a>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="hover-point"></div>
                    <div class="box-contents"></div>
                </div>
            </div>
            <div className="info"></div>
            <div className="rules"></div>
            <div className="amt">
                <h3></h3>
                <h3></h3>
            </div>
            <div className="com-logo"></div>
            <div className="register">
                <button type="submit"><label><h2>Register</h2></label></button>
            </div>
        </div>
    )
}

export default OpenTile;
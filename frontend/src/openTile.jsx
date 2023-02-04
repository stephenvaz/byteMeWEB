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
            <div className="info">
                <h1 className="heading">About Night Party</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores, ex, doloribus dignissimos inventore, eveniet officia perspiciatis facere beatae ducimus soluta distinctio dicta quibusdam ad provident nisi sapiente illum amet sint sit id explicabo necessitatibus. Illum, id, quasi reprehenderit mollitia quidem natus adipisci consequatur distinctio ipsum nesciunt debitis, sequi fugit ipsa possimus blanditiis nobis doloremque! Aperiam eos accusamus doloribus vitae vel, voluptatum vero inventore reprehenderit quae velit delectus esse sequi nobis ut facere, labore aspernatur nam eaque? Voluptates ab assumenda corrupti voluptas rerum provident iure facilis autem, maiores fugiat quis deleniti placeat porro similique dolores voluptatem error vel qui. Tempore?
                </p>
            </div>
            <div className="rules">
                <h1 className="heading"> Rules</h1>
                <ul style={{listStyle: "unset", textAlign:"left"}}>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                </ul>
            </div>
            <div className="amt">
                <h4>Date: 5th February 2023</h4>
                <h4>Time: 2.00 pm</h4>
                <h4>Prize Money: 35,000 INR</h4>
            </div>
            <div className="com-logo">
            </div>
            <div className="register">
                <button className="regbut" type="submit"><h2>Register</h2></button>
            </div>
        </div>
    )
}

export default OpenTile;
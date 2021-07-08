import React from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function Login() {
    const history = useHistory();
    function validatePAT() {
        let pat = document.querySelector('#pat').value;
        if(pat !== '') {
            let checkPAT = new RegExp('^[0-9a-zA-Z_]{40}$');
            if(checkPAT.test(pat)) {
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("personal-access-token", pat);
                    history.push("/profile");
                    // Retrieve
                    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
                } else {
                    alert("Sorry, your browser does not support Web Storage...");
                }
            }
        }
    }

    return (
        <div className="main__login">
            <img className="logo" src="img/GitHub-logo.png" alt="GitHub Logo"></img>
            <form className="details">
                <label>Personal Access Token</label>
                <span style={{color: 'red'}}>*</span>
                <br />
                <input type="text" className="pat" id="pat" required />
                <br />
                {/* {loggenIn} */}
                

                <Button className="login__btn" onClick={validatePAT}>
                    authorize
                </Button>
            </form>
        </div>
    )
}

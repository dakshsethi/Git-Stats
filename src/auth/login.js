import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function Login() {
    const history = useHistory();

    function validate(e) {
        e.preventDefault();

        let pat = document.querySelector('#pat').value;
        if(pat !== '') {
            let checkPAT = new RegExp('^[0-9a-zA-Z_]{40}$');
            if(checkPAT.test(pat)) {
                if (typeof(Storage) !== "undefined") {
                    // Store
                    localStorage.setItem("personal-access-token", pat);
                    history.push("/profile");
                } else {
                    alert("Sorry, your browser does not support Web Storage...");
                }
            }
        }
    }

    return (
        <div className="main__login">
            <img className="logo" src="img/GitHub-logo.png" alt="GitHub Logo"></img>
            <form className="details" onSubmit={validate}>
                <div class="form__group field">
                    <input type="text" autoComplete="off" class="form__field" placeholder="Personal Access Token" name="pat" id='pat' required />
                    <label for="pat" class="form__label">Personal Access Token</label>
                </div>
                <Button type="submit" className="login__btn">
                    authorize
                </Button>
            </form>
            
        </div>
    )
}

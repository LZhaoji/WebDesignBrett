import { useState } from "react";
import logo from "./img/logo.png";
import "./UserInfoForm.css";

function UserInfoForm({signModalRef, signModalCallback, signModal, setUser, password, setPassword,
            isName, setIsName, validpassword, setvalidpassword, darkMode, menuOn, setMenuOn, onBrowse}) {
  
  // 这个地方主要分成了两步， 初步预想是在submit之后，我再把用户的用户名填写到nav里面，这个useState就是先临时记录用户名，目前这个不能submit，所以我自己显示不出来
  const [subName, setSubName] = useState('');

  const checkName = (event) => {
    let length = event.target.value.length;
    if (length > 2 && length <= 20){
      if (!isName) {
        setIsName(!isName);
      }
    }else {
      if (isName) {
        setIsName(!isName);
      }
    }

    if (isName) {
      setSubName(event.target.value);
    }
  };

  const getpassword = (event) => {
    let t = event.target.value;
    setPassword(t);
  };

  const checkPassword = () => {
    let length = password.length;
    if (length >= 1) {
      if (!validpassword) {
        setvalidpassword(!validpassword);
      }
    } else {
      if (validpassword) {
        setvalidpassword(!validpassword);
      }
    }
  };

  const submitFunction = (event) => {
    checkPassword();

    if (!isName || !validpassword) { 
      event.preventDefault();
    }
    // 如果可以提交了，就将用户名写到nav里
    setUser(subName);
  };

  const signupFunction = (e) => {
    signModalCallback();
    if (menuOn){
      setMenuOn(!menuOn);
    }  
    onBrowse(e,'Sign Up'); 
  };

  return (
    <>
      <dialog className={`dialog ${!signModal ? 'dialog-close' : null}`} ref={signModalRef}>
        <form className="form" action="/subscribe" method="post">
            <img src={logo} alt="logo" className={`${darkMode ? 'form__img' : null}`}></img>
            <label className="form__name">
                <span className="name">name: </span>
                <input className="form__name-input " type="text" name="userName" onInput={checkName}></input>
                <div className={` ${isName ? 'valid' : 'invalid'}`}>Please input a name</div>
            </label>

            <label className="form__password">
                <span className="password">password: </span>
                <input className="form__password-input" type="text" name="userpassword" onInput={getpassword}></input>
                <div className={` ${!validpassword ? 'valid' : 'invalid'}`}>{!validpassword ? '' : 'Please input email'}</div>
            </label>

            <div className="form__link">Oh, I don't have an account, <a className="link__signup" href="/" onClick={ signupFunction }>Sign Up</a></div>
            <div className="form__button">
                <button className="form__button-submit" type="submit" onSubmit={ submitFunction }>Sign In</button>
                <button className="form__button-cancel" type="button" onClick={ signModalCallback }>Cancel</button>
            </div>
        </form>
      </dialog>
    </>
  );
}

export default UserInfoForm;
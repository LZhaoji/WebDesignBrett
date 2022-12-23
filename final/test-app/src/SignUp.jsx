import { useState } from "react";

import "./SignUp.css";

function SignUp({ name, setName, isName, setIsName, password, setPassword, isPassword, setIsPassword, conPassword, setConPassword,
        isConPassword, setIsConPassword, email, setEmail, isEmail, setIsEmail, phone, setPhone, country, setCountry, city, setCity, billingAddress1, setBillingAddress1, 
        billingAddress2, setBillingAddress2, billingCity, setBillingCity, billingState, setBillingState, billingZipCode, setBillingZipCode,
        shippingAddress1, setShippingAddress1, shippingAddress2, setShippingAddress2, shippingCity, setShippingCity, shippingState, setShippingState,
        shippingZipCode, setShippingZipCode, onBrowse, setUser
    }) {

    // email check format
    const pattern= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    // chevron up or down
    const [chevron1, setChevron1] = useState(false);
    const [chevron2, setChevron2] = useState(false);
    const [chevron3, setChevron3] = useState(false);
    const [same, setSame] = useState(false);

    const nameGet = (e) => {
        let n = e.target.value; 

        if (n.length < 1) { 
            if (isName) {
                setIsName(!isName);
            }
        } else {
            if (!isName) {
                setIsName(!isName);
            }
        }
        setName(n);
    }

    const passwordGet = (e) => {
        let n = e.target.value;

        if (n.length < 1) { 
            if (isPassword) {
                setIsPassword(!isPassword);
            }
        } else {
            if (!isPassword) {
                setIsPassword(!isPassword);
            }
        }

        setPassword(n);
    }

    const conPasswordGet = (e) => {
        let n = e.target.value; 
        if (n.length < 1) {
            if (isConPassword) {
                setIsConPassword(!isConPassword);
            }
        } else {
            if (n !== password) { 
                if (isConPassword) { 
                    setIsConPassword(!isConPassword);
                }
            } else { 
                setIsConPassword(true);
            }
        }
        setConPassword(n);
    }

    const emailGet = (e) => {
        var n = e.target.value;
        setIsEmail(pattern.test(n));
        setEmail(n);
    }

    const phoneGet = (e) => {
        setPhone(e.target.value); 
    }

    const countryGet = (e) => {
        setCountry(e.target.value); 
    }

    const cityGet = (e) => {
        setCity(e.target.value);
    }

    const billingAddress1Get = (e) => {
        setBillingAddress1(e.target.value);
    }

    const billingAddress2Get = (e) => {
        setBillingAddress2(e.target.value);
    }

    const billingCityGet = (e) => {
        setBillingCity(e.target.value);
    }

    const billingStateGet = (e) => {
        setBillingState(e.target.value);
    }

    const billingZipCodeGet = (e) => {
        setBillingZipCode(e.target.value);
    }

    const shippingAddress1Get = (e) => {
        setShippingAddress1(e.target.value);
    }

    const shippingAddress2Get = (e) => {
        setShippingAddress2(e.target.value);
    }

    const shippingCityGet = (e) => {
        setShippingCity(e.target.value);
    }

    const shippingStateGet = (e) => {
        setShippingState(e.target.value);
    }

    const shippingZipCodeGet = (e) => {
        setShippingZipCode(e.target.value);
    }

    const openMenu1 = () => {
        setChevron1(!chevron1);
    }

    const openMenu2= () => {
        setChevron2(!chevron2);
    }

    const openMenu3 = () => {
        setChevron3(!chevron3);
    }

    const sameAddress = () => {
        if(!same)
        {
            setShippingAddress1(billingAddress1);
            setShippingAddress2(billingAddress2);
            setShippingCity(billingCity);
            setShippingState(billingState);
            setShippingZipCode(billingZipCode);
        } else {
            setShippingAddress1('');
            setShippingAddress2('');
            setShippingCity('');
            setShippingState('');
            setShippingZipCode('');
        }
        setSame(!same);
    }

    return (
        <div className="signup__box">
            <div className="signup__basic">
                <button className="signup__button" onClick={ openMenu1 }>
                    <h3 className="signup__title">Personal Information </h3> 
                    {   
                        chevron1 ?
                            <i className="gg-chevron-down"></i>
                            : <i className="gg-chevron-up"></i>
                    }
                </button>
                <fieldset className={`${chevron1 ? 'fieldset-close' : 'fieldset'}`}>                    
                    <label>
                        <span className={`${isName ? null : 'fieldset__check-invalid'}`}>Name*:</span>
                        <input className={`${isName ? 'fieldset__input' : 'fieldset__input-invalid'}`} type="text" name="name" onInput={ nameGet } value={ name }></input>
                    </label>
                    <label>
                        <span className={`${isPassword ? null : 'fieldset__check-invalid'}`}>Password*:</span>
                        <input type="text" name="password" onInput={ passwordGet } value={ password }></input>
                    </label>
                    <label>
                        <span className={`${isConPassword ? null : 'fieldset__check-invalid'}`}>Confirm Password*:</span>
                        <input type="text" name="confirm password" onInput={ conPasswordGet } value={ conPassword }></input>
                    </label>
                    <label>
                        <span className={`${isEmail ? null : 'fieldset__check-invalid'}`}>Email*:</span>
                        <input type="text" name="email" onInput={ emailGet } value={email}></input>
                    </label>
                    <label>
                        <span>Phone:</span>
                        <input type="text" name="phone" onInput={ phoneGet } value={phone}></input>
                    </label>
                    <label>
                        <span>Country:</span>
                        <input type="text" name="country" onInput={ countryGet } value={country}></input>
                    </label>
                    <label>
                        <span>City:</span>
                        <input type="text" name="city" onInput={ cityGet } value={city}></input>
                    </label>
                </fieldset>  
            </div>
            <div className="signup__basic">
                <button className="signup__button" onClick={ openMenu2 }>
                    <h3 className="signup__title">Billing Address </h3> 
                    {   
                        chevron2 ?
                            <i className="gg-chevron-down"></i>
                            : <i className="gg-chevron-up"></i>
                    }
                </button>
                <fieldset className={`${chevron2 ? 'fieldset-close' : 'fieldset'}`}>                    
                    <label>
                        <span>Billing Address 1:</span>
                        <input type="text" name="name" onInput={ billingAddress1Get } value={billingAddress1}></input>
                    </label>
                    <label>
                        <span>Billing Address 2:</span>
                        <input type="text" name="password" onInput={ billingAddress2Get } value={billingAddress2}></input>
                    </label>
                    <label>
                        <span>Billing State:</span>
                        <input type="text" name="confirm password" onInput={ billingStateGet } value={billingState}></input>
                    </label>
                    <label>
                        <span>Billing City:</span>
                        <input type="text" name="phone" onInput={ billingCityGet } value={billingCity}></input>
                    </label>
                    <label>
                        <span>Billing ZipCode:</span>
                        <input type="text" name="country" onInput={ billingZipCodeGet } value={billingZipCode}></input>
                    </label>
                </fieldset>  
            </div>
            <div className="signup__basic">
                <button className="signup__button" onClick={ openMenu3 }>
                    <h3 className="signup__title">Shipping Address </h3> 
                    {   
                        chevron3 ?
                            <i className="gg-chevron-down"></i>
                            : <i className="gg-chevron-up"></i>
                    }
                </button>
                <fieldset className={`${chevron3 ? 'fieldset-close' : 'fieldset'}`}>
                    <button className="same-button" onClick={sameAddress}>
                        {!same ? <i className="gg-radio-check"></i> : <i className="gg-check-o"></i>}
                        Same as Billing Information
                    </button>              
                    <label>
                        <span>Shipping Address 1:</span>
                        <input type="text" name="name" onInput={ shippingAddress1Get } value={shippingAddress1}></input>
                    </label>
                    <label>
                        <span>Shipping Address 2:</span>
                        <input type="text" name="password" onInput={ shippingAddress2Get } value={shippingAddress2}></input>
                    </label>
                    <label>
                        <span>Shipping State:</span>
                        <input type="text" name="confirm password" onInput={ shippingStateGet } value={shippingState}></input>
                    </label>
                    <label>
                        <span>Shipping City:</span>
                        <input type="text" name="phone" onInput={ shippingCityGet } value={shippingCity}></input>
                    </label>
                    <label>
                        <span>Shipping ZipCode:</span>
                        <input type="text" name="country" onInput={ shippingZipCodeGet } value={shippingZipCode}></input>
                    </label>
                </fieldset>  
            </div>

            <a href="/" onClick={ (event) => {
                if (!isName || !isPassword || !isConPassword || !isEmail){
                    event.preventDefault();
                }else {
                    setUser(name);
                    onBrowse(event, 'Success');
                }
            } }>I'm ready to get Boston View!</a>
        </div>
        
    );
}

export default SignUp;
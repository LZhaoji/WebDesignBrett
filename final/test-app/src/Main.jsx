import { useState } from "react";

import DefaultShowMain from "./DefaultShowMain";
import Restaurant from "./Restaurant";
import VisitBoston from "./VisitBoston";
import GoToBoston from "./GoToBoston";
import Survey from "./Survey";
import SignUp from "./SignUp";
import Success from "./Success";

import "./Main.css";

function Main({link, setLink, menuOn, onBrowse, darkMode, setUser}) {

    // sign up information
    const [name, setName] = useState('');
    const [isName, setIsName] = useState(false);

    const [password, setPassword] = useState(' ');
    const [isPassword, setIsPassword] = useState(false);

    const [conPassword, setConPassword] = useState(' ');
    const [isConPassword, setIsConPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(false);

    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');

    const [billingAddress1, setBillingAddress1] = useState('');
    const [billingAddress2, setBillingAddress2] = useState('');

    const [billingCity, setBillingCity] = useState('');
    const [billingState, setBillingState] = useState('');
    const [billingZipCode, setBillingZipCode] = useState('');

    const [shippingAddress1, setShippingAddress1] = useState('');
    const [shippingAddress2, setShippingAddress2] = useState('');

    const [shippingCity, setShippingCity] = useState('');
    const [shippingState, setShippingState] = useState('');
    const [shippingZipCode, setShippingZipCode] = useState('');// sign up information
    

    return (
        <main className={` ${darkMode ? 'dark' : 'light'} ${menuOn ? 'main-navopen' : 'main'}`}>
            {
                link === 'HOME' ? <DefaultShowMain darkMode={darkMode} onBrowse={onBrowse}/>
                    : link === 'VISITING BOSTON' ? <VisitBoston setLink={setLink}/>
                        : link === 'RESTAURANT' ? <Restaurant darkMode={darkMode} setLink={setLink}/>
                            : link === 'GETTING TO BOSTON' ? <GoToBoston darkMode={darkMode} setLink={setLink}/>
                                : link === 'Survey' ? <Survey darkMode={darkMode} menuOn={menuOn}/>
                                    :  link === 'Sign Up' ? <SignUp name={name}
                                                                    setName={setName} isName={isName} setIsName={setIsName} password={password} setPassword={setPassword} isPassword={isPassword} setIsPassword={setIsPassword} conPassword={conPassword} setConPassword={setConPassword}
                                                                    isConPassword={isConPassword} setIsConPassword={setIsConPassword} email={email} setEmail={setEmail} isEmail={isEmail} setIsEmail={setIsEmail} phone={phone} setPhone={setPhone} country={country} setCountry={setCountry} city={city} setCity={setCity} billingAddress1={billingAddress1} setBillingAddress1={setBillingAddress1} 
                                                                    billingAddress2={billingAddress2} setBillingAddress2={setBillingAddress2} billingCity={billingCity} setBillingCity={setBillingCity} billingState={billingState} setBillingState={setBillingState} billingZipCode={billingZipCode} setBillingZipCode={setBillingZipCode}
                                                                    shippingAddress1={shippingAddress1} setShippingAddress1={setShippingAddress1} shippingAddress2={shippingAddress2} setShippingAddress2={setShippingAddress2} shippingCity={shippingCity} setShippingCity={setShippingCity} shippingState={shippingState} setShippingState={setShippingState}
                                                                    shippingZipCode={shippingZipCode} setShippingZipCode={setShippingZipCode}
                                                                    setUser={setUser} 
                                                                    onBrowse={onBrowse}/>
                                        : <Success name={name}
                                                    setName={setName} setPassword={setPassword} setConPassword={setConPassword}
                                                    setEmail={setEmail} setPhone={setPhone} setCountry={setCountry} setCity={setCity} setBillingAddress1={setBillingAddress1} 
                                                    setBillingAddress2={setBillingAddress2} setBillingCity={setBillingCity} setBillingState={setBillingState} setBillingZipCode={setBillingZipCode}
                                                    setShippingAddress1={setShippingAddress1} setShippingAddress2={setShippingAddress2} setShippingCity={setShippingCity} setShippingState={setShippingState}
                                                    setShippingZipCode={setShippingZipCode} setUser={setUser} 
                                                    onBrowse={onBrowse}/>
                                 

            }
        </main>
    );    
}

export default Main;

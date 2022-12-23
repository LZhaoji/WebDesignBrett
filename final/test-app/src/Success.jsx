import "./Success.css";

function Success({name, setName, setPassword, setConPassword, setEmail, setPhone, setCountry, setCity, setBillingAddress1, 
    setBillingAddress2, setBillingCity, setBillingState, setBillingZipCode, setShippingAddress1, setShippingAddress2, setShippingCity, setShippingState,
    setShippingZipCode, setUser, onBrowse}) {
    
        const go = (e) => {
            setUser(name);
            onBrowse(e, 'HOME');
            setName('');
            setPassword('');
            setConPassword('');
            setEmail('');
            setPhone('');
            setCountry('');
            setCity('');
            setBillingAddress1('');
            setBillingAddress2('');
            setBillingCity('');
            setBillingState('');
            setBillingZipCode('');
            setShippingAddress1('');
            setShippingAddress2('');
            setShippingCity('');
            setShippingState('');
            setShippingZipCode('');
        };

        const back = (e) => {
            onBrowse(e, 'Sign Up');
        }

        return (
            <div className="success__box">
                
                <div className="success">
                    <span>You, <p>{name}</p> registered successfully!</span>
                    <div>
                        <a href="/" onClick={ go }>Let's Browse!</a>
                        <a href="/" onClick={ back }>Something is wrong</a>
                    </div>
                </div>
            </div>
        );

}

export default Success;
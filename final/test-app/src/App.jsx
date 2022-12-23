import { useState, useRef } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import UserInfoForm from './UserInfoForm';

import './App.css';

function App() {

  // There are a lot of warnings, but it is too troublesome to modify, and there are many unnecessary parameters, which may be solved with UseRef

  // sign in, email, email length check, email format check and name check
  const [password, setPassword]                     = useState('');
  const [isName, setIsName]                   = useState(false);
  const [validpassword, setvalidpassword]           = useState(false);
  
  // const [check, setCheck]                     = useState(false);

  // set on browse link
  const [link, setLink]                       = useState('HOME');

  // set dark mode
  const [darkMode, setDarkMode]               = useState(false);
  
  // open nav menu
  const [menuOn, setMenuOn]                   = useState(false);

  // set user name in nav
  const [user, setUser]                       = useState("Sign In");

  // open sign in dialog
  const signModalRef                          = useRef(null);
  const [signModal, showSignModal]            = useState(false);
  const signModalCallback = function() {
    if (!signModal) {
      signModalRef.current.showModal();
      showSignModal(!signModal);
    }else {
      signModalRef.current.close();
      showSignModal(!signModal);
    }
  };

  function onBrowse(event, target) {
    event.preventDefault();
    setLink(target);
  }

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <a className='skiplink' 
         href='.main' 
         aria-label='click and go into main'>Skip to Content</a>

      <Header darkMode={darkMode} 
              showDarkMode={setDarkMode} 
              signModalCallback={signModalCallback}
              user={user}
              menuOn={menuOn}
              setMenuOn={setMenuOn}
              onBrowse={onBrowse}/>
              
      <Main darkMode={darkMode}
            menuOn={menuOn} 
            setMenuOn={setMenuOn}
            link={link}
            setUser={setUser}
            setLink={setLink}
            onBrowse={onBrowse}/>

      <Footer menuOn={menuOn}/>
      <UserInfoForm signModalRef={signModalRef} 
                    signModalCallback={signModalCallback}
                    signModal={signModal}
                    setUser={setUser}
                    password={password}
                    setPassword={setPassword}
                    validpassword={validpassword}
                    setvalidpassword={setvalidpassword}
                    isName={isName}
                    setIsName={setIsName}
                    darkMode={darkMode}
                    menuOn={menuOn}
                    setMenuOn={setMenuOn}
                    onBrowse={onBrowse}/>
    </div>
  );
}

export default App;

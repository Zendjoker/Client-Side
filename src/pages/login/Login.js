import "./login.css"
import {useContext , useRef} from 'react'
import {loginCall} from '../../apiCall'
import {AuthContext} from "../../context/AuthContext"
import {CircularProgress} from  '@material-ui/core'
import { Link } from 'react-router-dom'
import facebookLogo from "../register/facecbook.svg";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };


  return (
    <div>
                <>
  <div className="container">
    <div className="backgroundimg">
      <img
        className="image-background"
        src="https://www.instagram.com/static/images/homepage/phones/home-phones.png/1dc085cdb87d.png"
        alt=""
      />
      <div className="image-in" id="cf">
        <img
          className="bottom"
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
          alt=""
        />
        <img
          className="top"
          src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
          alt=""
        />
      </div>
    </div>
    <div className="into-container">
      <div className="signup">
        <img
          className="instagram-logo"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt=""
        />
        <form 
        className="form-middle" 
        action="index.php" 
        method="post" 
        onSubmit={handleClick}>
          
          <input
            className="user labellogin"
            placeholder="Email"
              type="email"
              required
              ref={email}
          />
          <input
            className="mdp labellogin"
            placeholder="Password"
            type="password"
            required
            minLength="6"
            ref={password}
          />

          {/* <input
            disabled={isFetching}
            className="submit"
            type="submit"
            name="submit"
            defaultValue="Se connecter"
          /> */}

          <button 
          className="submit" 
          type="submit" 
          disabled={isFetching}>
              {isFetching ? (
                <CircularProgress style={
                  {color:"white",
                  size:"20px"}
                } />
              ) : (
                "Log In"
              )}
            </button>
           


          <div
            style={{
              display: "flex",
              marginTop: 30,
              flexDirection: "row",
              alignItems: "center"
            }}
          >

            <div
              style={{
                backgroundColor: "rgb(219, 219, 219)",
                height: 1,
                width: 140
              }}
            />
            <div
              style={{
                fontWeight: 400,
                color: "gray",
                fontSize: 12,
                padding: "0px 20px 0px 20px",
                fontFamily: '"Roboto", sans-serif'
              }}
            >
              OU
            </div>
            <div
              style={{
                backgroundColor: "rgb(219, 219, 219)",
                height: 1,
                width: 140
              }}
            />
          </div>
          <div className="fb-cnc">
            <div className="loginwithfb">
              <img src={facebookLogo} alt="facebookimg" /> 
              <span className="s2txt">Se connecter avec Facebook</span>
            </div>
            <div className="mdp-forget">
              <span className="forget-text">Mot de passe oublié ?</span>
            </div>
            <div className="noaccount">
              <span className="forget-text">
                Vous n’avez pas de compte ?
                <Link className="links" to={"/register"}>
                  <span className="insc">Inscrivez-vous</span>
                  </Link>
              </span>
            </div>
          </div>
          <span className="downloadapp">Téléchargez l’application.</span>
          <div className="store">
            <img
              className="storeimg app"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_french-fr.png/485fcccb52dc.png"
              alt="App Store"
            />
            <img
              className="storeimg play"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_french-fr.png/46aa4b6fd58d.png"
              alt="Google Play"
            />
          </div>
          </form>
      </div>
    </div>
  </div>
  
  <div className="footer-container">
    <span className="footer-text">Meta</span>
    <span className="footer-text">À propos</span>
    <span className="footer-text">Blog</span>
    <span className="footer-text">Emplois</span>
    <span className="footer-text">Aide</span>
    <span className="footer-text">API</span>
    <span className="footer-text">Confidentialité</span>
    <span className="footer-text">Conditions</span>
    <span className="footer-text">Comptes principaux</span>
    <span className="footer-text">Hashtags</span>
    <span className="footer-text">Lieux</span>
    <span className="footer-text">Instagram Lite</span>
    <span className="footer-text">
      Importation des contacts et non-utilisateurs
    </span>
  </div>
  <div className="under-text-footer">
    <span className="footer-text">Danse</span>
    <span className="footer-text">Alimentation et boissons</span>
    <span className="footer-text">Maison et jardin</span>
    <span className="footer-text">Musique</span>
    <span className="footer-text">Arts visuels</span>
  </div>
  <div className="under-text-footer">
    <span className="footer-text">Francais</span>
    <span className="footer-text">© 2022 Instagram par Adam Azouz</span>
  </div>
</>

            </div>
  )
}

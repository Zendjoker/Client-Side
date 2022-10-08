import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import facebookLogo from "./facecbook.svg";
import "./register.css";

export default function Register(params) {
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,

        };
        try {
            await axios.post("/auth/register", user);
            history.push("/login");
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <>
        <div className="all-container-register">
  <div className="content-container">
    <div className="top-esential">
      <div className="forum-container">
        <div className="logo-instagram-top">
          <img
            className="img-instagram-logo"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="logo"
          />
        </div>
        <div className="title-register-top">
          <span>
            Inscrivez-vous pour voir les photos et vidéos de vos amis.
          </span>
        </div>
        <button className="button-connect-with-facebook">
          <img className="facebook-svg" src={facebookLogo} alt="imaghe" />
          Se connecter avec Facebook
        </button>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            marginBottom: 8,
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(219, 219, 219)",
              height: 1,
              width: 90
            }}
          />
          <div
            style={{
              fontWeight: 200,
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
              width: 90
            }}
          />
        </div>
        <form className="form-middle" action="register.php" method="POST" onSubmit={handleClick}>
          <div className="form-register">
            <div className="input-container">
              <input
                className="input-register labellogin"
                type="text"
                name="First Name"
                required
                ref={firstName}
                placeholder="firstName"
              />
            </div>
            <div className="input-container">
              <input
                className="input-register labellogin"
                type="text"
                name="Last Name"
                required
                ref={lastName}
                placeholder="lastName"
              />
            </div>
            <div className="input-container">
              <input
                className="input-register labellogin"
                type="text"
                required
                ref={email}
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="input-container">
              <input
                className="input-register labellogin"
                required
                ref={password}
                type="password"
                name="password"
                placeholder="Mot de passe"
              />
            </div>
          </div>
          <div className="text-under-register">
            <span className="text-explain">
              Les personnes qui utilisent notre service ont pu importer vos
              coordonnées sur Instagram. En savoir plus
            </span>
            <span className="text-explain">
              En vous inscrivant, vous acceptez nos Conditions générales, notre
              Politique de confidentialité et notre Politique d’utilisation des
              cookies.
            </span>
          </div>
          <button 
          type="submit"
          className="button-register">
            
            S'inscrire
            </button>
        
        </form>
      </div>
      <div className="noaccount">

      
        <span className="forget-text">
          Vous avez un compte ?
          
          <Link className="links" to ="/login" >
            <span className="insc">Connectez-vous</span>
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
      <span className="footer-text">Francais</span>
      <span className="footer-text">© 2022 Instagram par Adam Azouz</span>
    </div>
  </div>
</div>

        </>
    )


};

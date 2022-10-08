import './sidebar.css';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { Users } from "../../dummyData";

export default function Sidebar( ) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [profilePicture, setProfilePicture] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${user._id}`);
      setProfilePicture(res.data.profilePicture);
    };
    fetchUser();
  }, [user._id]);
  
    return(
        <>
        <div className="leftsideconatiner">
  <div className="top-sidebar">
    <div className="top-sidebar-logo">
    <Link to={`/profile/${user.firstName}${user.lastName}`}>
      <img
        className="pf-user"
        src={
          profilePicture
            ?  profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      </Link>
    </div>
    <div className="top-sidebar-text">
      <span className="collect-fn-ln">{`${user.firstName}.${user.lastName}`}</span>
      <span className="username-sidebar">{`${user.firstName} ${user.lastName}`}</span>
    </div>
    <div className="change-account-container">
    <Link to={`/profile/${user.firstName}${user.lastName}`}>
      <span className="change-account">Basculer</span>
      </Link>
    </div>
  </div>
  <div className="suggestion-friend">
    <div className="first-topline">
      <span className="text-nc-top">Suggestions pour vous</span>
      <button className="show-more-button">Voir tout</button>
    </div>
    <div className="user-random-suggest">
      <div className="user-suggest">
        <div className="user-suggest-img">
          <img
            className="suggest-img"
            src="https://images-platform.99static.com//golewV8mPKpNsu0xp9_3Bvz40To=/245x254:1247x1256/fit-in/590x590/99designs-contests-attachments/105/105180/attachment_105180593"
            alt="user-suggest-img"
          />
        </div>
        <div className="user-suggest-text">
          <span className="user-suggest-name">Username</span>
          <span className="common-friend">Débute sur Instagram</span>
        </div>
        <div className="user-suggest-follow">
          <button className="follow-button">Suivre</button>
        </div>
      </div>
      <div className="user-suggest">
        <div className="user-suggest-img">
          <img
            className="suggest-img"
            src="https://images-platform.99static.com//golewV8mPKpNsu0xp9_3Bvz40To=/245x254:1247x1256/fit-in/590x590/99designs-contests-attachments/105/105180/attachment_105180593"
            alt="user-suggest-img"
          />
        </div>
        <div className="user-suggest-text">
          <span className="user-suggest-name">Username</span>
          <span className="common-friend">Débute sur Instagram</span>
        </div>
        <div className="user-suggest-follow">
          <button className="follow-button">Suivre</button>
        </div>
      </div>
      <div className="user-suggest">
        <div className="user-suggest-img">
          <img
            className="suggest-img"
            src="https://images-platform.99static.com//golewV8mPKpNsu0xp9_3Bvz40To=/245x254:1247x1256/fit-in/590x590/99designs-contests-attachments/105/105180/attachment_105180593"
            alt="user-suggest-img"
          />
        </div>
        <div className="user-suggest-text">
          <span className="user-suggest-name">Username</span>
          <span className="common-friend">Débute sur Instagram</span>
        </div>
        <div className="user-suggest-follow">
          <button className="follow-button">Suivre</button>
        </div>
      </div>
      <div className="user-suggest">
        <div className="user-suggest-img">
          <img
            className="suggest-img"
            src="https://images-platform.99static.com//golewV8mPKpNsu0xp9_3Bvz40To=/245x254:1247x1256/fit-in/590x590/99designs-contests-attachments/105/105180/attachment_105180593"
            alt="user-suggest-img"
          />
        </div>
        <div className="user-suggest-text">
          <span className="user-suggest-name">Username</span>
          <span className="common-friend">Débute sur Instagram</span>
        </div>
        <div className="user-suggest-follow">
          <button className="follow-button">Suivre</button>
        </div>
      </div>
      <div className="user-suggest">
        <div className="user-suggest-img">
          <img
            className="suggest-img"
            src="https://images-platform.99static.com//golewV8mPKpNsu0xp9_3Bvz40To=/245x254:1247x1256/fit-in/590x590/99designs-contests-attachments/105/105180/attachment_105180593"
            alt="user-suggest-img"
          />
        </div>
        <div className="user-suggest-text">
          <span className="user-suggest-name">Username</span>
          <span className="common-friend">Débute sur Instagram</span>
        </div>
        <div className="user-suggest-follow-container">
          <button className="follow-button">Suivre</button>
        </div>
      </div>
    </div>
    <div className="footer-side-bar">
      <div className="top-footer">
        <span className="about space-b">À propos</span>.
        <span className="help space-b">Aide</span>
        <span className="press space-b">Presse</span>
        <span className="api space-b">API</span>
        <span className="jobs space-b">Emplois</span>
        <span className="locations space-b">Confidentialité</span>
        <span className="top-accounts space-b">Conditions</span>
        <span className="hashtags space-b">Lieux</span>
        <span className="language space-b">Langue</span>
      </div>
      <div className="created-by-Adam-Azouz">
        <span className="created-by">© 2022 INSTAGRAM PAR ADAM AZOUZ</span>
      </div>
    </div>
  </div>
</div>

        </>
    )
    
};

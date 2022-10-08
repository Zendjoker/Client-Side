import './profile.css';
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Navbar from "../../components/Navbar/Navbar";

export default function Profile() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const firstName = useParams().firstName;
  const [profilePicture, setProfilePicture] = useState("");
  

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?_id=${firstName}`);
      setUser(res.data);
    };
    fetchUser();
  }, [firstName]);

  

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${user._id}`);
      setProfilePicture(res.data.profilePicture);
    };
    fetchUser();
  }, [user._id]);

    return (
        <>
        <Navbar />
        <div className="top-profile-component">
  <div className="right-top-side-profil-div">
    <div className="profil-picture">
      <img
        className="profile-picture-img"
        src={
          profilePicture
            ?  profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
    </div>
    <div className="top-profile-description-container">
      <div className="one-top">
        <span className="username-profile">{`${user.firstName}.${user.lastName}`}</span>
        <div className="to-align-svg-to-button">
          <button className="change-profile">Modifier profil</button>
          <svg
            className="svg-icon-right-profile"
            aria-label="Options"
            color="#262626"
            fill="#262626"
            height={24}
            role="img"
            viewBox="0 0 24 24"
            width={24}
          >
            <circle
              cx={12}
              cy={12}
              fill="none"
              r="8.635"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
            <path
              d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
        </div>
      </div>
      <div className="interaction-followers">
        <div className="interaction">
          <span className="number-interaction">3</span>
          <span className="text-interaction">publications</span>
        </div>
        <div className="interaction">
          <span className="number-interaction">897</span>
          <span className="text-interaction"> followers</span>
        </div>
        <div className="interaction">
          <span className="number-interaction">436</span>
          <span className="text-interaction">suivi(e)s</span>
        </div>
      </div>
      <div className="description-bio-user">
        <span className="username-profile-bio">{`${user.firstName}${user.lastName}`}</span>
        <span className="description-bio">{user.bio}</span>
      </div>
    </div>
  </div>
  <div className="souvenirs-story">
    <div className="reels-souvenirs-story-save">
      <img
        className="story-selector"
        src="https://static9.depositphotos.com/1074452/1184/i/950/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg"
        alt=""
      />
      <span className="name-of-saved-story">Happy</span>
    </div>
    <div className="reels-souvenirs-story-save">
      <img
        className="story-selector"
        src="https://static9.depositphotos.com/1074452/1184/i/950/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg"
        alt=""
      />
      <span className="name-of-saved-story">Cool</span>
    </div>
    <div className="reels-souvenirs-story-save">
      <img
        className="story-selector"
        src="https://static9.depositphotos.com/1074452/1184/i/950/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg"
        alt=""
      />
      <span className="name-of-saved-story">Chill</span>
    </div>
    <div className="reels-souvenirs-story-save">
      <svg
        className="add-icon-svg"
        aria-label="Icône Plus"
        color="#c7c7c7"
        fill="#c7c7c7"
        height={44}
        role="img"
        viewBox="0 0 24 24"
        width={44}
        style={{}}
      >
        <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z" />
      </svg>
      <span className="name-of-saved-story">Nouveau</span>
    </div>
  </div>
</div>

        </>
    )
        
    
};

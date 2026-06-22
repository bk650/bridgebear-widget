import "./ProfileImg.css";

import PlaceholderImg from "../../assets/lawyer/lawyer-placeholder.png";

export function ProfileImg() {
  return (
    <div className="profile-img">
      <img
        src={PlaceholderImg}
        alt="Lawyer"
      />
    </div>
  );
}
import "./ProfileImg.css";
import PlaceholderImg from "../../Assets/Lawyer/LawyerPlaceholder.png";

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
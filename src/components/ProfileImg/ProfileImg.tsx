import "./ProfileImg.css";
import PlaceholderImg from "../../assets/Lawyer/LawyerPlaceholder.png";

interface ProfileImgProps {
  imageUrl?: string;
}

export function ProfileImg({
  imageUrl,
}: ProfileImgProps) {
  
  return (
    <div className="profile-img">
      <img
        src={imageUrl ?? PlaceholderImg}
        alt="Lawyer"
      />
    </div>
  );
}
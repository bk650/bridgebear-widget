import "./ProfileImg.css";

interface ProfileImgProps {
  src?: string;
}

export function ProfileImg({
  src,
}: ProfileImgProps) {
  return (
    <div className="profile-img">
      {src && (
        <img
          src={src}
          alt="Profile"
        />
      )}
    </div>
  );
}
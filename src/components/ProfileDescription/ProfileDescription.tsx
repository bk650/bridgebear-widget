import "./ProfileDescription.css";

interface ProfileDescriptionProps {
  nameRank: string;
  description: string;
}

export function ProfileDescription({
  nameRank,
  description,
}: ProfileDescriptionProps) {
  return (
    <div className="profile-description">
      <div className="profile-description__name-rank t-tag">
        {nameRank}
      </div>

      <div className="profile-description__description t-body">
        {description}
      </div>
    </div>
  );
}
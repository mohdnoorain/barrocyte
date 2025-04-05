import Link from "next/link";
import "./InfoCard.css";

export interface InfoCardProps {
  title: string;
  cardPoints?: Array<{ icon: string; label: string }>;
  details?: string;
  imgUrl?: string;
  url?: string;
  customClass?: string;
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const {
    title,
    details,
    imgUrl,
    cardPoints = [],
    url = "",
    customClass = "",
  } = props;

  return (
    <div className={`infoCard ${customClass}`}>
      {imgUrl && <img src={imgUrl} alt={title} />}
      <h3 className="cardTitle">{title}</h3>
      {details && <p className="cardDetails">{details}</p>}

      {cardPoints?.length > 0 && (
        <ul className="cardPoints">
          {cardPoints.map((point, index) => (
            <li key={index}>
              <span className="material-icons cardPointsIcon">
                {point.icon}
              </span>
              {point.label}
            </li>
          ))}
        </ul>
      )}

      {url && (
        <Link href={url} className="readMore">
          Read more
          <span className="material-icons readmoreIcon">arrow_forward</span>
        </Link>
      )}
    </div>
  );
};

export default InfoCard;

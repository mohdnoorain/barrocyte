import Link from "next/link";
import "./InfoCard.css";

/**
 @param example
  {
    title: "Salesforce Cloud",
    details:
      "Leverage the capabilities of our tailored Salesforce clouds to improve collaboration, streamline workflows, enhance productivity, and drive success. All our Salesforce solutions will help authorities make better decisions.",
    imgUrl: "https://nsiqinfotech.com/wp-content/uploads/2024/07/salesforce-cloud.png",
    cardPoints: [
      { icon: "medical_services", label: "Web Services" },
      { icon: "medical_services", label: "Cloud Integration" },
      { icon: "medical_services", label: "Data Security" },
      { icon: "medical_services", label: "API Management" },
      { icon: "medical_services", label: "Automation Tools" },
    ],
    url: "/salesforce-cloud", // Added URL field
  };
 */

export interface InfoCard {
    title: string,
    cardPoints: Array<{ icon: string, label: string }>,

    // these props with '?' are not compulsary and if not passed they will not show.
    details?: string,
    imgUrl?: string,
    url?: string,
    /* 
     for writing custom css for specific use case just write css in section and pass classname here
     use !important predence if property doesn't apply.
     target any part of card using css selector for ex. img => .customCls > img{}
    */
    customClass?: string
}

const InfoCard = (props: InfoCard) => {
    const { title, details, imgUrl, cardPoints, url = "", customClass = "" } = props;

    return (
        <div className={"infoCard " + customClass}>
            {imgUrl && < img src={imgUrl} alt={imgUrl} />}
            {<h3 className="cardTitle">{title}</h3>}
            {details && <p className="cardDetails">{details}</p>}
            <ul className="cardPoints">
                {
                    cardPoints?.length > 0 &&
                    cardPoints.map((point, index) => {
                        const iconCls = "material-icons cardPointsIcon " + point.icon;
                        return (
                            <li key={index}>
                                <span className={iconCls}>
                                    arrow_forward
                                </span>
                                {point.label}
                            </li>
                        )
                    })
                }
            </ul>
            {
                url &&
                <Link href={url} className="readMore">
                    Read more
                    <span className="material-icons readmoreIcon">
                        arrow_forward
                    </span>
                </Link>
            }
        </div>
    )
};

export default InfoCard;
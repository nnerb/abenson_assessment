
import ContactDetailsSection from "./contact-details";
import OnlinePersonalShopperSection from "./online-personal-shopping";
import { contactDetails, onlinePersonalShopper } from "../data/contacts-data";
import TrailingIcon from "../icon/trailing-icon";

const Contacts = () => {

  return ( 
    <ul className="last:border-b-[1px]">
      <OnlinePersonalShopperSection onlinePersonalShopper={onlinePersonalShopper} />
      <li className="py-4 px-2 border-t-[1px]">
        <a 
          className="flex flex-col gap-4" 
          href="https://www.abenson.com/pages/viber-personal-shopper"
          target="_blank"
        >
          <div className="flex w-full items-center">
            <h1 className="text-xs leading-[18px]">In-Store Personal Shopper</h1>
            <div className="ml-auto">
              <TrailingIcon />
            </div>
          </div>
        </a>
      </li>
      <ContactDetailsSection
        contactDetails={contactDetails}
      />
    </ul>
   );
}
 
export default Contacts;
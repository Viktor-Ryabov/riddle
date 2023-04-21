import React from "react";
import Styles from "./Contacts.module.css";
import { ContaktLink } from "../../UI/ContaktLink/ContaktLink.js";
import { ContactsBank } from "../../constants/ContactsBank.js";

const Contacts = () => {
    return (
        <div className={Styles.contacts}>
            {ContactsBank.map((contactItem) => (
                <ContaktLink
                    href={contactItem.href}
                    src={contactItem.icon}
                    alt={contactItem.linkName}
                    text={contactItem.text}
                    key={contactItem.id}
                />
            ))}
        </div>
    );
};

export default Contacts;

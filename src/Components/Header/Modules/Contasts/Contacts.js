import React from "react";
import Styles from "./Contacts.module.css";
import { ContaktLink } from "../../UI/ContaktLink/ContaktLink.js";
import { ContactsBank } from "../../constants/ContactsBank";

const Contacts = () => {
    return (
        <div className={Styles.contacts}>
                <ContaktLink
                    href={ContactsBank.href}
                    src={ContactsBank.icon}
                    alt={ContactsBank.linkName}
                    text={ContactsBank.text}
                    key={ContactsBank.id}
                />
        </div>
    );
};

export default Contacts;

import { LightningElement } from 'lwc';
import {RefreshEvent} from 'lightning/refresh';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
export default class RefreshApi extends LightningElement {
    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    emailField = EMAIL_FIELD; 
    accountField = ACCOUNT_FIELD;

    handleSuccess(event){
        console.log('Contact Id-->>', event.detail.Id);

        this.dispatchEvent(new RefreshEvent())
    }
}
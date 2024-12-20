// Description: This is the main entry point for the Google Apps Script project.

// import { getGmailAliases, getGmailLabels } from './gmail';
// import { sendmail } from './server/mail';
import { doGet } from './server/webapp';

// global.sendmail = sendmail;
global.doGet = doGet;

// global.getGmailLabels = getGmailLabels;
// global.getGmailAliases = getGmailAliases;

// "enabledAdvancedServices": [
// {
//     "userSymbol": "Gmail",
//     "serviceId": "gmail",
//     "version": "v1"
//   },
//   {
//     "userSymbol": "Drive",
//     "serviceId": "drive",
//     "version": "v2"
//   }
// ],
// "libraries": [
//   {
//     "userSymbol": "OAuth1",
//     "libraryId": "1CXDCY5sqT9ph64fFwSzVtXnbjpSfWdRymafDrtIZ7Z_hwysTY7IIhi7s",
//     "version": "18"
//   },
//   {
//     "userSymbol": "OAuth2",
//     "libraryId": "1B7FSrk5Zi6L1rSxxTDgDEUsPzlukDsi4KGuTMorsTQHhGBzBkMun4iDF",
//     "version": "38"
//   }
// ],

// "oauthScopes": [
//     "https://www.googleapis.com/auth/gmail.send",
//     "https://www.googleapis.com/auth/drive.file",
//     "https://www.googleapis.com/auth/script.external_request",
//     "https://www.googleapis.com/auth/script.scriptapp",
//     "https://www.googleapis.com/auth/script.send_mail",
//     "https://www.googleapis.com/auth/spreadsheets",
//     "https://www.googleapis.com/auth/script.container.ui"
//   ],

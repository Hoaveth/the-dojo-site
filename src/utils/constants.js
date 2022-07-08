//Action Types for Dispatch
export const LOGIN_ACTION = "LOGIN";
export const LOGOUT_ACTION = "LOGOUT";
export const AUTH_IS_READY = "AUTH_IS_READY";

//Actions for Firestore
export const ADD_TRANSACTION = "ADD_TRANSACTION";
export const IS_PENDING = "IS_PENDING";
export const ADDED_DOCUMENT = "ADDED_DOCUMENT";
export const DELETED_DOCUMENT = "DELETED_DOCUMENT";
export const FIRESTORE_ERROR = "FIRESTORE_ERROR";

//collections

//messages
export const DATA_FETCH_ERROR = "Could not fetch the data.";
export const LOGIN_ERROR = "There was a problem logging in.";
export const TRANSACTION_SUCCESS = "Transaction added successfully.";
export const TRANSACTION_ERROR = "Transaction failed";
export const DOCUMENT_ADD_SUCCESS = "Document deleted successfully.";
export const SIGN_UP_ERROR = "Could not complete the signing up process.";

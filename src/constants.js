let DEBUG = false;
let host = 'http://127.0.0.1:8000';
// enter test publish key
let stripePublishKey = "pk_test_51Ij3TrBZGm721ul74gHGW55HeLcSxZYuRLH3SbZp7OyXC0yvnwoXCGQrI6Z3ZtcWcVgWjUabicQfPc5qMMBUypXm006Z7wNu4x"; 
if (!DEBUG) {
  host = 'http://192.81.211.78/';
  // enter LIVE publish key
  stripePublishKey = "pk_test_51Ij3TrBZGm721ul74gHGW55HeLcSxZYuRLH3SbZp7OyXC0yvnwoXCGQrI6Z3ZtcWcVgWjUabicQfPc5qMMBUypXm006Z7wNu4x";
}

export { stripePublishKey }

export const APIEndpoint = `${host}/api`;

export const fileUploadURL = `${APIEndpoint}/demo/`;
export const facialRecognitionURL = `${APIEndpoint}/upload/`;
export const emailURL = `${APIEndpoint}/email/`;
export const changeEmailURL = `${APIEndpoint}/change-email/`;
export const changePasswordURL = `${APIEndpoint}/change-password/`;
export const billingURL = `${APIEndpoint}/billing/`;
export const subscribeURL = `${APIEndpoint}/subscribe/`;
export const APIkeyURL = `${APIEndpoint}/api-key/`;
export const cancelSubscriptionURL = `${APIEndpoint}/cancel-subscription/`;

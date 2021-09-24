declare module '*.png';
declare module '*.PNG';

declare module '*.jpg';
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module 'styled-components';
declare module 'react-charts';
declare module 'react-facebook-login';
declare module 'react-facebook-login/dist/facebook-login-render-props';
declare module 'react-google-recaptcha';
declare module 'react-detect-offline';
declare module 'jp-postalcode-lookup';

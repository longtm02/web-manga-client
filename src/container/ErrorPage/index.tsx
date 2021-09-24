import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imageNotFound from './../../../public/img/errorPage.png';

const ErrorPage = (props: any) => {
  const { code = '', title = '', msg = '', buttons = null } = props;
  return (
    <Wrap className="page-error">
      <div className="container-fruild w-100">
        {code === '503' ? (
          <div className="row">
            <div className={`error-content m-0 mt-5 text-center`}>
              <div className="notFound-text">
                <div style={{ height: '150px' }}></div>
                <p className="errorCode"> {title}</p>
                <p className="errorTitle">ERR_INTERNET_DISCONNECTED</p>
                <p className="w-100 text-center">{msg}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-6">
              <img
                className="notFound-img"
                title="no-error"
                alt="error"
                src={imageNotFound}
              />
            </div>
            <div className={`error-content col-6`}>
              <div className="notFound-text">
                <p className="errorCode">{`ERROR ${code}`}</p>
                <p className="errorTitle">{title}</p>
                <p className="errorMessage">{msg}</p>
                {buttons}
              </div>
            </div>
          </div>
        )}
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  background-color: var(--white);
  display: flex;
  .row {
    height: 100vh;
    margin: 0px !important;
    .notFound-img {
      width: 100%;
      height: 100vh;
      display: block;
      margin: auto;
      object-fit: contain;
    }
    .error-content {
      margin: auto auto;
      display: block;
      object-fit: contain;
      box-sizing: border-box;
      .notFound-text {
        background-color: var(--white);
        margin-left: 2%;
        .errorCode {
          font-size: 2.5vw;
          font-weight: bold;
        }
        .errorTitle {
          font-size: 1.5vw;
          font-weight: bold;
        }
        .errorMessage {
          font-size: 1vw;
          padding-right: 25%;
        }
      }
    }
    .link {
      width: 10em;
      height: 3em;
      line-height: 2.5rem;
      text-decoration: none;
      padding: 0.1em;
      border-radius: 1em;
      font-weight: bold;
      font-size: 1rem;
      border: 2px solid #78f5ac;
      text-align: center;
    }
  }
`;

const DisableAccountPage = () => {
  return (
    <ErrorPage
      code="403"
      title="Forbidden"
      msg="This store is disabled!"
    ></ErrorPage>
  );
};

const NotFoundPage = () => {
  return (
    <ErrorPage
      buttons={
        <Link className="link" to="/dashboard" type="button">
          Home
        </Link>
      }
      code="404"
      title="Page not found"
      msg="The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage."
    ></ErrorPage>
  );
};

const LinkExpired = () => {
  return (
    <ErrorPage
      buttons={
        <React.Fragment>
          <button type="button" className="ml-2">
            Resend link
          </button>
        </React.Fragment>
      }
      code="400"
      title="Bad Request"
      msg="Your password reset link is invalid, has expired or has already been used to change the password."
    ></ErrorPage>
  );
};

export default ErrorPage;
export { DisableAccountPage, NotFoundPage, LinkExpired };

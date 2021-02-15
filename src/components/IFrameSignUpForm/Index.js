import React from 'react';
import useScript from '../../hooks/useScript';
import styles from './iFrameSignupForm.module.css';
import { ACTIVE_CAMPAIGN_IFRAME_FORM } from '../../constants';

//TODO Make reusuable with script prop
const IFrameSignUpForm = () => {
  useScript(ACTIVE_CAMPAIGN_IFRAME_FORM);
  return (
    <div className={styles.iframe}>
      <div className="_form_1"></div>
    </div>
  );
};

export default IFrameSignUpForm;

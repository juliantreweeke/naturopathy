import React, { useState } from 'react';
import Button from '../../components/Button/Index';
import Stack from '../../components/Stack/Index';
import styles from './signUpForm.module.css';
import useSignUpForm from '../../hooks/useSignUpForm';
import { fetchPost } from '../../utils/fetchMethods';
import { ACTIVE_CAMPAIGN_URI } from '../../constants';

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const requestEmailSignUp = async (e) => {
    const body = inputs;
    setError(null);
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetchPost(
        ACTIVE_CAMPAIGN_URI,
        body,
        process.env.GATSBY_ACTIVE_CAMPAIGN_KEY,
      );

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(error);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(
    handleSubmit,
  );

  if (loading) return <div>loading...</div>;
  if (success) return <div>Thank you!</div>;

  return (
    <form className={styles.form} onSubmit={requestEmailSignUp}>
      <Stack gutter="20" gutterEnd="24">
        <div>
          <label className={styles.formLabel}>First Name</label>
          <input
            className={styles.formInput}
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={inputs.firstName}
            required
          />
        </div>
        <div>
          <label className={styles.formLabel}>Last Name</label>
          <input
            className={styles.formInput}
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={inputs.lastName}
            required
          />
        </div>
        <div>
          <label className={styles.formLabel}>Email Address</label>
          <input
            className={styles.formInput}
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
      </Stack>
      <Button type="submit">Download Now!</Button>
      {error && <div>something went wrong sorry please try again</div>}
    </form>
  );
};

export default SignUpForm;

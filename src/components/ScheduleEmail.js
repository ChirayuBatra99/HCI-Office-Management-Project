import React, { useState } from 'react';
import styles from './ScheduleEmail.module.scss'; // Import CSS module

const ScheduleEmail = () => {
  const [reportContext, setReportContext] = useState('');
  const [frequency, setFrequency] = useState('weekly'); // Default frequency
  const [emailRecipients, setEmailRecipients] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleReportContextChange = (event) => {
    setReportContext(event.target.value);
  };

  const handleFrequencyChange = (selectedFrequency) => {
    setFrequency(selectedFrequency);
  };

  const handleEmailRecipientsChange = (event) => {
    setEmailRecipients(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate user input (implement validation logic)
    if (!reportContext || !emailRecipients) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const scheduleData = {
      reportContext,
      frequency,
      emailRecipients,
    };

    try {
      // Send scheduling request to your backend API (implement API call)
      const response = await fetch('/api/schedule-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scheduleData),
      });

      if (!response.ok) {
        throw new Error('Failed to schedule email.');
      }

      setReportContext('');
      setFrequency('weekly');
      setEmailRecipients('');
      setErrorMessage(null);

      alert('Email scheduling successful!'); // Replace with a success notification
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.scheduleemailcontainer}>
      <h2 className={styles.headingContainer}>Schedule Automated Email</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="report-context">Report Context:</label>
        <input
          type="text"
          id="report-context"
          value={reportContext}
          onChange={handleReportContextChange}
          placeholder="Enter report context (e.g., Sales Report, Marketing Metrics)"
          className={styles.textInput} // Apply CSS class
        />
        {/* <FrequencySelector // Optional component to handle frequency selection
          selectedFrequency={frequency}
          onFrequencyChange={handleFrequencyChange}
        /> */}
        <label htmlFor="email-recipients">Email Recipients (comma-separated):</label>
        <input
          type="text"
          id="email-recipients"
          value={emailRecipients}
          onChange={handleEmailRecipientsChange}
          placeholder="Enter email addresses (e.g., founder1@company.com, founder2@company.com)"
          className={styles.textInput} // Apply CSS class
        />
            <select
          id="frequency"
          value={frequency}
          onChange={(e) => handleFrequencyChange(e.target.value)}
          className={styles.dropdown}
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
         <label htmlFor="start-date">Start Date (DD/MM/YY):</label>
        <input
          type="text"
          id="start-date"
          placeholder="Enter start date"
          className={styles.dateInput} // Apply CSS class
        />
        <label htmlFor="end-date">End Date (DD/MM/YY):</label>
        <input
          type="text"
          id="end-date"
          placeholder="Enter end date"
          className={styles.dateInput} // Apply CSS class
        />

       
        <button type="submit" className={styles.submitButton}>
          Schedule Email
        </button>
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </form>
    </div>
  );
};

// Optional FrequencySelector component (implementation omitted for brevity)
// Could be implemented as a separate component or dropdown menu depending on UI preference

export default ScheduleEmail;

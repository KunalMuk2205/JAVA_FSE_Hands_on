import React from 'react';
import styles from './CohortDetails.module.css';

const Cohorts = [
  { code: 'JA-01', program: 'Java FSE Deepskilling', start: '2026-07-01', end: '2026-08-15', status: 'ongoing' },
  { code: 'RC-02', program: 'React JS Deepskilling', start: '2026-07-10', end: '2026-08-25', status: 'ongoing' },
  { code: 'AN-03', program: 'Angular Web Apps', start: '2026-05-01', end: '2026-06-15', status: 'completed' },
  { code: 'MS-04', program: 'Spring Cloud Microservices', start: '2026-04-10', end: '2026-05-25', status: 'completed' }
];

const CohortDetails = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Cognizant Academy Cohorts Dashboard</h2>
      <div>
        {Cohorts.map(cohort => {
          const headingColor = cohort.status === 'ongoing' ? 'green' : 'blue';
          return (
            <div key={cohort.code} className={styles.box}>
              <h3 style={{ color: headingColor }}>{cohort.program}</h3>
              <dl>
                <dt>Cohort Code</dt>
                <dd>{cohort.code}</dd>
                <dt>Start Date</dt>
                <dd>{cohort.start}</dd>
                <dt>End Date</dt>
                <dd>{cohort.end}</dd>
                <dt>Status</dt>
                <dd style={{ textTransform: 'capitalize' }}>{cohort.status}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CohortDetails;

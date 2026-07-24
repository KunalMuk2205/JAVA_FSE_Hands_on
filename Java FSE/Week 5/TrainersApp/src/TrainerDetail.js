import React from 'react';
import { useParams, Link } from 'react-router-dom';

const TrainerDetail = ({ trainers }) => {
  const { id } = useParams();
  const trainer = trainers.find(t => t.TrainerId === parseInt(id));

  if (!trainer) {
    return <h3 style={{ padding: '20px', color: 'red' }}>Trainer with ID {id} not found.</h3>;
  }

  return (
    <div style={{ border: '2px solid #8A2BE2', borderRadius: '10px', padding: '25px', width: '450px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#8A2BE2', borderBottom: '2px solid #8A2BE2', paddingBottom: '10px' }}>Trainer Profile</h2>
      <dl style={{ fontSize: '16px', lineHeight: '1.8' }}>
        <dt><strong>Trainer ID:</strong></dt>
        <dd>{trainer.TrainerId}</dd>
        <dt><strong>Name:</strong></dt>
        <dd>{trainer.Name}</dd>
        <dt><strong>Email:</strong></dt>
        <dd>{trainer.Email}</dd>
        <dt><strong>Phone:</strong></dt>
        <dd>{trainer.Phone}</dd>
        <dt><strong>Technology:</strong></dt>
        <dd>{trainer.Technology}</dd>
        <dt><strong>Special Skills:</strong></dt>
        <dd>{trainer.Skills}</dd>
      </dl>
      <Link to="/trainers" style={{ display: 'inline-block', marginTop: '15px', color: '#8A2BE2', textDecoration: 'none', fontWeight: 'bold' }}>
        &larr; Back to List
      </Link>
    </div>
  );
};

export default TrainerDetail;

import React, { useState, useEffect } from 'react';
import { getPrints, createPrint, updatePrint, deletePrint } from '../api/printsApi';

function PrintsComponent() {
  const [prints, setPrints] = useState([]);

  useEffect(() => {
    fetchPrints();
  }, []);

  const fetchPrints = async () => {
    try {
      const data = await getPrints();
      setPrints(data);
    } catch (error) {
      console.error('Error fetching prints:', error);
    }
  };

  const handleCreate = async (printData) => {
    try {
      await createPrint(printData);
      fetchPrints();
    } catch (error) {
      console.error('Error creating print:', error);
    }
  };

  const handleUpdate = async (printId, printData) => {
    try {
      await updatePrint(printId, printData);
      fetchPrints();
    } catch (error) {
      console.error('Error updating print:', error);
    }
  };

  const handleDelete = async (printId) => {
    try {
      await deletePrint(printId);
      fetchPrints();
    } catch (error) {
      console.error('Error deleting print:', error);
    }
  };

  return (
    <div>
      <h1>3D Prints</h1>
      {prints.map(print => (
        <div key={print.id}>
          <h2>{print.name}</h2>
          <p>{print.description}</p>
          <button onClick={() => handleDelete(print.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default PrintsComponent;

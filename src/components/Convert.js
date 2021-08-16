import React, { useEffect, useState } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('new language or text');
  }, [language, text])

  return (
    <h1>convert</h1>
  );
}

export default Convert;
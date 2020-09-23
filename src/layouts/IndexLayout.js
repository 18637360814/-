import React from 'react';
import CommenHeader from '@/components/CommenHeader';

const IndexLayout = ({ children }) => {
  return (
    <>
      <CommenHeader />
      {children}
    </>
  );
};

export default IndexLayout;

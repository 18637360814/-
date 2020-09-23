import React from 'react';
import CommenHeader from '@/components/CommenHeader';
import CommenFooter from '@/components/CommenFooter';

const IndexLayout = ({ children }) => {
  return (
    <>
      <CommenHeader />
      {children}
      <CommenFooter />
    </>
  );
};

export default IndexLayout;

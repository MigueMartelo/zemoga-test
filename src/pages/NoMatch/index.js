import React from 'react';

import Layout from '../../components/common/Layout';

const NoMatch = () => {
  const styles = {
    paddingTop: 150,
  };
  return (
    <Layout>
      <main style={styles}>
        <h2>404</h2>
        <h3>Page not found</h3>
      </main>
    </Layout>
  );
};

export default NoMatch;

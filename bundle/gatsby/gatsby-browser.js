/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from './src/components/Layout';
import { wrapRootElement } from './src/hooks/useAuth';

export function wrapPageElement({ element, props }) {
  return (
    <wrapRootElement>
      <Layout {...props}>{element}</Layout>
    </wrapRootElement>
  );
}

import React from 'react';
import Layout from '../components/Layout';
import get from 'lodash/get';
import { graphql } from 'gatsby';

class Confirm extends React.Component {
  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title');
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <main>
          <h1>Just one more thing...</h1>
          <p>
            Thank you for subscribing. You will need to check your inbox and
            confirm your subscription.
          </p>
        </main>
      </Layout>
    );
  }
}

export const query = graphql`
  query ConfirmSiteData {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Confirm;

import React from 'react';
import App from '../components/App/Index';
import Banner from '../components/Banner/Index';
import CardGroup from '../components/CardGroup/Index';
import Heading from '../components/Heading/Index';
import { graphql } from 'gatsby';

export const blogPageQuery = graphql`
  query BlogPageQuery {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
      nodes {
        slug
        heading
        image {
          file {
            url
          }
        }
      }
    }
  }
`

const BlogPage = ({data}) => {
  const { nodes } = data.allContentfulBlogPost;
  const blogPosts = nodes.map((node) => {
    return {
      ...node,
      image: node.image.file.url
    }
  })

  const [ latestBlogPost, ...remainingBlogPosts ] =  blogPosts;
  const latestBlogRoute = `blog/${latestBlogPost.slug}`;

  return (
    <App>
      <section className="full">
        <Banner backgroundImage={latestBlogPost.image} route={latestBlogRoute} linkText="READ MORE">
          <Heading></Heading>
          <Heading headingLevel="h1" variant="white" style={{ fontSize: '5.2rem' }}>
            {latestBlogPost.heading}
          </Heading>
        </Banner>

        <CardGroup cardGroupVariant cardVariant="black" cards={remainingBlogPosts} headingLevel="h2" />
      </section>
    </App>
  );
};

export default BlogPage;

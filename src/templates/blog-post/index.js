import React from 'react';
import App from '../../components/App/Index';
import Banner from '../../components/Banner/Index';
import CardGroup from '../../components/CardGroup/Index';
import Heading from '../../components/Heading/Index';
import styles from './blog-post.module.css';
import { graphql } from 'gatsby';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      heading
      post {
        json
      }
      references {
        json
      }
      image {
        file {
          url
        }
      }
    }
    allContentfulBlogPost(
      sort: { fields: createdAt, order: DESC }
      filter: { slug: { ne: $slug } }
    ) {
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
`;

const BlogPost = ({ data }) => {
  const { allContentfulBlogPost, contentfulBlogPost } = data;

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (_node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (_node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (_node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (_node, children) => <h4>{children}</h4>,
      [BLOCKS.EMBEDDED_ASSET]: (node, _children) => (
        <img src={`https:${node.data.target.fields.file['en-US'].url}`} />
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => <p>{children}</p>,
    },
    renderMark: {},
  };

  const blogPosts = allContentfulBlogPost.nodes.map((node) => {
    return {
      ...node,
      image: node.image.file.url,
    };
  });

  return (
    <App>
      <section className={styles.blogPost}>
        <Banner backgroundImage={contentfulBlogPost.image.file.url}>
          <Heading
            headingLevel="h1"
            variant="white"
            style={{ fontSize: '5.2rem' }}
          >
            {contentfulBlogPost.heading}
          </Heading>
        </Banner>
        <div className={styles.post}>
          <Heading
            headingLevel="h2"
            variant="black"
            style={{ fontSize: '1.8rem' }}
          >
            {contentfulBlogPost.heading}
          </Heading>
          {documentToReactComponents(contentfulBlogPost.post.json, options)}
          <Heading
            headingLevel="h3"
            variant="black"
            style={{ fontSize: '1.8rem' }}
          >
            References
          </Heading>
          {documentToReactComponents(
            contentfulBlogPost.references.json,
            options,
          )}
        </div>
        <div className={styles.readMore}>
          <Heading
            headingLevel="h2"
            variant="black"
            style={{ fontSize: '2.4rem' }}
          >
            Read More
          </Heading>
        </div>

        <CardGroup
          cardGroupVariant
          cardVariant="black"
          cards={blogPosts}
          headingLevel="h3"
        />
      </section>
    </App>
  );
};

export default BlogPost;

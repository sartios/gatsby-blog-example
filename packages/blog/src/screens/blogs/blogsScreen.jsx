import React from 'react';

import Container from '../../components/shared/container';
import Grid from './components/grid/grid';
import Column from './components/column/column';
import PostListing from '../../components/elements/postListing/postListing';

/**
 * Blogs screen component.
 */
const BlogsScreen = (props) => (
  <Container>
    <Grid>
      <Column name="blogs">
        <PostListing postEdges={props.postEdges} />
      </Column>
    </Grid>
  </Container>
  );

  const { array } = React.PropTypes;

  BlogsScreen.propTypes = {
    postEdges: array
  }

  BlogsScreen.defaultProps = {
    postEdges: []
  }

export default BlogsScreen;


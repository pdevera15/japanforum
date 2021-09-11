import gql from "graphql-tag"

export const POSTS = gql`
  {
    posts {
      author_id
      title
      context
      date_created
    }
  }
`

export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($query: MovieQueryInput!, $set: MovieUpdateInput!) {
    updateOneMovie(query: $query, set: $set) {
      _id
      title
    }
  }
`

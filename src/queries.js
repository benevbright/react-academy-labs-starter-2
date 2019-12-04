export const ALL_ARTICLES = `
query {
  articles {
    id
    title
  }
}
`;

export const CREATE_ARTICLE = `
mutation createArticle($article: ArticleInput) {
  createArticle (article: $article) {
    id
    title
  }
}
`;

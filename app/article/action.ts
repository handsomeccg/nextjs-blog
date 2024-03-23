export const addArticle = (article) => {
  let curList = []
  try {
    curList = JSON.parse(localStorage.getItem('articleList'))
  } catch (e) {
  }
  curList.push({
    title: article.title,
    content: article.content,
    time: article.time
  })
  localStorage.setItem('articleList', JSON.stringify(curList))
}
import Article from "./Article";

function ArticleList() {
  const articles = [
    { title: "React Basics", text: "Learn the basics of React components and JSX." },
    { title: "Props in React", text: "Props allow components to receive dynamic data." },
    { title: "State Management", text: "Manage component state using useState and useEffect." },
    { title: "React Hooks", text: "Hooks provide powerful functionalities to function components." },
  ];

  return (
    <main>
      {articles.map((article, index) => (
        <Article key={index} title={article.title} text={article.text} />
      ))}
    </main>
  );
}

export default ArticleList;

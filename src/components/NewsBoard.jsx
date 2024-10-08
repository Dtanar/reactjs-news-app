import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

export default function NewsBoard({category}) {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        // url variable
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

        try {
            fetch(url).then(response => response.json()).then(data => setArticles(
                data.articles
            ));
        } catch (error) {
            console.log(error)
        }
    }, [category])

    return (
        <div>
            <h2 className="text-center">Lastest <span className="badge bg-danger">News</span></h2>

            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}

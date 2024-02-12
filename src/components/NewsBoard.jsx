import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

function NewsBoard({ category, newsArticles }) {
	return (
		<div style={{ paddingTop: "20px", minHeight: "85vh" }}>
			<h3 style={{ textTransform: "capitalize" }}>
				Latest News :{" "}
				<span style={{ color: "tomato" }}>{category}</span>
			</h3>
			<div className="news-container">
				{newsArticles.length > 0 ? (
					newsArticles.map((article, index) => {
						return (
							<NewsCard
								key={index}
								title={article.title}
								description={article.description}
								imageUrl={article.urlToImage}
								pubilishedAt={article.pubilishedAt}
								source={article.source.name}
								readMore={article.url}
							/>
						);
					})
				) : (
					<div className="text-center">
						<div className="spinner-border" role="status">
							<span className="visually-hidden">Loading...</span>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default NewsBoard;
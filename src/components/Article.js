import React from "react";

function Article({ title, date, preview, time }) {
	// const timeTaken = (time) => {
	// 	console.log(time.ceil(5));
	// };
	return (
		<div>
			<article>
				<h3>{title}</h3>
				{date ? <small>{date}</small> : <small>January 1, 1970</small>}

				<p>{preview}</p>
			</article>
		</div>
	);
}

export default Article;
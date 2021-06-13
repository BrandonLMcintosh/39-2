/**Part 2
Define a Tweet component which takes as props 
the username of the user who wrote the tweet, 
the name of the user who wrote the tweet, 
the date of the tweet, 
and the message being tweeted.

Create an App component that renders at least three tweets.
 */

const Tweet = ({ username, name, date, message }) => (
	<div>
		<p>@{username}</p>
		<p>{name}</p>
		<p>{date}</p>
		<p>{message}</p>
	</div>
);

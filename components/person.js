/**Part 3
Create a component called Person. Inside of this component, render a p tag which displays 
“Learn some information about this person”. 
Each person should have name and age properties.

If the person is over 18 years old, display an additional h3 that says “please go vote!”. 
Otherwise, display an h3 that says “you must be 18”. 
If the person’s name is longer than 8 characters, only display the first six characters of their name.

Add a property called hobbies to your Person component that accepts an array of hobbies (an array of strings). 
Your Person component should list each one of these hobbies as an li.

Add an App component that renders at least three copies of the Person component on the page. 
*/

const Person = ({ name, age, hobbies }) => (
	<div>
		<p>Learn some information about this person</p>
		<h1>Name: {name.length > 8 ? name.slice(0, 5) : name}</h1>
		<h2>Age: {age}</h2>
		<h3>Voting: {age >= 18 ? "please go vote!" : "you must be 18"}</h3>
		<p>Hobbies: </p>
		<ul>
			{hobbies.map((h, idx) => (
				<li key={idx}>{h}</li>
			))}
		</ul>
	</div>
);

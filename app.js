const App = () => (
	<div>
		<h1>Part 1</h1>
		<FirstComponent />
		<NamedComponent name="Robert Paulson" />
		<h1>Part 2</h1>
		<Tweet
			username="AnakinSkyswimmer"
			name="Anakin"
			date={new Date(Date.now()).toString()}
			message="I was the chosen one."
		/>
		<Tweet
			username="PossiblyDonald"
			name="Not Donny"
			date={new Date(Date.now()).toString()}
			message="Our jokes are the best jokes. Other jokes are dumb. THese jokes are great. Superb."
		/>
		<Tweet
			username="BatmanButGreenColored"
			name="Bruce Pain"
			date={new Date(Date.now()).toString()}
			message="I'm not sure why I'm green... but I kinda like it. It's trendy."
		/>
		<h1>Part 3</h1>
		<Person
			name="Bobby"
			age={12}
			hobbies={["basketball", "singing", "dancing"]}
		/>
		<Person
			name="Victoria"
			age={19}
			hobbies={["apex legends", "art", "pwning noobs"]}
		/>
		<Person
			name="Sinclaire"
			age={6}
			hobbies={[
				"Eating grapes",
				"disney movies",
				"eating dirt occassionally",
			]}
		/>
		;
	</div>
);

ReactDOM.render(<App />, document.querySelector("#root"));

Daily Workout
=======
	- Static page that defines the daily workout
	- Each exercise can be checked off
	- Include a box for weigh in that day

Impl details
	- use local storage for now to store statistics
	- use canvas for graphs
	- look into using backbone for models/views/routes
	- will be hosted on github because there is currently no plans to persist data past local storage
		- If plans change on persisting data, break out into new project and change backend to mongo

Models - @WIP will most likely change based on needs
	
	*** Defined as json that can be stored on github ***

	Workout = colleciton of exercises
	Exercise = a single type of exercise sets ex. 3 sets of 10 pushups
		- Array of reps
			- 3 sets of 10 pushups
				[10,10,10]
		- Type of exercise
			ex. Pushup
		- Type of completion
			- Checkbox
			- Input

	Exercise defined as: <number of> sets of <number of reps> <workout>

	Day BLAH
		Workout = #1
			- 3 sets of 10 pushups
				- Will allow the completion of each set in an exercise

				<checkbox> for set 1
				<checkbox> for set 2
				<checkbox> for set 3

			- 3 sets of 15 squats
			- 3 sets of 20 situps

		Weight: <Blank Box>

Graphs
	- Plot Weight vs. Time
	
===

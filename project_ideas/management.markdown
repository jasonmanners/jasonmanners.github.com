Management Tool
==============

A simple, extendable, lightweight, management tool to help keep everything on track.

Allows a user to:
- Create/manage clients
	- This includes a rating system and additional note fields
- Create/manage projects
	- Clients can have multiple projects
	- Users can be assigned to projects
	- Description/rating system of project (simple-hard, quick-lengthy)
	- Attach expenses to projects
	- Upload weekly toggl reports (Integrate with toggl)
	- (Stretch)API for taking toggl and uploading to openair
	- Integrate with asana
	
- Expenses
	- Ability to attach to client/project
	- Default to General
- Travel
	- Checkbox for toll
	- Miles traveled
	- Add link to maps
		- Possibly integrate to google maps



Relationships
===

Clients
=
Clients have many Projects
Clients have many expenses
Clients have many Travels

Users
=
Users have many Clients -> through projects
Users have many Projects
Users have many Expenses
Users have many Travels


Project
=
Projects belong to Clients
Projects belong to Users
Projects have many Expenses
Projects have many Travels

Expenses
=
Expenses belong to Client -> through projects
Expenses belong to Projects
Expenses belong to User

Travels <- Expenses
=
Travels belong to Client -> through projects
Travels belong to Project
Travels belong to User
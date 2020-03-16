# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

	- rails new my_app -d postfresql -T



2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get -	- HTTP verb, meaning if the URL matches what's in quotes, display the page this is pointing to

library -	- The word in the URL that follows the domain-name/ip (separated by a forward slash), that directs the user to a different page;
	It will let the Rails application know the user is requesting a different page under that identifier.

:id -	- The ' :id ' will obtain a value if one is placed after ' /library/ ' in the URL.  The value will then be stored in the ' params ' object.
	The value of  ' :id ' can then be referenced by calling ' params[:id] ' inside the method that ' /library/ ' redirects to.

book -	- 'Book' (lowercase) refers to the controller named ' book '

show -	- This refers to the method ' show ' inside of the controller ' book ' (marked by the separator ' # ')



3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

	1.	Generate a migration.

	2.	Inside the new migration file, write:
		   "   add_column     :<MY-MODEL-NAME>,    :<PARENT-MODEL-NAME>_id,    :integer   "

	3.	Type  ' db:migrate '  in the console.  (inside your app folder)



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

	- rails generate model  Person   shirt:boolean   pants:boolean   shoes:boolean



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

	1.	Inside your ' Person ' Model (class), write:
		   "   validates   :shirt,   :pants,   :shoes,   presence:  true   "
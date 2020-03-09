# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   


1. Rails follows an MVC pattern. What does that mean?

  Your answer:

	- Model, View, Controller
	- That means the work is divided into three parts.
		1.	The Model:   for the data.
		2.	The View:     for the visible pages (website)
		3.	The Controller:    what to do when certain actions are taken ( e.g.  goint to a specific extendtion of the website's URL )



  Researched answer:

	MVC Pattern stands for Model-View-Controller Pattern. This pattern is used to separate application's concerns.

	1.   Model 		- Represents an object or JAVA POJO* carrying data.  It can also have logic to update controller if its data changes.
				> (  JAVA POJO )   =    " Plain Old Java Objects "
					-  A straightforward type with no references to any particular frameworks.
					-  A collection of properties and methods.
					( PS: )	JAVA POJOs do not need to follow and real conventions.  
						Many Java libraries support by default something called the ' JavaBean ' naming convention.
					- - (  https://www.baeldung.com/java-pojo-class  )

	2.   View 		- Represents the visualization of the data that model contains.

	3.   Controller	- It controls the flow of data into the model object, and updates the View whenever the data changes.
			> Acts on both the Model and View.
			( It keeps view and model separate. )

	


2. What is a gem?

  Your answer:

	- A dependency for your code to run.


  Researched answer:

	- A Ruby ' gem ' is a self-contained program or library

	> " RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them.  "
		- Wikipedia:
		 (  https://en.wikipedia.org/wiki/RubyGems  )

	(  https://guides.rubygems.org/what-is-a-gem/  )




3. Why is it important to have validations in your application?

  Your answer:

	- to prevent unwanted ' nils ', data outside of your desired range, or unique data, etc..


  Researched answer:

	- Data validation is vital to ensure the data is clean, correct and useful.
	
 	>  If the data isn't validated, any errors you get in your data are going to flow right through into the data warehouse.

	>  A little bit of thought and planning upfront goes a long way to ensure your data is accurate and clean.
	    ( And that you are capturing the right sort of data to run your analysis with. )

	(  https://deltadna.com/blog/importance-data-validation/  )




4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer:
	
	< Relationship >   -   A Person (or many persons) would use a computer to look up things on the internet.

	-  The Person would hold the foreign key, which would refer to the computer they use.
	    A Computer can have multiple users (People/Persons).
	    The Person, in this senario, would only use THAT one Computer.


  Researched answer:

	- Wouldn't this be subjective to how you want to oganize your data?

	[ I found this noteworthy ]  =  (  https://www.toptal.com/ruby-on-rails/top-10-mistakes-that-rails-programmers-make  )

	


5. What is object-relational mapping?

  Your answer:

	- This is what we are doing when we do the ' has_many ' & ' belongs_to ' stuff with our models.
	    Instead of having Objects 'contain' other Objects, we link them by how they are related to each other.

  Researched answer:

	ORM

	-  A programming technique for converting data between incompatible type systems using object-oriented programming languages.
	(  I think this is where JSON 'objects' come in handy between Ruby and Javascript, right?  )


	[ brief and informative ]   =   (  https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a  )
	




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes	=	Routs to fall back on if the user goes to a link (still in your website) that does not link to a particular page?
- json	=	A String representation of a Javascript Object; easily transferable to other languages, like Ruby.
- API	=	An Interface designed by someone containin the code to do a particular task.   The programmer can use these to send something in, and get something out.  ( e.g.  and Encyrption API )
- Endpoints	=	Where the servers communicate?
- Strong params	=	Arguments in Ruby On Rails that follow strict rules?


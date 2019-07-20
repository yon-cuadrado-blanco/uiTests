Feature: Create users in the website http://newtours.demoaut.com/index.php
	In ordet to register users with an excel file

@Register_Users
Scenario: Register users with data from Excel File
	Given I navigate to the page "RegistrationUsersUrl"
	When I register users with the data of the excel file
	Then The users are created correctly

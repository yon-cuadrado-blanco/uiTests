Feature: WebElements Checks
	In order to avoid silly mistakes
	As a tester
	I want to be able to check webelements properties

@WebElementsChecks
Scenario: Check Color of Webelement
	When I navigate to the page WebElementsColor
	Then The color of the element element should be red

@WebElementsChecks
Scenario: Check the element line number
	When I navigate to the page RegistrationUsersUrl
	Then The element has '3' lines
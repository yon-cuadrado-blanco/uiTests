Feature: FieldLimitations
	In order to test a textbox
	As a user
	I want to make sure it behaves as expected

@Fields_Limitation
Scenario: Max Size of a field
	Given I navigate to the page FieldLimitationsUrl
	And I type the value firstName0firstName0firstName0firstName0firstName0firstName0luou in the name field
	Then the extra characters of the value 'firstName0firstName0firstName0firstName0firstName0firstName0luou' are trimmed by the right

	
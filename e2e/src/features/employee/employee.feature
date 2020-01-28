Feature: Employee
  As a user
  I should be able to create, read, update, and delete an Employee record

  Scenario: Create an Employee record
    Given I am on the dashboard page
    When I create an employee record
    Then I should see the success message "Success: Data has been added!"
     And I should see the employee record in the list

  Scenario: Read an Employee record
    Given I am on the actual dashboard page
    When I Select an employee 
    Then I should Read the Employee Status 
     
  Scenario: Delete an Employee record
    Given I am on the Present dashboard page
    When  I delete the employee record
    Then  It should remove in the Table 
    
   Scenario: Update an Employee record
    Given I am on the Recent dashboard page
    When  I Click the Table on the employee record
    Then  It should be see the success msg 
     
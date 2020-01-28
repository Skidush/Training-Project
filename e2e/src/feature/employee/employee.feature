@Employee
Feature: Employee
    As a user
    I should be able to create, read, update and delete some data on the table.
    
Scenario: Create an Employee
    Given I am on the dashboard
    When I create new employee
    Then I should see the success message "Success: Data has been added!"
    And I should see the employee record in the list

Scenario: Delete an Existing Employee
    Given I am on the dashboard page
    When I delete an existing employee
    Then I should see the employee is deleted from the table

Scenario: Update the info of Employee
    Given Im at the dashboard to update info
    When I update the selected employee
    Then I should view the success message "Success: Data has been updated!"
    And I should see the new info saved
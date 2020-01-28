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
    Then I should see if the deleted record was not in the table anymore

Scenario: Update an Existing Employee
    Given I am on the dashboard for update
    When I update an existing employee
    Then I should see the success message in update "Success: Data has been updated!"
        And I should see the updated employee record in the list
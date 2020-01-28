@Creation
    Feature: Creation
    As a User
    I should be able to create a new Employee

    Scenario: Create
    Given I am on the dashboard
    When I create an Employee
    Then I should see the success message "Success: Data has been added!"
    And I should see an employee should be added on the list

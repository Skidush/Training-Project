@Delete
    Feature: Delete
    As a User
    I should be able to delete an employee detail

    Scenario: Delete
    Given I am still on the dashboard
    When I deleted an Employee
    Then The deleted data will not be shown in the table

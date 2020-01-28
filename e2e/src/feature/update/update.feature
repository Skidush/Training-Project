@Update
    Feature: Update
    As a User
    I should be able to edit employee details

    Scenario: Update
    Given I am on the dashboard2
    When I updated an Employee
    Then I should see the updated success message "Data has been updated!"
    And I should see the updated data on the table

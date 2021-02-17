@Read
    Feature: Read
    As a User
    I should be able to see the employee table

    Scenario: Read
    
    Given I redirected on the dashboard
    When I browse the table
    Then I should see the details of different employees
    
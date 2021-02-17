@Security
    Feature: Security
    As a User
    I should be able to access the system with proper credentials

    Scenario: Login
    Given I am on the login page
    When I log in
    Then I should be redirected to the dashboard


Feature: Security of the application
    As a registered user, I want to be able to access the application
    As an unregistered user, I should not be able to access the application

    Scenario Outline: Login as <role>
        Given I am on the "login" page
        When I "login" as "<role>"
        Then I should see the "dashboard" page
    
    Examples:
        | role      |
        | Admin     |
        | Employee  |

    Scenario: Logout
        Given I am on the "dashboard" page
        When I "logout"
        Then I should see the "login" page
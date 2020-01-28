Feature: Security 
 As a User 
  I should be able to access the sytem with proper credentials 

Scenario: Login 
    Given I am on the  Login Page
    When  I log in 
    Then  I should be redirected to dashboard                                         
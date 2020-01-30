@Employee
Feature: Employee
  As a user
  I should be able to create, read, update, and delete an Employee record

  @Create
  Scenario: Create an Employee record
    Given I am on the dashboard page
    When I "create" an employee record
    Then I should see the success message "Success: Data has been added!"
      And I should "see" the "created" employee record in the list

  @Read
  Scenario: Read Employee records
    Given I am on the dashboard page
    When I "read" an employee record
    Then I should see the employee records in the list

  @Update
  Scenario: Update an Employee record
    Given I am on the dashboard page
      And There are existing employee records
    When I "update" an employee record
    Then I should see the success message "Success: Data has been updated!"
      And I should "see" the "updated" employee record in the list

  @Delete
  Scenario: Delete an Employee record
    Given I am on the dashboard page
      And There are existing employee records
    When I "delete" an employee record
    Then I should "not see" the "deleted" employee record in the list

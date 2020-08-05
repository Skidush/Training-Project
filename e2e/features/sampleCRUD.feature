Feature: CRUD Sample application
    As an Admin user, I want to create, update and delete an Employee on my system

    @Login
    Scenario: Login
        Given I am on the "login" page
        When I "login" as "Admin"
        Then I should see the "dashboard" page

    @Create
    Scenario: Create a new employee
        Given I am on the "dashboard" page
        When I "create" an employee entry
        Then I should see the "add" success message
            And I should see it "added" on the employee list table

    @Read
    Scenario: Read an employee details
        Given I am on the "dashboard" page
        When I "view" an employee entry
        Then I should see the employee entry details on the list

    @Update
    Scenario: Update an employee
        Given I am on the "dashboard" page
        When I "update" an employee entry
        Then I should see the "update" success message
            And I should see it "updated" on the employee list table

    @Delete
    Scenario: Update an employee
        Given I am on the "dashboard" page
        When I "delete" an employee entry
        Then I should see the "update" success message
            And I should see it "deleted" on the employee list table
export interface EmployeeDetails {
  id?: number;
  firstName: string;
  lastName: string;
  country?: string;
  nationality?: string;
  company?: string;
  designation?: string;
  workExp?: string;
  dataSource?: string;
}

export class Employee implements EmployeeDetails {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  nationality: string;
  company: string;
  designation: string;
  workExp: string;
  dataSource: string;

  constructor(
      employeeDetails: EmployeeDetails
  ) {
    this.id = employeeDetails.id;
    this.firstName = employeeDetails.firstName;
    this.lastName = employeeDetails.lastName;
    this.company = employeeDetails.company;
    this.country = employeeDetails.country;
    this.nationality = employeeDetails.nationality;
    this.designation = employeeDetails.designation;
    this.workExp = employeeDetails.workExp;
    this.dataSource = employeeDetails.dataSource;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  get getCountry() {
    return this.country;
  }

  get getNationality() {
    return this.nationality;
  }

  get getCompany() {
    return this.company;
  }

  get getDesignation() {
    return this.designation;
  }

  get getWorkExp() {
    return this.workExp;
  }

  get getDataSource() {
    return this.dataSource;
  }

  set updateFirstName(newName: string) {
    this.firstName = newName;
  }

  set updateLastName(newLastName: string) {
    this.lastName = newLastName;
  }

  set setCountry(newCountry: string) {
    this.country = newCountry;
  }

  set setNationality(newNationality: string) {
    this.nationality = newNationality;
  }

  set setCompany(newCompany: string) {
    this.company = newCompany;
  }

  set setDesignation(newDesignation: string) {
    this.designation = newDesignation;
  }

  set setWorkExp(newWorkExp: string) {
    this.workExp = newWorkExp;
  }

  set setDataSource(newDataSource: string) {
    this.dataSource = newDataSource;
  }

  get details(): EmployeeDetails {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      country: this.country,
      nationality: this.nationality,
      company: this.company,
      designation: this.designation,
      workExp: this.workExp,
      dataSource: this.dataSource,
    };
  }
}

import { Employee } from './employee';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employee: Employee[] = [
    {
      id: 0,
      firstName: 'Brenden',
      lastName: 'Wagner',
      country: 'United States of America, California',
      nationality: 'American',
      company: 'Facebook',
      designation: 'Software Engineer',
      workExp: 8,
      cv: '',
      dataSource: 'Facebook'
    },
    {
      id: 1,
      firstName: 'Cara',
      lastName: 'Steves',
      country: 'United States of America, New York',
      nationality: 'American',
      company: 'Walmart',
      designation: 'Sales Assistant',
      workExp: 5,
      cv: '',
      dataSource: 'Google'
    },
    {
      id: 2,
      firstName: 'Cedric',
      lastName: 'Kelly',
      country: 'Scotland, Glasgow City',
      nationality: 'Scottish',
      company: 'Data Tech',
      designation: 'Senior Javascript Developer',
      workExp: 7,
      cv: '',
      dataSource: 'Monster Gulf'
    },
    {
      id: 3,
      firstName: 'Doris',
      lastName: 'Wilder',
      country: 'Australia, Queensland',
      nationality: 'Australian',
      company: 'Telstra',
      designation: 'Support Engineer',
      workExp: 3,
      cv: '',
      dataSource: 'JobsDB'
    },
    {
      id: 4,
      firstName: 'Jenny',
      lastName: 'Chang',
      country: 'Singapore, Singapore',
      nationality: 'Chinese',
      company: 'Singapore Airlines',
      designation: 'Regional Director',
      workExp: 15,
      cv: '',
      dataSource: 'Twitter'
    },
    {
      id: 5,
      firstName: 'Lorenz',
      lastName: 'Chang',
      country: 'Fiji, Suva',
      nationality: 'Fijian',
      company: 'Titus Global Tech-Inc',
      designation: 'Programmer',
      workExp: 2,
      cv: '',
      dataSource: 'Facebook'
    },
    {
      id: 6,
      firstName: 'Jireh',
      lastName: 'Kael',
      country: 'Kenya, Nairobi',
      nationality: 'Kenyan',
      company: 'Titus Global Tech-Inc',
      designation: 'Quality Assurance Engineer',
      workExp: 1,
      cv: '',
      dataSource: 'TikTok'
    },
    {
      id: 7,
      firstName: 'Rome',
      lastName: 'Joseph',
      country: 'United States, Denver, Colorado',
      nationality: 'American',
      company: 'Titus Global Tech-Inc',
      designation: 'Sergeant-at-arms',
      workExp: 2,
      cv: '',
      dataSource: 'Steam'
    }
  ];

  constructor() { }

  getEmployees() {
    return this.employee.slice();
  }
}

// {
//   id: 5,
//   firstName: 'Lorenz',
//   lastName: 'Chang',
//   country: 'Fiji, Suva',
//   nationality: 'Fijian',
//   company: 'Titus Global Tech-Inc',
//   designation: 'Programmer',
//   workExp: 2,
//   cv: '',
//   dataSource: 'Facebook'
// },
// {
//   id: 6,
//   firstName: 'Jireh',
//   lastName: 'Kael',
//   country: 'Kenya, Nairobi',
//   nationality: 'Kenyan',
//   company: 'Titus Global Tech-Inc',
//   designation: 'Quality Assurance Engineer',
//   workExp: 1,
//   cv: '',
//   dataSource: 'TikTok'
// },
// {
//   id: 7,
//   firstName: 'Rome',
//   lastName: 'Joseph',
//   country: 'United States, Denver, Colorado',
//   nationality: 'American',
//   company: 'Titus Global Tech-Inc',
//   designation: 'Sergeant-at-arms',
//   workExp: 2,
//   cv: '',
//   dataSource: 'Steam'
// }

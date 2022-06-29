export class Vacancy {
  organization: any;
  finished_time: number;
  liabilities: string;
  price: number;
  requirement: string;
  title: string;
  type_of_employment: number;
  type_of_work: string;
  viewer: number;
  work_experience: number;
  working_conditions: string;

  constructor(data: any) {
    this.organization = data.organization;
    this.finished_time = data.finished_time;
    this.liabilities = data.liabilities;
    this.price = data.price;
    this.requirement = data.requirement;
    this.title = data.title;
    this.type_of_employment = data.type_of_employment;
    this.type_of_work = data.type_of_work;
    this.viewer = data.viewer;
    this.work_experience = data.work_experience;
    this.working_conditions = data.working_conditions;
  }
}

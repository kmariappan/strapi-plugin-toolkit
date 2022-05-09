/* eslint-disable no-console */
export class StrapiEntityServiceApi<T> {
  public findMany(): any {
    console.log('find All student');
  }
  public findOne(id: string | number): any {
    console.log(`The given ${id} will retrive data`);
  }
  public create(data: T): any {
    console.log(`The given ${data}} will Create`);
  }
  public update(data: Partial<T>): any {
    console.log(`The given ${data} will update`);
  }
  public delete(id: string | number): any {
    console.log(`The given ${id} will update`);
  }
}

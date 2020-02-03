export class TestUtils {
  private constructor() {}

  static stringifyData(data: object) {
    let stringifiedData = '';

    Object.keys(data).forEach(key => {
        stringifiedData = `${stringifiedData} ${data[key]}`;
    });

    return stringifiedData;
  }
}

interface MyJQuery {
  (selector: string): Object;

  version: string;

  ajax(url: string): Promise<any>;
}

function testMyJQuery() {
  let $ = <MyJQuery>function (sel: string) {
    return {};
  };
  $.version = '2.1.4';
  $.ajax = function (url: string) {
    return Promise.resolve(123);
  };
}

export function hybridsApp() {
  testMyJQuery();
}

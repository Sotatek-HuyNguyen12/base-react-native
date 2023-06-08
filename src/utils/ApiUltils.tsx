import axios from 'axios';

const BASE_URL = 'https://random-data-api.com/';

class ApiUtil {
  fetch = async (
    url: string,
    config: any,
    contentType = 'application/json',
  ) => {
    config.method = config?.method ? config.method : 'POST';
    config.timeout = 90000;
    if (!config.headers) {
      config.headers = {};
    }
    config.validateStatus = function (status: any) {
      return status;
    };
    config.headers['Content-Type'] = contentType;
    config.url = BASE_URL + url;
    let response = await axios(config);
    if (response && response.status === 200) {
      return response;
    } else {
      switch (response.status) {
        case 401:
          //
          break;
        case 403:
          //
          break;
        case 413:
          //
          break;
        default:
          //
          break;
      }
    }
  };
}

export default new ApiUtil();

import Request from '../../../api'

class RequestMaps extends Request {
  async zones() {
    const prepURL = this.buildURL('zones');
    const answer = await this.execute(prepURL);
    return answer;
  }

  async locations(currentZone) {
    console.log(currentZone);
    const prepURL = this.buildURL('locations', { zone: currentZone });
    const answer = await this.execute(prepURL);
    return answer;
  }

  async points() {
    const prepURL = this.buildURL('points');
    const answer = await this.execute(prepURL);
    return answer;
  }
};

const request = new RequestMaps();

export default request;
const request = require('request');

class MailChimpAPI {
  constructor(apiKey) {
    this.version = '3.0';
    this.apiKey = apiKey;
    this.datacenter = apiKey.split('-');
    this.datacenter = this.datacenter[1];
    this.httpHost = this.datacenter + '.api.mailchimp.com';
    this.httpUri = 'https://' + this.httpHost + '/3.0/';
  }

  addMemberToList(listId, member) {
    request({
      uri: this.httpUri + "lists/" + listId + "/members",
      method: 'POST',
      headers: {
          "accept-encoding": "gzip,deflate",
          "Authorization": "apikey " + this.apiKey
      },
      body: JSON.stringify(member),
      gzip: true
    }, function (error, response, body) {
      console.log(body);
    });
  }
}

export default MailChimpAPI;




import aws from 'aws-sdk';

import variables from '../variables';

aws.config.update({ region: variables.awsRegion });

const docClient = new aws.DynamoDB.DocumentClient(
  variables.ddbLocalEndpoint
    ? { endpoint: variables.ddbLocalEndpoint, convertEmptyValues: true }
    : { convertEmptyValues: true }
);

export default {
  get: (params) => docClient.get(params).promise(),
  put: (params) => docClient.put(params).promise(),
  query: (params) => docClient.query(params).promise(),
  scan: (params) => docClient.scan(params).promise(),
  update: (params) => docClient.update(params).promise(),
  delete: (params) => docClient.delete(params).promise(),
};

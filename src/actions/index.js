import { SIGN_IN, SIGN_OUT, CHANGE_SORT, PAGE_CLICKED } from './types';
let ec2Instances = require("../components/ec2instance_fakedata.json");

export const signIn = (userId, userName) => {
  return {
    type: SIGN_IN,
    payload: {userId, userName}
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const getEC2s = () => {
  /* const response = await (this is where the actual api call for
                      getting ec2 instances would go);*/
  const response = ec2Instances;
  return { type: 'GET_EC2', payload: response };
};

export const changeSort = (column, data, direction) => {
  return {
    type: CHANGE_SORT,
    payload: {
      column: column,
      data: data,
      direction: direction,
    }
  };
};

export const pagination = (ec2sPerPage, totalEC2s, currentPage) => {
  return {
    type: PAGE_CLICKED,
    payload: {
      ec2sPerPage,
      totalEC2s,
      currentPage
    }
  };
};

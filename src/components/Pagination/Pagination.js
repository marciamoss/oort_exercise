import React from 'react';
import './Pagination.css';
import { connect } from 'react-redux';
import { pagination } from '../../actions';

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalEC2s / props.ec2sPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="ui pagination menu pagination">
      {pageNumbers.map(number => {
          return (
            <a key={number} onClick={(e) => {
              e.preventDefault();
              return props.pagination(props.ec2sPerPage, props.totalEC2s, number)
            }}
            href='!#' className={`item ${props.currentPage===number ? "active-page" : ""}`}>
                {number}
            </a>
          );
      }
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ec2sPerPage: state.getPage.ec2sPerPage,
    totalEC2s: state.getEC2.length,
    currentPage: state.getPage.currentPage || 1,
  };
};

export default connect(
  mapStateToProps,
  { pagination }
)(Pagination);
import React from 'react';
import PropTypes from 'prop-types';
import {
  CreateButton,
  ExportButton,
  sanitizeListRestProps,
  TopToolbar,
} from 'react-admin';

import { BackButton } from './BackButton';

const ListActions = props => {
  const {
    currentSort,
    className,
    label,
    resource,
    filters,
    displayedFilters,
    exporter, // you can hide ExportButton if exporter = (null || false)
    filterValues,
    permanentFilter,
    hasCreate, // you can hide CreateButton if hasCreate = false
    basePath,
    selectedIds,
    onUnselectItems,
    showFilter,
    maxResults,
    total,
    superuser, // role -> show ExportButton
    hasBack, // show BackButton (used in <RequestBulkList>)
    handleBack, // go back
    ...rest
  } = props;

  return React.useMemo(
    () => (
      <TopToolbar className={className} {...sanitizeListRestProps(rest)}>
        {hasBack && typeof handleBack === 'function' && (
          <BackButton handleBack={handleBack} />
        )}
        <CreateButton basePath={basePath} label={label} />
        {/* add !exporter to hide the "add filters" bulk action */}
        {filters &&
          React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
          })}
        {/* only show "export" button to "superuser" */}
        {/* @ts-ignore */}
        {exporter !== false && superuser && (
          <ExportButton
            disabled={total === 0}
            resource={resource}
            sort={currentSort}
            // filter={{ ...filterValues, ...permanentFilter }}
            exporter={exporter}
            maxResults={maxResults}
          />
        )}
      </TopToolbar>
    ),
    [resource, displayedFilters, filterValues, selectedIds, filters, total] // eslint-disable-line react-hooks/exhaustive-deps
  );
};

ListActions.propTypes = {
  basePath: PropTypes.string,
  className: PropTypes.string,
  currentSort: PropTypes.object,
  label: PropTypes.string,
  displayedFilters: PropTypes.object,
  exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  filters: PropTypes.element,
  filterValues: PropTypes.object,
  hasCreate: PropTypes.bool,
  resource: PropTypes.string,
  onUnselectItems: PropTypes.func.isRequired,
  selectedIds: PropTypes.arrayOf(PropTypes.any),
  showFilter: PropTypes.func,
  total: PropTypes.number,
};

ListActions.defaultProps = {
  selectedIds: [],
  onUnselectItems: () => null,
  label: 'Register',
};

export default ListActions;

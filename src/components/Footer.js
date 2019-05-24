import React from 'react'
import FilterContainer from '../containers/FilterContainer';
import * as filters from '../constants/VisibilityFilters'
import './Footer.scss'

const Footer = () => (
    <footer>
        <FilterContainer filter={filters.SHOW_ALL}>All</FilterContainer>
        <FilterContainer filter={filters.SHOW_ACTIVE}>Active</FilterContainer>
        <FilterContainer filter={filters.SHOW_COMPLETED}>Completed</FilterContainer>
    </footer>
)

export default Footer
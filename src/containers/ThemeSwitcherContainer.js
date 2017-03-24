import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleThemeSwitcher, changeTheme } from '../actions';
import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

class ThemeSwitcherContainer extends Component {
  render() {
    return (
      <ThemeSwitcher
        dropDownIsOpen={this.props.dropDownIsOpen}
        theme={this.props.theme}
        onToggleClick={this.props.toggleThemeSwitcher}
        onDropdownItemClick={this.props.changeTheme}
       />
    );
  }
}

ThemeSwitcherContainer.propTypes = {
  dropDownIsOpen: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired,
  toggleThemeSwitcher: PropTypes.func.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { smallReducer } = state;
  return smallReducer;
};

const mapDispatchToProps = dispatch => ({
  toggleThemeSwitcher: () => dispatch(toggleThemeSwitcher()),
  changeTheme: theme => dispatch(changeTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSwitcherContainer);

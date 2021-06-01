import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CloseIcon } from './assets/icons';
import css from './styles.module.scss';

export const Dialog = ({
  className,
  title,
  buttons,
  open,
  onClose,
  darkMode,
  children
}) => (
  open &&
  <div className={classNames(css.Container_DialogTis, {
    [css.Dark_DialogTis]: darkMode,
  }, className)}>
    <div
      className={classNames(css.Dialog_DialogTis, {
        [css.Dark_DialogTis]: darkMode,
      }, className)}
    >
      <div className={css.Header_DialogTis}>
        <span className={css.Title_DialogTis}>
          {title}
        </span>
        <div className={css.CloseCircle_DialogTis} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={css.Children_DialogTis}>
        {children}
      </div>
      <div className={css.Buttons_DialogTis}>
        {
          buttons?.length > 0 &&
          buttons.map(({ text, onClick }) =>
            <button key={text} className={css.Button_DialogTis} onClick={onClick}>
              {text}
            </button>
          )
        }
      </div>
    </div>
  </div>
);

Dialog.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  open: PropTypes.bool,
  darkMode: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};
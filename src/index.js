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
  <div className={classNames(css.Container, {
    [css.Dark]: darkMode,
  }, className)}>
    <div
      className={classNames(css.Dialog, {
        [css.Dark]: darkMode,
      }, className)}
    >
      <div className={css.Header}>
        <span className={css.Title}>
          {title}
        </span>
        <div className={css.CloseCircle} onClick={onClose}>
          <CloseIcon />
        </div>
      </div>
      <div className={css.Children}>
        {children}
      </div>
      <div className={css.Buttons}>
        {
          buttons?.length > 0 &&
          buttons.map(({ text, onClick }) =>
            <button key={text} className={css.Button} onClick={onClick}>
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
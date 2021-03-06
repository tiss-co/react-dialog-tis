import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CloseIcon } from './assets/icons';
import css from './styles.module.scss';

export const Dialog = ({
  className,
  titleClassName = '',
  title,
  buttons,
  open,
  onClose,
  darkMode,
  titleBorder = false,
  hideTitleRow = false,
  children,
  id,
  closeButtonId
}) => (
  open &&
  <div className={classNames(css.Container_DialogTis, {
    [css.Dark_DialogTis]: darkMode,
  }, className)}
    id={id}>
    <div
      className={classNames(css.Dialog_DialogTis, {
        [css.PaddingTop_DialogTis]: hideTitleRow,
        [css.Dark_DialogTis]: darkMode,
      }, className)}
    >
      {
        !hideTitleRow &&
        <div className={classNames(css.Header_DialogTis, {
          [css.HeaderBorder_DialogTis]: titleBorder
        })}>
          <span className={classNames(css.Title_DialogTis, titleClassName)}>
            {title}
          </span>
          <div className={css.CloseCircle_DialogTis} onClick={onClose}>
            <CloseIcon id={closeButtonId} />
          </div>
        </div>
      }
      <div className={css.Children_DialogTis}>
        {children}
      </div>
      <div className={css.Buttons_DialogTis}>
        {
          buttons?.length > 0 &&
          buttons.map(({ text, onClick, leftIcon = null, rightIcon = null, className = '' }) =>
            <button
              key={text}
              className={classNames(css.Button_DialogTis, className)}
              onClick={onClick}>
              {leftIcon} {text} {rightIcon}
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
  titleClassName: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  open: PropTypes.bool,
  darkMode: PropTypes.bool,
  titleBorder: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  hideTitleRow: PropTypes.bool,
  id: PropTypes.string,
  closeButtonId: PropTypes.string,
};
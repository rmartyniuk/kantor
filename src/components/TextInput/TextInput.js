import styles from './TextInput.module.scss';

const TextInput = props => {
  return (
    <input
      {...props}
      className={styles.input}
      type="text"
      data-testid='amount' />
  );
};

export default TextInput;
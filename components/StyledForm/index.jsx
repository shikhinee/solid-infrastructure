//Next, React (core node_modules) imports must be placed here

//Styles must be imported here
import styles from "./StyledForm.module.scss";

const StyledForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={styles.container}>
      {props.children}
    </form>
  );
};

export default StyledForm;

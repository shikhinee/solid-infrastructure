//Next, React (core node_modules) imports must be placed here

//Styles must be imported here
import styles from './PrimaryButton.module.scss'

const PrimaryButton = (props) => {
	 return (
		 <button className={styles.container} onClick={props.onClick}>
			 {props.children}
		</button>
	)
};

export default PrimaryButton;

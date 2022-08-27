const Button = ({ onClickHandler, name }) => {
    return (
        <button onClick={() => onClickHandler()}>
            {name}
        </button>
    )
  }
  
  export default Button
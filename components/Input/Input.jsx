const Input = ({ type, className, ...rest }) => {
    return <input type={type} className={`${className} py-4 px-6`} {...rest} />;
};

export default Input;

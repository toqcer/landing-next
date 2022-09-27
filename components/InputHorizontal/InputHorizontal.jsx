import Input from '../Input/Input';

const InputHorizontal = ({
    className = null,
    type,
    placeholder,
    btnText,
    onSubmit,
}) => {
    return (
        <form className=" flex flex-nowrap box-border" onSubmit={onSubmit}>
            <Input
                className={`${
                    className ? className : ''
                } grow border border-teal-primary rounded-l-xl focus:border-teal-400 outline-none transition-all`}
                placeholder={placeholder}
            />
            <button
                className="p-4 bg-teal-primary text-white flex items-center rounded-r-xl"
                type="submit"
            >
                {btnText}
            </button>
        </form>
    );
};

export default InputHorizontal;

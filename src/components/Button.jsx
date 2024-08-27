const Button = ({ textContent, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-main_red text-white rounded-full w-full max-h-[60px] py-4 font-semibold hover:bg-confirmBtnHover">
            {textContent}
        </button>
    )
}

export default Button
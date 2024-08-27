const SpinnerLoader = ({ message, ariaLabel }) => {
    return (
        <div aria-label={ariaLabel} role="status" className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-main_red mx-auto">
            <span className="hidden">{message}</span>
        </div>
    )
}

export default SpinnerLoader
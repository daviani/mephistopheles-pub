const MiddleComponent = ({ children }) => {

    return (
        <>
            <div
                className='h-full bg-white rounded-lg overflow-hidden shadow-lg mb-8'
            >
                {children}
            </div>
        </>
    )
}

export default MiddleComponent
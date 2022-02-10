const TopComponent = ({ children }) => {

    return (
        <>
            <div
                className='h-full bg-white rounded-b-lg overflow-hidden shadow-lg mb-8'
            >
                {children}
            </div>
        </>
    )
}

export default TopComponent

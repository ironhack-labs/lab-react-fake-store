function PageLayout({ children, className="" }) {
    return (
        <div className={`container py-2 ${className}`}>
            {children}
        </div>
    )
}

export default PageLayout;
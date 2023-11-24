export default function AuthLayout({
    children
}:{
    children:React.ReactNode
}){
    return(
        <div className="flexbox items-center justify-center h-full">
            {children}
        </div>
    )
}
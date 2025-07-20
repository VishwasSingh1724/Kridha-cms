const Header = ({title, description}: {title: string, description: string}) => {
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
    )
}

export default Header;

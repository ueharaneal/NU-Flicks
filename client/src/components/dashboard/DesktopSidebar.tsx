import { UserRoundCog, PanelTopDashed, PenLine, SearchIcon } from "lucide-react"
import { Link } from "react-router-dom"

const NAVLINKS = [
	{
		title: "Feed",
		icon: <PanelTopDashed size={32} />,
		path: "feed",
	},
	{
		title: "Explore",
		icon: <SearchIcon size={32} />,
		path: "explore",
	},
	{
		title: "Articles",
		icon: <PenLine size={32} />,
		path: "articles",
	},
	{
		title: "Profile",
		icon: <UserRoundCog size={32} />,
		path: "profile",
	},
]
function DeskTopSidebar() {
	return (
		<div className='flex flex-col items-center justify-center border-border border-b-2 border-r-2 h-[965px] overflow-clip'>
			{NAVLINKS.map(link => {
				return (
					<Link
						to={link.path}
						key={link.title}
						className='flex flex-col items-center'
					>
						<div className='flex flex-col items-center gap-y-3 px-2 py-2 first-line:items-center hover:text-primary duration-500 hover:translate-x-1'>
							{link.icon}
							{link.title}
						</div>
						<div className='border-border border w-[120px]' />
					</Link>
				)
			})}
		</div>
	)
}

export default DeskTopSidebar

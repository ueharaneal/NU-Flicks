import { UserRoundCog, PanelTopDashed, PenLine, SearchIcon } from "lucide-react"
import { Link } from "react-router-dom"

const NAVLINKS = [
	{
		title: "Feed",
		icon: <PanelTopDashed size={24} />,
		path: "feed",
	},
	{
		title: "Explore",
		icon: <SearchIcon size={24} />,
		path: "explore",
	},
	{
		title: "Articles",
		icon: <PenLine size={24} />,
		path: "articles",
	},
	{
		title: "Profile",
		icon: <UserRoundCog size={24} />,
		path: "profile",
	},
]
function DeskTopSidebar() {
	return (
		<div className='flex flex-col items-center justify-start border-border py-48 border-b-2 border-r-2 h-[965px] overflow-clip'>
			{NAVLINKS.map(link => {
				return (
					<Link
						to={link.path}
						key={link.title}
						className='flex flex-col items-center'
					>
						<div className='flex flex-row items-center gap-x-2 px-2 py-7 first-line:items-center hover:text-primary duration-500 hover:translate-x-1'>
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

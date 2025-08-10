import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { ThemeSwitcher } from "./ThemeSwitcher";

const NavBarList = () => {
	return (
		<ul className="items-center justify-center flex space-x-6 space-y-0">
			{/* <li className="text-bunker-900 dark:text-white font-mono">
        <Link href="/">About</Link>
      </li>
      <li className="text-bunker-900 dark:text-white font-mono">
        <Link href="/posts">Blog</Link>
      </li> */}
			<a
				href="https://linkedin.com/in/haoting-cheng"
				target="_blank"
				rel="noopener"
			>
				<li className="text-bunker-900 dark:text-white font-mono">
					<SiLinkedin />
				</li>
			</a>
			<a href="https://github.com/hati8haha" target="_blank" rel="noopener">
				<li className="text-bunker-900 dark:text-white font-mono">
					<SiGithub />
				</li>
			</a>
			<li className="text-bunker-900 dark:text-white font-mono">
				<ThemeSwitcher />
			</li>
		</ul>
	);
};

export default NavBarList;

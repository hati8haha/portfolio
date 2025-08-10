import type { PropsWithChildren } from "react";

const Experience = ({ children }: PropsWithChildren) => {
	return (
		<section className="container mx-auto py-20 flex-col flex gap-16 items-center">
			<h2 className="text-4xl font-bold  text-bunker-600 dark:text-bunker-300 self-start">
				Experience
			</h2>

			<div className="flex flex-col gap-8 max-w-2xl">{children}</div>
		</section>
	);
};

export default Experience;

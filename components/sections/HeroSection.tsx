import Link from "next/link";
import LiquidGlassText3D from "@/components/ui/LiquidGlassText3D";

const HeroSection = () => {
	return (
		<section
			className="mb-16"
			aria-label="Hero: Interactive Three.js Background Demo"
		>
			<div className="text-center py-20">
				{/* 3D Liquid Glass Text */}
				<div className="mb-6">
					<LiquidGlassText3D className="mx-auto" />
				</div>
				<p className="text-[var(--muted)] text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
					Full-stack developer passionate about creating innovative web
					applications that solve real-world problems. Specializing in modern
					JavaScript frameworks, backend systems, and delivering exceptional
					user experiences.
				</p>

				<div className="flex gap-3 justify-center flex-wrap mb-8">
					<span className="chip">Full-Stack Development</span>
					<span className="chip">React & Next.js</span>
					<span className="chip">Node.js & APIs</span>
					<span className="chip">Database Design</span>
					<span className="chip">UI/UX Design</span>
				</div>

				<div className="flex gap-4 justify-center flex-wrap">
					<Link
						href="#projects"
						className="px-8 py-4 bg-gradient-to-r from-[var(--accent-a)] to-[var(--accent-b)] text-[#051020] font-semibold rounded-xl no-underline hover:shadow-lg hover:scale-105 transition-all duration-200"
					>
						View Projects →
					</Link>
					<Link
						href="/posts"
						className="px-8 py-4 glass-card text-white font-semibold no-underline hover:bg-white/10 transition-colors rounded-xl"
					>
						Read Blog
					</Link>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

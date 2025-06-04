import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		title: 'PomoBuddy - Project',
		description:
			'PomoBuddy is a Pomodoro Timer App designed to help individuals manage their work time effectively using the Pomodoro Technique. The Pomodoro Technique is a time management method that breaks work into intervals, traditionally 25 minutes in length, separated by short breaks. This technique aims to improve focus and productivity.',
		link: 'https://your-pomo-buddy.vercel.app/',
	},
	{
		title: 'MemoMyChinchilla - Game',
		description:
			'MemoMyChinChilla is a memory card game built with vanilla JavaScript, where players match pairs of cards. The game features my four adorable chinchillas, adding a playful and personal touch to the challenge.',
		link: 'https://vermenea.github.io/MemoMyChinchilla/',
	},
	{
		title: 'DreamOps - Project',
		description:
			'DreamOps is an e-learning platform designed for individuals aspiring to become DevOps engineers. It provides a structured learning path, hands-on exercises, and essential resources to help users master DevOps principles, tools, and best practices.',
		link: 'https://frontend-staging.tuto.dev.pfaff.app/',
	},
	{
		title: 'Anita Maruszewska - Twoja uroda z Ajurwedą',
		description: 'Freelance project.',
		link: 'https://anitamaruszewska.pl/',
	},
];

export default function Projects() {
	return (
		<div className='relative flex flex-col items-center justify-center min-h-screen p-4'>
			<div className='absolute inset-0 bg-[url("/bcg.jpg")] bg-cover bg-center opacity-20 z-0'></div>
			<div className='relative z-10 w-full flex flex-col items-center'>
				<nav className='fixed top-0 left-0 w-screen h-16 flex items-center justify-between px-4'>
					<Link href='/' passHref>
						<p className='text-lg font-semibold text-white'>Home</p>
					</Link>
					<Link href='/about' passHref>
						<p className='text-lg font-semibold text-white'>About</p>
					</Link>
					<Link href='/projects' passHref>
						<p className='text-lg font-semibold text-white'>Projects</p>
					</Link>
				</nav>
				<h1 className='ml-4 text-4xl font-semibold mb-12 text-white mt-20'>
					Vermenea&apos;s Projects
				</h1>

				<div className='space-y-8 max-w-2xl'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='border bg-black/30 backdrop-blur-sm p-6 rounded-lg border-red-500/70'
						>
							<h2 className='text-2xl mb-4'>
								{project.title}
							</h2>
							<p className=' mb-6'>
								{project.description}
							</p>

							<div className='flex gap-4'>
								<Link
									href={project.link}
									className='px-6 py-2 rounded-lg bg-gradient-to-r from-red-500/70 to-pink-500/70 text-white hover:from-red-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105'
								>
									Go to project
								</Link>
							</div>
						</div>
					))}
				</div>

				<Link href='https://github.com/vermenea' passHref>
					<div className='flex items-center space-x-4 mt-8 text-white'>
						<p>Go check other projects (✿◡‿◡)</p>
						<Image
							src='/githubwhite.png'
							alt='github'
							width={24}
							height={24}
						/>
					</div>
				</Link>
			</div>
		</div>
	);
}

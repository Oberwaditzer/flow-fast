/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { FC } from 'react';
import { useRouter } from 'next/router';


function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

type SidebarItemProps = {
	navigation: any[]
}

const Sidebar: FC<SidebarItemProps> = ({navigation}) => {
	const router = useRouter();
	return (
		<div className={'flex w-64'}>
			<div className='flex-1 flex flex-col min-h-0 bg-gray-800'>
				<div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
					<div className='flex items-center flex-shrink-0 px-4'>
						<p className={'text-white text-2xl font-bold'}>Flow Fast</p>
					</div>
					<nav className='mt-5 flex-1 px-2 bg-gray-800 space-y-1' aria-label='Sidebar'>
						{navigation.map((item) => (
							<Link href={item.href} key={item.name}>
								<a
									className={classNames(
										item.href === router.pathname ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
									)}
								>
									<item.icon
										className={classNames(
											item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300',
											'mr-3 flex-shrink-0 h-6 w-6',
										)}
										aria-hidden='true'
									/>
									<span className='flex-1'>{item.name}</span>
									{item.count ? (
										<span
											className={classNames(
												item.current ? 'bg-gray-800' : 'bg-gray-900 group-hover:bg-gray-800',
												'ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full',
											)}
										>
                  {item.count}
                </span>
									) : null}
								</a>
							</Link>
						))}
					</nav>
				</div>
				<div className='flex-shrink-0 flex bg-gray-700 p-4'>
					<a href='#' className='flex-shrink-0 w-full group block'>
						<div className='flex items-center'>
							<div>
								<img
									className='inline-block h-9 w-9 rounded-full'
									src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
									alt=''
								/>
							</div>
							<div className='ml-3'>
								<p className='text-sm font-medium text-white'>Tom Cook</p>
								<p className='text-xs font-medium text-gray-300 group-hover:text-gray-200'>View profile</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export { Sidebar };
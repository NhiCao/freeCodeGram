import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900">You're logged in!</div> */}

                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 p-5">
                                {/* <img src="{{ $user->profile->profileImage() }}" class="rounded-circle w-100"> */}
                                <img src="/img/winterball.jpg" className="rounded-full rounded-full w-48 h-48"></img>
                            </div>
                            <div className="col-span-8 p-5">
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <div className="d-flex align-items-center pb-3">
                                        {/* <div className="h4">{{ $user->username }}</div> */}
                                        <div className="h4 text-xl font-bold">NhiCao</div>

                                        <follow-button user-id="{{ $user->id }}" follows="{{ $follows }}"></follow-button>
                                    </div>

                                    {/* @can('update', $user->profile)
                                        <a href="/p/create">Add New Post</a>
                                    @endcan */}

                                </div>

                                {/* @can('update', $user->profile)
                                    <a href="/profile/{{ $user->id }}/edit">Edit Profile</a>
                                @endcan */}

                                {/* <div className="d-flex">
                                    <div className="pr-5"><strong>{{ $postCount }}</strong> posts</div>
                                    <div className="pr-5"><strong>{{ $followersCount }}</strong> followers</div>
                                    <div className="pr-5"><strong>{{ $followingCount }}</strong> following</div>
                                </div> */}

                                <div className="flex flex-row">
                                    <div className="pr-5 text-sm"><strong>10</strong> posts</div>
                                    <div className="pr-5 text-sm"><strong>100</strong> followers</div>
                                    <div className="pr-5 text-sm"><strong>20</strong> following</div>
                                </div>

                                <div className='pt-6'>Being just you is more than enough.</div>
                                <div className='pt-2'><a href="https://www.instagram.com/" className="text-blue-600 visited:text-purple-600">https://www.instagram.com/</a></div>
                                
                                {/* <div className="pt-4 font-weight-bold">{{ $user->profile->title }}</div>
                                <div>{{ $user->profile->description }}</div>
                                <div><a href="#">{{ $user->profile->url }}</a></div> */}

                            </div>

                        </div>

                        <div className="grid grid-cols-12 gap-2 pl-4 pr-4">
                            <div className="col-span-4 p-1">
                                <img src="/img/winterball.jpg" alt="" />
                            </div>
                            <div className="col-span-4 p-1">
                                <img src="/img/winterball.jpg" alt="" />
                            </div>
                            <div className="col-span-4 p-1">
                                <img src="/img/winterball.jpg" alt="" />
                            </div>
                        </div>



                    </div>
                </div>
            </div>

            



        </AuthenticatedLayout>
    );
}

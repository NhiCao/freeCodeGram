import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home(props) {
    const posts = [];

    for (let i = 0; i < props.posts.length; i++) {
        posts.push(
            <div className="col-span-4 p-1">
                <img src={"/storage/" + props.posts[i].image} alt="" />
            </div>
        );
    }

    return (
        <AuthenticatedLayout
            authenticatedUser={props.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >

        {/* <div> */}
            <Head title="Home" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900">You're logged in!</div> */}

                        <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 p-5">
                                {/* <img src="{{ $user->profile->profileImage() }}" class="rounded-circle w-100"> */}
                                <img src="/img/rainy-night.jpeg" className="rounded-full rounded-full w-48 h-48"></img>
                            </div>
                            <div className="col-span-8 p-5">
                                <div className="d-flex justify-content-between align-items-baseline">
                                    <div className="d-flex flex flex-row align-items-center pb-3">
                                        <div className="h4 text-xl font-bold"><a href={"/portfolios/" + props.user.username}>{ props.user.username }</a></div>
                                        <div className="h5 text-lg text-blue-600 pl-64"><a href="/posts/create">+ Add Post</a></div>

                                        {/* <follow-button user-id="{{ $user->id }}" follows="{{ $follows }}"></follow-button> */}
                                    </div>

                                    

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

                                <div className='pt-5'>{ props.portfolio.description }</div>
                                <div><a href={ props.portfolio.url } className="text-blue-600 visited:text-purple-600">{ props.user.portfolio.url }</a></div>

                            </div>

                        </div>

                        <div className="grid grid-cols-12 gap-2 pl-4 pr-4">
                            {posts}
                        </div>



                    </div>
                </div>
            </div>

            
        {/* </div> */}


        </AuthenticatedLayout>
    );
}

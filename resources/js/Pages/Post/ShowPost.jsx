import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import CreatePostForm from '@/Pages/Post/CreatePostForm';
import { Head } from '@inertiajs/react';

export default function CreatePost(props) {
    return (
        <AuthenticatedLayout
            authenticatedUser={props.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >

        {/* <div> */}
            <Head title="Create a post" />



            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                        <div className="max-w-sm mx-auto py-10">
                            <div className="mb-2">{ props.post.caption }</div>
                            <img className="mb-4" src={"/storage/" + props.post.image} alt="" />
                            {/* <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Edit
                            </button> */}
                            <a
                                href={"/posts/" + props.post.id + "/edit"}
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Edit
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            
        {/* </div> */}


        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { router } from "@inertiajs/react";

export default function ShowPost(props) {
    function handleDeleteBtnClick(e) {
        e.preventDefault();
        if (confirm("Are you sure you want to delete this post?")) {
            router.post(`/posts/${props.post.id}`, {
                _method: "delete"
            });
        }
    }

    return (
        <AuthenticatedLayout
            authenticatedUser={props.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Home
                </h2>
            }
        >
            <Head title="Create a post" />

            <div className="py-12">
                <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="max-w-sm mx-auto py-10">
                            <div className="mb-2">{props.post.caption}</div>
                            <img
                                className="mb-4"
                                src={"/storage/" + props.post.image}
                                alt=""
                            />
                            <a
                                href={"/posts/" + props.post.id + "/edit"}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Edit
                            </a>
                            <a
                                href="#"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-2"
                                onClick={handleDeleteBtnClick}
                            >
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    );
}

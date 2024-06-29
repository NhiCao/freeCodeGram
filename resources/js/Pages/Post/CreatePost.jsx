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

                        <CreatePostForm></CreatePostForm>

                        



                    </div>
                </div>
            </div>

            
        {/* </div> */}


        </AuthenticatedLayout>
    );
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">nnnnnnnnnnn</h2>}
        >
            <Head title="Home" />

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div> */}

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <img src="/img/winterball.jpg" className="rounded-circle" style={{height: "200px"}} />
                </div>
                <div className="col-span-2">
                
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
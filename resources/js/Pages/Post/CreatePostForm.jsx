import { useState } from "react";
import { useForm } from '@inertiajs/react'

export default function CreatePostForm() {
    // const [name, setName] = useState("");

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     alert("ok");
    // };

    const { data, setData, post } = useForm({
        caption: null,
        image: null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/posts");
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto py-10">
            <div className="mb-5">
                <label
                    htmlFor="caption"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Post Caption
                </label>
                <input
                    type="text"
                    id="caption"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="caption"
                    onChange={e => setData('caption', e.target.value)}
                ></input>
            </div>
            <div className="mb-5">
                <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Post Image
                </label>
                <input
                    type="file"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={e => setData('image', e.target.files[0])}
                ></input>
            </div>

            <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Add
            </button>
        </form>
    );
}

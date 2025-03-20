import { Form } from "@remix-run/react";
export default function SearchForm() {
    return (
      <Form method="get" className="mb-8 flex">
        <input
          type="text"
          name="city"
          placeholder="Enter city"
          className="p-3 text-white  rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </Form>
    );
  }
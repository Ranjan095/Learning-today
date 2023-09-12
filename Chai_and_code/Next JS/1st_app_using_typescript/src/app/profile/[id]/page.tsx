/** @format */

export default function UserProfile({ params }: any) {
  return (
    <div className="text-center py-3">
      <h1 className="text-3xl font-bold">
        User Id is
        <span className="ml-4 bg-green-600 rounded-lg px-1 text-orange-900 ">{params.id}</span>
      </h1>
    </div>
  );
}

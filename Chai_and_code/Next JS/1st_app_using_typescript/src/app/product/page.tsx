/** @format */

export default function ProductCart({ username, _id, email }: any) {
  return (
    <>
      <h1 className="text-3xl"> Username : {username}</h1>
      <h2>Id : {_id}</h2>
      <h2>Email : {email}</h2>
    </>
  );
}

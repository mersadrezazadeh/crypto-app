import Link from "next/link";

function User() {
  return (
    <div>
      {/* if is authenticated show user name else show get start */}
      <Link href="/auth">Get Start</Link>
    </div>
  );
}

export default User;

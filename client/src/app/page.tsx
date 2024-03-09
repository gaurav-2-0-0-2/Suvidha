import Link from "next/link";
export default function Home() {
  return (
     <div>
             <Link  href={"/adminLogin"}>Login as Admin</Link>
             <Link  href={"/cardHolderLogin"}>Login as Card Holder</Link>
     </div>
  );
}

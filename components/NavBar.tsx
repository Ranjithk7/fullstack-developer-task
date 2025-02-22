import Link from "@/node_modules/next/link";
import { signOut } from 'firebase/auth'
import { userAuth } from '@/utils/firebase';
import CategorySelector from "./CategorySelector";
import { logoutUser } from '@/store/index'
import { useDispatch } from "react-redux";

export default function Navbar({user}: {user:any}) {
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await signOut(userAuth);
    dispatch(logoutUser());
  };
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-3">
      <Link href="/" className="text-lg font-bold">
        ArticleApp
      </Link>
      <div className='flex items-center'>
      <CategorySelector />
      {user 
      ? <button onClick=  {handleLogOut} className="">Logout</button>
      : <Link href="/auth" className="text-sm">
          Login / Signup
        </Link>
      }
      </div>
    </nav>
  );
}

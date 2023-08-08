import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-stone-800 h-16 flex items-center p-5 w-screen">
      <ol className="flex gap-7 items-center p-2 text-stone-200">
        <Link to='/' className="hover:underline hover:underline-offset-8">홈</Link>
        <Link to='/' className="hover:underline hover:underline-offset-8">사업안내</Link>
        <Link to='/company' className="hover:underline hover:underline-offset-8">인사말</Link>
        <Link to='/info' className="hover:underline hover:underline-offset-8">대표자 소개</Link>
        <Link to='/photozone' className="hover:underline hover:underline-offset-8">포토존</Link>
        {/* <Link to='/come' className="hover:underline hover:underline-offset-8">찾아오시는 길</ Link> */}
      </ol>
    </div>
  )
}

export default Navbar;
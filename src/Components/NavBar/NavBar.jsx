

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor"><strong>Job</strong>Search</h1>
      </div>

      <div className="menu flex gap-8">
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
          <a href="#Jobs">Jobs</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="#Jobs">Companies</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="#Footer">About</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="#Footer">Contact</a> 
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="#">Blog</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="#">Login</a>
        </li>
        <li className="menuList text-[#6f6f6f] hover:text-blueColor">
        <a href="#">Register</a>
        </li>
      </div>
    </div>
  )
}

export default NavBar

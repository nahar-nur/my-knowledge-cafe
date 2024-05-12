import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
       <header>
       <div className='flex justify-between items-center p-4 border-b-2 max-w-7xl mx-auto'>
           <h3 className='text-4xl font-bold text-purple-900'>React Knowledge Cafe</h3>
           <img src={profile} alt="" /> 
        </div>
        </header>
    );
};

export default Header;
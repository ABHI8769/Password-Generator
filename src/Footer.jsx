import gitlogo from './assets/github_logo.png'
import linkedInlogo from './assets/linkedIn_logo.png'

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center">
        <p className="text-center">&copy; 2024 Abhijeet Goswami</p>
        <div className="social-links flex mt-4">
          <a
            href="https://github.com/ABHI8769"
            target="_blank"
            className="mr-4 last:mr-0"
          >
            <img src={gitlogo} alt="Github logo" className='w-6 h-6 '  />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijeet-goswami/"
            target="_blank"
            className="mr-4 last:mr-0"
          >
            <img src={linkedInlogo} alt="LinkedIn logo" className='w-6 h-6'/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


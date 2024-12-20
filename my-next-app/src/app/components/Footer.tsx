import Link from 'next/link';
import Image from 'next/image';
import profile from '@/Assets/profile.png';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="text-gray-600 bg-white body-font dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row items-center">
    
        <div className="flex items-center justify-center sm:justify-start mb-4 sm:mb-0">
          <Image
            src={profile}
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full border-2 border-black"
          />
          <div className="ml-3 text-xl">VibeWithJawaid</div>
        </div>


        <p className="text-sm text-gray-500 text-center sm:text-left sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 dark:text-gray-400">
          © 2024{' '}
          <Link
            href="https://vibewithjawaid.com"
            passHref
            className="hover:text-purple-600"
          >
            VibeWithJawaid.com
          </Link>
        </p>

      
        <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-auto">
          <Link
            href="https://web.facebook.com/profile.php?id=100083658815943&_rdc=1&_rdr"
            passHref
            className="text-gray-500 hover:text-blue-600 text-xl"
          >
            <FaFacebookF/>
          </Link>
          <Link
            href="https://instagram.com/nawab_javedali"
            passHref
            className="text-gray-500 hover:text-pink-400 text-xl"
          >
            <FaInstagram/>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jawaidaliofficial/"
            passHref
            className="text-gray-500 hover:text-blue-500 text-xl"
          >
            <FaLinkedin/>
          </Link>
          <Link
            href="https://github.com/jawaidali735/"
            passHref
            className="text-gray-500 hover:text-gray-900 text-xl"
          >
            <FaGithub/>
          </Link>
        </div>
      </div>
    </footer>
  );
}

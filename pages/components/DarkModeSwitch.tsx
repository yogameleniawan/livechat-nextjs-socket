
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';

export default function DarkModeSwitch() {
    const { theme, setTheme } = useTheme();
  
    return (
        <div className="flex py-4 justify-center">
            <FontAwesomeIcon onClick={ () => theme === 'dark' ? setTheme("light") : setTheme("dark") } className={`cursor-pointer px-3 py-1 rounded-full bg-slate-800 dark:bg-slate-50 ${theme === 'dark' ? 'text-yellow-400' : 'text-slate-50'}`} icon={theme === 'dark' ? faSun : faMoon} />
        </div>
    );
}
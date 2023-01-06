
import { useTheme } from 'next-themes';
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkMode() {
    const { theme, setTheme } = useTheme();
    
    return (
        <div className="flex py-4 justify-center">
            <DarkModeToggle 
                checked={theme === 'dark' ? true : false}
                onChange={ () => theme === 'dark' ? setTheme('light') : setTheme('dark')}
                size={60}
            />
        </div>
    );
}
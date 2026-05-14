import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiNodedotjs, 
  SiPhp, SiLaravel, SiMysql, SiTailwindcss, 
  SiFigma, SiGithub, SiTypescript, SiNextdotjs 
} from 'react-icons/si';
import { Terminal, Code2, Bot } from 'lucide-react';

export const SKILLS_DATA = [
  { id: 'html', name: 'HTML5', icon: SiHtml5, color: '#E34F26', description: 'Struktur dasar web yang selalu saya pakai buat bikin layout rapi.' },
  { id: 'css', name: 'CSS3', icon: SiCss, color: '#1572B6', description: 'Bikin tampilan jadi cantik dan responsif biar enak dilihat di HP atau laptop.' },
  { id: 'js', name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', description: 'Logika utama buat bikin website jadi interaktif dan hidup.' },
  { id: 'ts', name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: 'Temen setia biar kodingan lebih terstruktur dan nggak banyak error.' },
  { id: 'react', name: 'React', icon: SiReact, color: '#61DAFB', description: 'Library andalan buat bikin komponen UI yang bisa dipakai berulang kali.' },
  { id: 'next', name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', description: 'Framework buat bikin website React jadi lebih cepet dan SEO friendly.' },
  { id: 'node', name: 'Node.js', icon: SiNodedotjs, color: '#339933', description: 'Andalan buat bikin backend pakai JavaScript.' },
  { id: 'php', name: 'PHP', icon: SiPhp, color: '#777BB4', description: 'Bahasa backend yang fleksibel buat olah data di server.' },
  { id: 'laravel', name: 'Laravel', icon: SiLaravel, color: '#FF2D20', description: 'Framework PHP paling nyaman buat bangun sistem yang kompleks.' },
  { id: 'mysql', name: 'MySQL', icon: SiMysql, color: '#4479A1', description: 'Tempat simpan data-data website biar aman dan teratur.' },
  { id: 'tailwind', name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', description: 'Utility CSS yang bikin proses styling jadi jauh lebih sat-set.' },
  { id: 'figma', name: 'Figma', icon: SiFigma, color: '#F24E1E', description: 'Tempat ngedesain dan bikin prototype sebelum mulai ngoding.' },
  { id: 'github', name: 'GitHub', icon: SiGithub, color: '#ffffff', description: 'Penyimpanan kodingan sekaligus buat kolaborasi bareng tim.' },
  { id: 'vscode', name: 'VS Code', icon: Terminal, color: '#007ACC', description: 'Editor andalan tempat semua keajaiban koding terjadi.' },
  { id: 'cpp', name: 'C++', icon: Code2, color: '#00599C', description: 'Bahasa pemrograman tingkat tinggi buat performa maksimal.' },
  { id: 'java', name: 'Java', icon: Code2, color: '#007396', description: 'Bahasa pemrograman robust buat bangun aplikasi skala besar.' },
  { id: 'antigravity', name: 'Antigravity', icon: Bot, color: '#00ffd5', description: 'AI Coding Assistant masa depan buat workflow koding yang lebih kenceng.' },
];
